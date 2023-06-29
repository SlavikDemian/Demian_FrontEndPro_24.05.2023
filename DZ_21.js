/*
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
        if (this.arrayApartment.length >= this.maxAparment) {
            console.log(`Attention: The maximum number of apartments has been exceeded`)
        } else {
            this.arrayApartment.push(apart)
        }
    }
}


const hum1 = new Human('Toma', 'female')
const hum2 = new Human('Jack', 'male')
console.log(hum1, hum2)


const apartment1 = new Apartment()
const apartment2 = new Apartment()
apartment1.addHumanToApartment(hum1)
apartment2.addHumanToApartment(hum2)
console.log(apartment1, apartment2)


const apartment3 = new Apartment()
apartment3.addHumanToApartment(hum1.name)
console.log(apartment3)


const hou1 = new House(10)
const hou2 = new House(4)
hou1.addApartmentToHouse(apartment1)

hou2.addApartmentToHouse(apartment2)
hou2.addApartmentToHouse(apartment2)
hou2.addApartmentToHouse(apartment2)
hou2.addApartmentToHouse(apartment2)
hou2.addApartmentToHouse(apartment2)
console.log(hou1,hou2)



const hou3 = new House(15)
hou3.addApartmentToHouse(apartment1)
console.log(hou3)
*/








