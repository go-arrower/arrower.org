package main

import (
	"context"
	"fmt"
	"os"

	"github.com/go-arrower/arrower/repository"
)

type (
	EntityID string

	Entity struct {
		ID   EntityID
		Name string
	}
)

func main() {
	dir := os.TempDir()

	// highlight-start
	store := repository.NewJSONStore(dir)
	repo := repository.NewMemoryRepository[Entity, EntityID](repository.WithStore(store))
	// highlight-end

	entities, err := repo.All(context.Background())
	if err != nil {
		panic(err)
	}

	fmt.Println(entities)
}
