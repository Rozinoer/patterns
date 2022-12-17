#pragma once

#include "Animal.hpp"

class Dog : public Animal
{
private:

public:
    void makeSound() const;
    Dog(/* args */);
    ~Dog();
    Dog(const Dog &other);
    Dog &operator = (const Dog &other);
};

