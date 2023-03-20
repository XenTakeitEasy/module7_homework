function Product(name) {
	this.device = 'kitchen appliances',
	this.name = name
}

Product.prototype.getPower = function (power, t, off) {
	let turnOn = off;

	if(off === 0){
		turnOn = 'OFF';

	}else{
		turnOn = 'ON';
	};
	

	console.log(`Energy consumption of the ${this.name} per ${t} hour is ${power * t} watts. The ${this.name}'s work mode is ${turnOn}`);
};

function Properties(name, color, brand) {
    this.name = name,
	this.color = color,
    this.brand = brand
}

Properties.prototype = new Product();

const toaster = new Properties ('toaster', 'white', 'Hotpoint-Ariston');
const steamer = new Properties ('steamer', 'red', 'Philips');
const oven = new Properties ('oven', 'black', 'Siemens');

console.log(toaster, steamer, oven);
toaster.getPower(1300, 3, 0);
steamer.getPower(1800, 2, 1);
oven.getPower(4000, 4, 1);
