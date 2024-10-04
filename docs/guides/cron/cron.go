package main

import (
	"context"
	"fmt"
	"log/slog"

	"github.com/go-arrower/arrower"
)

type MyJob struct {
	Payload string
}

func main() {
	a, err := arrower.New()
	if err != nil {
		panic(err)
	}

	// highlight-start
	err = a.DefaultQueue.RegisterJobFunc(func(ctx context.Context, job MyJob) error {
		a.Logger.InfoContext(ctx, "process job with data", slog.String("payload", job.Payload))
		return nil
	})
	// highlight-end
	if err != nil {
		panic(err)
	}

	// highlight-next-line
	err = a.DefaultQueue.Schedule("@every 1m", MyJob{Payload: "cron payload"})
	if err != nil {
		panic(err)
	}

	a.WebRouter.Logger.Fatal(a.WebRouter.Start(fmt.Sprintf(":%d", a.Config.HTTP.Port)))
}
