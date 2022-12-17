#include "Dog.hpp"

Dog::Dog(/* args */)
{
    this->_type = "Dog";
}

Dog::~Dog()
{
}

void Dog::makeSound() const
{
    std::cout << "🐕: Yip" << std::endl;
}

Dog::Dog(Dog const &other)
{
    std::cout << "Copy constructor" << std::endl;
    *this = other;
}
 
Dog &Dog::operator=(const Dog &other)
{
    std::cout << "Assignation operator called" << std::endl;
    if (this != &other)
    {
        this->_type = other._type;
    }
    return *(this);
}