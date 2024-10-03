package main

import (
	"context"
	"fmt"
	"log/slog"
	"net/http"

	"github.com/labstack/echo/v4"

	"github.com/go-arrower/arrower"
)

type MyJob struct {
	Payload string
}

func main() {
	a, _, err := arrower.New()
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

	a.WebRouter.POST("/add-job", func(c echo.Context) error {
		// highlight-next-line
		err := a.DefaultQueue.Enqueue(c.Request().Context(), MyJob{Payload: c.FormValue("payload")})
		if err != nil {
			return err
		}

		return c.NoContent(http.StatusAccepted)
	})

	a.WebRouter.Logger.Fatal(a.WebRouter.Start(fmt.Sprintf(":%d", a.Config.HTTP.Port)))
}
