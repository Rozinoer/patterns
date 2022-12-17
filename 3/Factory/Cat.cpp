#include "Cat.hpp"

Cat::Cat(/* args */)
{
    this->_type = "Cat";
}

void Cat::makeSound() const
{
    std::cout << "🐈: Meow" << std::endl;
}

Cat::~Cat()
{
}

Cat::Cat(Cat const &other)
{
    std::cout << "Copy constructor" << std::endl;
    *this = other;
}
 
Cat &Cat::operator=(const Cat &other)
{
    std::cout << "Assignation operator called" << std::endl;
    if (this != &other)
    {
        this->_type = other._type;
    }
    return *(this);
}