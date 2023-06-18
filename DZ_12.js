/*
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {

    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // Выдает рандомный номер индекса заданной строки, заданное колличество раз
        randomString += characters.substring(randomIndex, randomIndex + 1); // Записывает в строку символы соответсвтвующие рандомному индексу
    }
    return randomString;
};
const key = generateKey(16, characters);
const key2 = generateKey(5, characters);
const key3 = generateKey(22, characters);
console.log(key);
console.log(key2);
console.log(key3);

 */