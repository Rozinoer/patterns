class IteratorClass {
    constructor(data) {
        this.index = -1;
        this.data = data;
        this.done = false;
        this.checkDataType(data);
    }
    
    checkDataType(data) {
        if (Array.isArray(data)) { 
            this.collectionLength = this.data.length - 1;
            this.collection = this.data;
            this.type = 'array';
        } else if (!Array.isArray(data) && typeof data == 'object') { 
            this.collectionLength = Object.keys(this.data).length - 1;
            this.collection = Object.values(this.data);
            this.type = 'object';
        } 
    }
    
    next() {
        if (this.index < this.collectionLength) {
            this.index++;
            return {key: Object.keys(this.data)[this.index], value: this.collection[this.index],
                    done: false, index: this.index, type: this.type};
        } else {
            this.done = true;
            return {done: true, msg: 'достигнут конец коллекции', index: this.index, type: this.type};
        }
    }
    
    prev() {
        if (this.done) {
            this.done = false;
            this.index = this.collectionLength + 1;
        }
        this.index--;
        if (this.index > -1) {
            return {key: Object.keys(this.data)[this.index], value: this.collection[this.index],
                    done: false, index: this.index, type: this.type};
        } else {
            this.index = -1;
            return {done: this.done, msg: 'достигнуто начало коллекции', index: this.index, type: this.type};
        }
    }
}

console.log('Итерируем массив:');
const gen = new IteratorClass(['Hi', 'Hello', 'Bye']);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.prev());
console.log(gen.prev());
console.log(gen.prev());
console.log(gen.prev());
console.log(gen.next());

console.log('Итерируем объект:');
const obj = new IteratorClass({a: '1h', b: '2o', c: '3Bye'});
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.prev());
console.log(obj.prev());
console.log(obj.prev());
console.log(obj.prev());
console.log(obj.prev());
console.log(obj.prev());
console.log(obj.prev());
console.log(obj.next());

console.log('Итерируем строку:');
const string = new IteratorClass('1hello');
console.log(string.next());
console.log(string.next());
