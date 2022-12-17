NAME = sound

CC = clang++ -g -std=c++98

CFLAGS = -Wall -Wextra -Werror

HEADER = Animal.hpp Cat.hpp Dog.hpp

SRC = main.cpp \
		Animal.cpp \
		Dog.cpp \
		Cat.cpp \
		

SRCS = $(SRC)

all: $(NAME)

$(NAME): $(SRCS) $(HEADER)
	@echo "\n"
	@echo "\033[0;32mCompiling $(NAME)..."
	@$(CC) $(CFLAGS) $(SRCS) -o $(NAME)
	@echo "\n\033[0mDone !"

clean:
	@echo "\nRemoving binaries..."
	@echo "\033[0m"

fclean:
	@echo "\033[0;31m\nDeleting objects..."
	@rm -f $(OBJ)
	@echo "\nDeleting executable..."
	@rm -f $(NAME)
	@echo "\nDeleting trash..."
	@rm -f *.out
	@echo "\033[0m"

re: fclean all

test: all
	./$(NAME)

norm:
	norminette $(SRC) includes/$(HEADER)

git:
	git add *
	git commit -m "add"
	git push

.PHONY: clean fclean re test norm