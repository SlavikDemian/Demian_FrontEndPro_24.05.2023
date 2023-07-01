/*
class Student {
    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
    }

    studentAge() {
        const yearNow = 2023;
        return yearNow - this.yearOfBirth
    }

    rating = [];
    averageRating() {
        return this.rating.reduce((a, b) => a + b, 0) / this.rating.length
    }

    attendance = [];
    present(num){
        if(this.rating.length < 25){
            return this.rating.push(num) + this.attendance.push(true)
        } else {
            console.log(`Превышена длина записи баллов студента`)
        }
    }

    absent(){
        if(this.attendance.length < 25){
            return this.attendance.push(false)
        }else {
            console.log(`Превышена длина записи посещаемости студента`)
        }
    }

    summary(){
        if (this.averageRating() > 90 && (this.rating.length / this.attendance.length) > 0.9){
            console.log(`${this.name} - Молодець!`)
        } else if (this.averageRating() > 90 || (this.rating.length / this.attendance.length) > 0.9) {
            console.log(`${this.name} - Добре, але можна краще `)
        } else {
            console.log(`${this.name} - Редиска!`)
        }
    }
}

const stud1 = new Student('John', 'Tribbiani', 2002);
const stud2 = new Student('Rick', 'McCartney', 2004);
const stud3 = new Student('Janet', 'Reno', 2001);
console.log(stud1, stud2, stud3)
////

const yearStudent1 =  stud1.studentAge(); const yearStudent2 =  stud2.studentAge(); const yearStudent3 =  stud3.studentAge();
console.log(`${yearStudent1} - возраст студента ${stud1.name}, ${yearStudent2} - возраст студента ${stud2.name}, ${yearStudent3} - возраст студента ${stud3.name}`)
////

stud1.present(5), stud1.present(10), stud1.present(15), stud1.present(20), stud1.present(23),
    stud1.present(25), stud1.present(33), stud1.present(35), stud1.present(37), stud1.present(40),
    stud1.present(42), stud1.present(43), stud1.present(44), stud1.present(45), stud1.present(50),
    stud1.present(50), stud1.present(43), stud1.present(45), stud1.present(48), stud1.present(50),
    stud1.present(55), stud1.present(60), stud1.present(65), stud1.present(80);

stud1.absent();
console.log(stud1.rating, stud1.attendance)

stud2.present(80), stud2.present(90), stud2.present(100), stud2.present(77), stud2.present(89),
    stud2.present(90), stud2.present(90), stud2.present(98), stud2.present(80), stud2.present(78),
    stud2.present(99), stud2.present(90), stud2.present(89), stud2.present(95), stud2.present(96),
    stud2.present(100), stud2.present(95), stud2.present(77), stud2.present(94), stud2.present(93),
    stud2.present(99), stud2.present(88), stud2.present(93), stud2.present(97);

stud2.absent();
console.log(stud2.rating, stud2.attendance)

stud3.present(55), stud3.present(30), stud3.present(45), stud3.present(30), stud3.present(83),
    stud3.present(65), stud3.present(53), stud3.present(45), stud3.present(77), stud3.present(40),
    stud3.present(42), stud3.present(43), stud3.present(44), stud3.present(45), stud3.present(50),
    stud3.present(55), stud3.present(60), stud3.present(65), stud3.present(80);

stud3.absent(), stud3.absent(),stud3.absent(),stud3.absent(), stud3.absent(), stud3.absent();
console.log(stud3.rating, stud3.attendance)
////

const ratingStud1 = stud1.averageRating(); const ratingStud2 = stud2.averageRating(); const ratingStud3 = stud3.averageRating();
console.log(`Средний балл - ${Math.round(ratingStud1)} студента ${stud1.name}, Средний балл - ${Math.round(ratingStud2)} студента ${stud2.name}, Средний балл - ${Math.round(ratingStud3)} студента ${stud3.name},`)
////

stud1.summary()
stud2.summary()
stud3.summary()
*/


