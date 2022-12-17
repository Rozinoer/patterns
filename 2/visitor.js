class Monkey {
    shout() {
        console.log('Ooh oo aa aa!')
    }

    accept(operation) {
        operation.visitMonkey(this)
    }
}

class Lion {
    roar() {
        console.log('Roaaar!')
    }

    accept(operation) {
        operation.visitLion(this)
    }
}

class Dolphin {
    speak() {
        console.log('Tuut tuttu tuutt!')
    }

    accept(operation) {
        operation.visitDolphin(this)
    }
}

// Посетители
class Visitor {
    visitMonkey(monkey) {
        throw new Error(`В ${this.constructor.name} не описан метод visitMonkey()`)
    }
    visitLion(lion) {
        throw new Error(`В ${this.constructor.name} не описан метод visitLion()`);
    }
    visitDolphin(dolphin) {
        throw new Error(`В ${this.constructor.name} не описан метод visitDolphin()`);
    }
}

class voiceVisitor extends Visitor {
    visitMonkey(monkey){
        monkey.shout()
    }
    visitLion(lion){
        lion.roar()
    }
    visitDolphin(dolphin){
        dolphin.speak()
    }
}

class jumpVisitor extends Visitor {
    visitMonkey(monkey) {
        console.log('Jumped 20 feet high! on to the tree!')
    }
    visitLion(lion) {
        console.log('Jumped 7 feet! Back on the ground!')
    }
    visitDolphin(dolphin) {
        console.log('Walked on water a little and disappeared')
    }
}


const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()
const voicer = new voiceVisitor();
const jumper = new jumpVisitor();


monkey.accept(voicer)    
lion.accept(voicer)     
dolphin.accept(voicer)   

monkey.accept(voicer)   
monkey.accept(jumper)   

lion.accept(voicer)    
lion.accept(jumper)      

dolphin.accept(voicer)  
dolphin.accept(jumper)  
