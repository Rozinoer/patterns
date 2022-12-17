#include "Animal.hpp"
#include "Dog.hpp"
#include "Cat.hpp"

int main ( void )
{
    //wrong animal class
    Dog *dog = new Dog();
    Cat *cat = new Cat();
    Animal *an = new Animal();
    dog->makeSound();
    cat->makeSound();
    an->makeSound();

    return (0);
}