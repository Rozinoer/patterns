class Pizza {
  constructor(builder) {
    this.size = builder.size;
    this.cheeze = builder.cheeze || false;
    this.pepperoni = builder.pepperoni;
    this.tomato = builder.tomato || false;
    if (builder.date) {
      this.date = builder.date || new Date();
    }
    this.address = builder.address;
  }
}

class PizzaBuilder {
  pepperoni = false;

  constructor(size) {
    this.size = size;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addCheeze() {
    this.cheeze = true;
    return this;
  }

  addTomato(count) {
    this.tomato = count;
    return this;
  }

  setDate(date) {
    this.date = date;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  build() {
    return new Pizza(this);
  }
}

const pizza = new PizzaBuilder(31)
  .addTomato(3)
  .setAddress('Ленина 18')
  .setDate(new Date(2020, 1, 24))
  .build();

console.log(pizza)