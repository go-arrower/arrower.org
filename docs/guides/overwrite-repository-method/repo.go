package main

import (
	"context"

	"github.com/go-arrower/arrower/repository"
)

type UserID int

type User struct {
	ID    UserID
	Login string
}

func main() {
	repo := NewUserMemoryRepository()

	// highlight-next-line
	_, _ = repo.Count(context.Background())
}

func NewUserMemoryRepository() *UserMemoryRepository {
	return &UserMemoryRepository{
		// highlight-next-line
		MemoryRepository: repository.NewMemoryRepository[User, UserID](),
	}
}

type UserMemoryRepository struct {
	// highlight-next-line
	*repository.MemoryRepository[User, UserID]
}

// Count overwrites the existing Count method with your own implementation.
// highlight-start
func (repo *UserMemoryRepository) Count(_ context.Context) (int, error) {
	return -1, nil
}

// highlight-end
