const phones = [
    {
        name: 'Samsung',
        camera: 12,
        storage: '32gb',
        price: 36000,
        color: 'Silver'
    },
    {
        name: 'Walton',
        camera: 12,
        storage: '32gb',
        price: 16000,
        color: 'Silver'
    },
    {
        name: 'Realme',
        camera: 12,
        storage: '32gb',
        price: 26000,
        color: 'Silver'
    },
    {
        name: 'iPhone',
        camera: 12,
        storage: '32gb',
        price: 86000,
        color: 'Silver'
    },
    {
        name: 'Xaomi',
        camera: 12,
        storage: '32gb',
        price: 46000,
        color: 'Silver'
    },
    {
        name: 'Huawei',
        camera: 12,
        storage: '32gb',
        price: 56000,
        color: 'Silver'
    }
]
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const element = phones[i];
        // console.log(element);
        if (element.price <cheapest.price) {
            cheapest = element;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);