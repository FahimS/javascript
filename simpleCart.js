const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3200 },
    { name: 'belt', price: 200 },
];
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        sum = sum + element.price;
    }
    return sum;
}
const total = totalCost(shoppingCart);
console.log(total);