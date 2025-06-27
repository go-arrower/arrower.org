package main

import (
	"context"
	"fmt"
	"log/slog"
	"os"
	"os/exec"
	"path/filepath"
	"syscall"
	"time"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Fprintln(os.Stderr, "Usage: missing argument <directory>")
		os.Exit(1)
	}

	root := os.Args[1]

	slog.SetDefault(slog.New(slog.NewTextHandler(os.Stderr, &slog.HandlerOptions{
		AddSource: false,
		Level:     slog.LevelDebug,
		ReplaceAttr: func(_ []string, attr slog.Attr) slog.Attr {
			if attr.Key == slog.TimeKey {
				attr = slog.Attr{}
			}

			return attr
		},
	})))

	slog.Info("Running guides in", slog.String("dir", root))

	err := runForAllFolders(root)
	if err != nil {
		os.Exit(1)
	}
}

func runForAllFolders(root string) error {
	err := filepath.WalkDir(root, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return fmt.Errorf("could not walk path: %w", err)
		}

		if d.IsDir() {
			goFiles, err := filepath.Glob(filepath.Join(path, "*.go"))
			if err != nil {
				return fmt.Errorf("could not find Go files: %w", err)
			}

			if len(goFiles) == 0 {
				return nil
			}

			goFile := goFiles[0]
			if err := runGoFile(goFile); err != nil {
				return fmt.Errorf("could not run guide: %w", err)
			}
		}

		return nil
	})

	if err != nil {
		return fmt.Errorf("could not walk root directory: %w", err)
	}

	return nil
}

func runGoFile(goFile string) error {
	slog.Info("Run guide", slog.String("guide", goFile))

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cmd := exec.CommandContext(ctx, "go", "run", filepath.Base(goFile))
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.Dir = filepath.Dir(goFile)
	cmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}

	if err := cmd.Start(); err != nil {
		return fmt.Errorf("could not start guide: %w", err)
	}

	done := make(chan error)
	go func() { done <- cmd.Wait() }()

	select {
	case <-ctx.Done():
		if cmd.Process != nil {
			pgid, _ := syscall.Getpgid(cmd.Process.Pid)
			syscall.Kill(-pgid, syscall.SIGKILL)
		}

		slog.Debug("Timout reached", slog.String("guide", goFile))
	case err := <-done:
		if err != nil {
			return fmt.Errorf("guide failed: %w", err)
		}
	}

	return nil
}
