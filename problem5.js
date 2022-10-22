var fruits = ['Apple', 'Banana', 'Orange'];
var findBananIndex = fruits.indexOf('Banana');
console.log(findBananIndex);

fruits[findBananIndex] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);