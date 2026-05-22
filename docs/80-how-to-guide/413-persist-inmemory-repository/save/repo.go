package main

import (
	"context"
	"os"

	"github.com/brianvoe/gofakeit/v6"
	"github.com/google/uuid"

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
	repo := arepo.NewMemoryRepository[Entity, EntityID](
		arepo.WithStore(store),
		arepo.WithStoreFilename("Entity.json"), // optional, defaults to struct name + `.json`
	)
	// highlight-end

	err := repo.Save(context.Background(), Entity{
		ID:   EntityID(uuid.New().String()),
		Name: gofakeit.Name(),
	})
	if err != nil {
		panic(err)
	}
}
