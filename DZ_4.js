let userAge = prompt('Введите свой год рождения')
let userCiti = prompt ('Введите город с котором Вы живете')
let userSport = prompt('Введите любимый вид спорта')
let nowYear = 2023
// let userCitiCapital

let citiFirst = 'Київ'
let citiSecond = 'Вашингтон'
let citiThird = 'Лондон'
let sportFirst = 'Греко-римська боротьба'
let sportSecond = 'Футбол'
let sportThird = 'Бокс'
let sportFirstAthlete = 'Беленюк Жан'
let sportSecondAthlete = 'Шевченко Андрій'
let sportThirdAthlete = 'Олександр Усик'
// let ageOfUserStri = nowYear - userAge

if (userCiti === citiFirst || userCiti === citiSecond || userCiti === citiThird){
    userCitiCapital = `Ти живеш у столиці ${userCiti}`
    if (userSport === sportFirst){
        sportStruggle = `Круто! Хочеш стати ${sportFirstAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiCapital}  ${sportStruggle}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiCapital}  ${sportStruggle}`)
        }
    } else if(userSport === sportSecond) {
        sportFootball = `Круто! Хочеш стати ${sportSecondAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiCapital}  ${sportFootball}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiCapital}  ${sportFootball}`)
        }
    } else if(userSport === sportThird) {
        sportBox = `Круто! Хочеш стати ${sportThirdAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiCapital}  ${sportBox}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiCapital}  ${sportBox}`)
        }
    } else {
        userSportCancel = 'Шкода, що Ви не захотіли ввести свій(ю) спорт'
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiCapital}  ${userSportCancel}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiCapital}  ${userSportCancel}`)
        }
    }
} else if (userCiti) {
    userCitiLive = `Ти живеш у місті ${userCiti}`
    if (userSport === sportFirst){
        sportStruggle = `Круто! Хочеш стати ${sportFirstAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiLive}  ${sportStruggle}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiLive}  ${sportStruggle}`)
        }
    } else if(userSport === sportSecond) {
        sportFootball = `Круто! Хочеш стати ${sportSecondAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiLive}  ${sportFootball}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiLive}  ${sportFootball}`)
        }
    } else if(userSport === sportThird) {
        sportBox = `Круто! Хочеш стати ${sportThirdAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiLive}  ${sportBox}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiLive}  ${sportBox}`)
        }
    } else {
        userSportCancel = 'Шкода, що Ви не захотіли ввести свій(ю) спорт'
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiLive}  ${userSportCancel}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiLive}  ${userSportCancel}`)
        }
    }
} else if (userCiti === null) {
    userCitiCancel = 'Шкода, що Ви не захотіли ввести свій(ю) місто'
    if (userSport === sportFirst){
        sportStruggle = `Круто! Хочеш стати ${sportFirstAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiCancel}  ${sportStruggle}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiCancel}  ${sportStruggle}`)
        }
    } else if(userSport === sportSecond) {
        sportFootball = `Круто! Хочеш стати ${sportSecondAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiCancel}  ${sportFootball}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiCancel}  ${sportFootball}`)
        }
    } else if(userSport === sportThird) {
        sportBox = `Круто! Хочеш стати ${sportThirdAthlete}`
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiCancel}  ${sportBox}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiCancel}  ${sportBox}`)
        }
    } else {
        userSportCancel = 'Шкода, що Ви не захотіли ввести свій(ю) спорт'
        if (userAge) {
            ageOfUserStri = nowYear - userAge
            alert(`Тобі ${ageOfUserStri} років ${userCitiCancel}  ${userSportCancel}`)
        } else {
            userAgeCancel = 'Шкода, що Ви не захотіли ввести свій(ю) вік'
            alert(`${userAgeCancel}  ${userCitiCancel}  ${userSportCancel}`)
        }
    }
} else {
    console.log('Что-то не так')
}
