package main

import (
	"context"

	"github.com/go-arrower/arrower/arepo"
)

type UserID int

type User struct {
	ID    UserID
	Login string
}

func main() {
	repo := NewUserMemoryRepository()

	// highlight-next-line
	_, err := repo.Count(context.Background())
	if err != nil {
		panic(err)
	}
}

func NewUserMemoryRepository() *UserMemoryRepository {
	return &UserMemoryRepository{
		// highlight-next-line
		MemoryRepository: arepo.NewMemoryRepository[User, UserID](),
	}
}

type UserMemoryRepository struct {
	// highlight-next-line
	*arepo.MemoryRepository[User, UserID]
}

// Count overwrites the existing Count method with your own implementation.
// highlight-start
func (repo *UserMemoryRepository) Count(_ context.Context) (int, error) {
	return -1, nil
}

// highlight-end
