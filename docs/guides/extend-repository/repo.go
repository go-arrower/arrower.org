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
	_, _ = repo.FindByLogin(context.Background(), "hello@arrower.org")
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

// FindByLogin implements a custom method, that is not supported by the Repository out of the box.
// highlight-start
func (repo *UserMemoryRepository) FindByLogin(ctx context.Context, login string) (User, error) {
	all, _ := repo.All(ctx)

	for _, u := range all {
		if u.Login == login {
			return u, nil
		}
	}

	return User{}, repository.ErrNotFound
}

// highlight-end
