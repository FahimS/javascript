var isGraduated = true;
var salary = 40000;
var cars = 0;

// if (isGraduated == true) {
//     console.log('esho biye kore feli');
// } else {
//     console.log('tor kopale biye nai');
// }

// ............................... 
if (isGraduated == true && salary > 50000 && cars > 1) {
    console.log('esho biye kore feli');
} else {
    console.log('tor kopale biye nai');
}

// ........................... 
if (isGraduated == true || salary > 50000 || cars > 1) {
    console.log('esho biye kore feli');
} else {
    console.log('tor kopale biye nai');
}

// ........................... 
if (isGraduated == true && salary > 50000 || cars > 1) {
    console.log('esho biye kore feli');
} else {
    console.log('tor kopale biye nai');
}