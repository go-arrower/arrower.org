package main

import (
	"context"
	"fmt"
	"os"

	"github.com/go-arrower/arrower/arepo"
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
	store := arepo.NewJSONStore(dir)
	repo := arepo.NewMemoryRepository[Entity, EntityID](arepo.WithStore(store))
	// highlight-end

	entities, err := repo.All(context.Background())
	if err != nil {
		panic(err)
	}

	fmt.Println(entities)
}
