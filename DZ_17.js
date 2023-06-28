/*
function Person (name, age){
    this.name = name;
    this.age = age;

    this.infoAboutPerson = function (){
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}


function Auto (brand, model, year_of_release, license_plate){

    this.brand = brand;
    this.model = model;
    this.year_of_release = year_of_release;
    this.license_plate = license_plate;

    this.owner = function(owner){
        if (owner.age < 18){
            console.log('Age under 18!!!')
        } else {
            this.ownerName = owner;
        }
    }

    this.infoAuto = function (){
        console.log(`Auto: ${this.brand} ${this.model} ${this.year_of_release} ${this.license_plate}`)

        if (this.ownerName){
            this.ownerName.infoAboutPerson()
        } else {
            console.log(`${this.brand} ${this.model} владельца не имееет`)
        }

    }
}



const humanTom = new Person('Tom', 30);
const humanJohn = new Person('John', 16);
const humanYan = new Person('Yan', 35)

humanTom.infoAboutPerson()
humanJohn.infoAboutPerson()
humanYan.infoAboutPerson()


const autoHonda = new Auto('Honda', 'Accord', 2007, 'BH8907IA');
const autoMazda = new Auto('Mazda', '6', 2004, 'BH0203AA');
const autoFord = new Auto('Ford', 'Escape', 2016, 'BH8800II');


autoHonda.owner(humanTom);
autoMazda.owner(humanJohn);
autoFord.owner(humanYan);

autoHonda.infoAuto();
autoMazda.infoAuto();
autoFord.infoAuto();

 */