
function findAveragePhonePrice(phones) {
    // console.log(phones)
    let sum = 0;
    for (let i = 0 ; i <phones.length ; i++) {
        // console.log(phones[i])
        sum = sum + phones[i].price;
    }
    const totalPhoneModels = phones.length
    return parseInt(sum/totalPhoneModels);
    
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const averagePrice = findAveragePhonePrice(phones);
console.log(averagePrice)