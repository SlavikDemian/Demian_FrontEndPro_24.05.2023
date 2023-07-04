/*

class Hamburger{
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    static SIZE_SMALL = {
        name: 'SIZE_SMALL',
        price: 50,
        calories: 20,
    }
    static SIZE_BIG = {
        name: 'SIZE_BIG',
        price: 100,
        calories: 40,
    }
    static STUFFING_CHEESE = {
        name: 'STUFFING_CHEESE',
        price: 10,
        calories: 20,
    }
    static STUFFING_SALAD = {
        name: 'STUFFING_SALAD',
        price: 20,
        calories: 5,
    }
    static STUFFING_FRENCH_FRIES = {
        name: 'STUFFING_FRENCH_FRIES',
        price: 15,
        calories: 10,
    }
    static TOPPING_MAYO = {
        name: 'TOPPING_MAYO',
        price: 20,
        calories: 5,
    }
    static TOPPING_SEASONING = {
        name: 'TOPPING_SEASONING',
        price: 15,
        calories: 0,
    }

    addTopping(topping) {
        this.toppings.push(topping)
    }

    calcCalories(){
const toppingCalories = this.toppings.reduce((sum, topping) => sum + topping.calories, 0)
return this.size.calories + this.stuffing.calories + toppingCalories
    }
    calcPrice(){
        const toppingPrice = this.toppings.reduce((sum, topping) => sum + topping.price, 0)
        return this.size.price + this.stuffing.price + toppingPrice
    }


}


const hamb1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE )
console.log(hamb1)

hamb1.addTopping(Hamburger.TOPPING_MAYO)

console.log('Calories', + hamb1.calcCalories())

console.log('Price', + hamb1.calcPrice())

hamb1.addTopping(Hamburger.TOPPING_SEASONING)

console.log('Price + SEASONING', + hamb1.calcPrice())



const hamb2 = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_FRENCH_FRIES)
console.log(hamb2)
hamb2.addTopping(Hamburger.TOPPING_MAYO)
hamb2.addTopping(Hamburger.TOPPING_SEASONING)
console.log('Calories', + hamb2.calcCalories())
console.log('Price', + hamb2.calcPrice())

 */