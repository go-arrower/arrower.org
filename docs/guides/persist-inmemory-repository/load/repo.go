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

	entities, _ := repo.All(context.Background())
	fmt.Println(entities)
}
