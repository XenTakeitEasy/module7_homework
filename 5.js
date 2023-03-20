class Product {
    constructor(color, brand, name, power) {
      this.color = color;
        this.brand = brand;
        this.name = name;
        this.power = power;
        this.isOffOn = false;
    }

    on() {
        console.log(`The ${this.color} ${this.brand} ${this.name} is on`);
        this.isOffOn = true;
    }

    off() {
        console.log(`The ${this.color} ${this.brand} ${this.name} is off`);
        this.isOffOn = false;
    }

    totalPower() {
        if (this.isOffOn) return this.power;
        else return 0;
    }
}

const toaster = new Product('black','Hotpoint-Ariston', 'toaster', 1300);
const steamer = new Product('pink','Philips', 'steamer', 1800);
const oven = new Product('brown','Siemens', 'oven', 4000);

toaster.on();
steamer.on();
oven.off();

console.log(`Total power consumption is ${toaster.totalPower() + steamer.totalPower() + oven.totalPower()} watt`);