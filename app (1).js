var faker = require('faker');

console.log(faker.internet.email());

console.log(faker.date.past());

// console.log(faker.address.streetAddress());
// console.log(faker.address.city());
// console.log(faker.address.state());

function generateaddress(){
	console.log(faker.address.streetAddress());
console.log(faker.address.city());
console.log(faker.address.state());
}

generateaddress();