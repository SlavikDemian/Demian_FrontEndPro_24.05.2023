let size = prompt('Введи колличество массивов');
let inputArray = [];
size = Number(size);
for (let i = 0; i < size; i++) {
    inputArray[i] = prompt('Введи данные для массива номер ' + (i + 1));
};
document.getElementById("arrPrint1").innerHTML = inputArray;

const inputArrayNumber = inputArray.map(i=>Number(i)); // Переводит строки в цифры

const sortInputArrayNumber = inputArrayNumber.sort((a, b) => a - b); //Сортирует массив по возрастанию
document.getElementById("arrPrint2").innerHTML = sortInputArrayNumber;

let arrayWithElements = sortInputArrayNumber.slice(); // Создает копию массива что бы потом произвести мутацию

arrayWithElements.splice(1, 3); // Удаляет элементы массива с 2 по 4 включительно
document.getElementById("arrPrint3").innerHTML = arrayWithElements;
