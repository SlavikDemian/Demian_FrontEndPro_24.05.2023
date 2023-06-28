
class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}


class Apartment {
    arrayResident = [];
    addHumanToApartment(hum) {
        if(this.arrayResident){
            this.arrayResident.push(hum)
        }
    }
}


class House {
    arrayApartment = [];
    constructor(maxApartment) {
        this.maxAparment = maxApartment;
    }

    addApartmentToHouse(apart) {
        if (apart > this.maxAparment) {
            console.log(`Attention: The maximum number of apartments has been exceeded`)
        } else {
            this.arrayApartment.push(apart)
        }
    }
}


const hum1 = new Human('Toma', 'female')
const hum2 = new Human('Jack', 'male')
console.log(hum1, hum2)


const addHumApar1 = new Apartment()
const addHumApar2 = new Apartment()
addHumApar1.addHumanToApartment('Viktoria')
addHumApar2.addHumanToApartment('Sergei')
addHumApar1.addHumanToApartment('Irina')
console.log(addHumApar1, addHumApar2)


const addHumApar3 = new Apartment()
addHumApar3.addHumanToApartment(hum1.name)
console.log(addHumApar3)


const hou1 = new House(10)
const hou2 = new House(300)
hou1.addApartmentToHouse(30)
hou2.addApartmentToHouse(50)
console.log(hou1,hou2)


const hou3 = new House(15)
hou3.addApartmentToHouse(addHumApar1)
console.log(hou3)