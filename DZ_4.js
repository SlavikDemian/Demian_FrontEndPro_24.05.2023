/*
const userAge = prompt('Введите свой год рождения')
const userCity = prompt ('Введите город с котором Вы живете')
const userSport = prompt('Введите любимый вид спорта')
const nowYear = 2023
const cityFirst = 'Київ'
const citySecond = 'Вашингтон'
const cityThird = 'Лондон'
const sportFirst = 'Греко-римська боротьба'
const sportSecond = 'Футбол'
const sportThird = 'Бокс'
const sportFirstAthlete = 'Беленюк Жан'
const sportSecondAthlete = 'Шевченко Андрій'
const sportThirdAthlete = 'Олександр Усик'
let userCityLive
let ageOfUserStri
let userDoSport


if(userAge) {
    ageOfUserStri = nowYear - userAge
}else if (userAge === null || userAge ==='') {
    ageOfUserStri = 'Шкода, що Ви не захотіли ввести свій вік'
}


if (userCity === cityFirst || userCity === citySecond || userCity === cityThird){
    userCityLive = `Ти живеш у столиці ${userCity}`
} else if(userCity){
    userCityLive = `Ти живеш у місті ${userCity}`
}else if (userCity === null || userCity ==='') {
    userCityLive = 'Шкода, що Ви не захотіли ввести свое місто'
}


if (userSport === sportFirst){
    userDoSport = `Круто! Хочеш стати ${sportFirstAthlete}`
} else if(userSport === sportSecond) {
    userDoSport = `Круто! Хочеш стати ${sportSecondAthlete}`
} else if(userSport === sportThird) {
    userDoSport = `Круто! Хочеш стати ${sportThirdAthlete}`
} else if (userSport) {
    userDoSport = `Круто! Ти займаєшся ${userSport}`
} else if (userSport === null || userSport ==='') {
    userDoSport = 'Шкода, що Ви не захотіли ввести свій вид спорту'
}

alert(`${ageOfUserStri} ${userCityLive} ${userDoSport}`)
*/