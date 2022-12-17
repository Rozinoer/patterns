#include "Animal.hpp"

void Animal::makeSound() const
{
    std::cout << "some random sound" << std::endl;
}

Animal::Animal(/* args */)
{
    this->_type = "def";
}

Animal::~Animal()
{
}

Animal::Animal(Animal const &other)
{
    std::cout << "Copy constructor" << std::endl;
    *this = other;
}
 
Animal &Animal::operator=(const Animal &other)
{
    std::cout << "Assignation operator called" << std::endl;
    if (this != &other)
    {
        this->_type = other._type;
    }
    return *(this);
}