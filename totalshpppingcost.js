
function requiredGadget(qLaptop, qTablet, qMobile) {
    // per unit price
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    // per product cost
    const costLaptop = qLaptop * laptop;
    const costTablet = qTablet * tablet;
    const costMobile = qMobile * mobile;
    // total cost
    moneyRequired = costLaptop + costTablet + costMobile;

    return moneyRequired;
}

const needLaptop = 2;
const needMobile = 3;
const needTablet = 1;
const totalNeed = requiredGadget(needLaptop, needTablet, needMobile);
console.log(totalNeed)