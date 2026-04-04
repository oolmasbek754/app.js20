// Number Methods
let num = 10_000_000;
let myNum = 4.1

// Rounding
console.log(Math.round(myNum)); // normal yaxlitlash
console.log(Math.floor(myNum)); // pastga yaxlitlash
console.log(Math.ceil(myNum)); // yuqoriga yaxlitlash
console.log(Math.trunc(myNum)); // nuqtadan keyingi qismini tashlab yuboradi

// isNaN - son bolmagan ma'lumot turimi 
// NaN - Not a Number - Son emas
console.log(isNaN("abs")); // true
console.log(NaN === NaN); // false

// isFinite 
console.log(isFinite("abs")); // false
console.log(isFinite(10)); // true
console.log(isFinite(Infinity)); // false
