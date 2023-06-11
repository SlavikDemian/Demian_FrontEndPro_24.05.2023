
let arrDz8 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

/*
let newArrSum = 0;
let newArrLength = [];
for(let i = 0; i < arrDz8.length; i++ ){
    if(arrDz8[i] > 0){
        newArrSum += (arrDz8[i]);
        newArrLength.push(arrDz8[i]);
    }
}
alert(`Сумма позитивных элеменов в массиве: ${newArrSum}, колличество позитивных элементов в массиве: ${newArrLength.length}`)
*/



/*
let arrMin = arrDz8[0];
let arrIndex = 0;
for(let i = 0; i < arrDz8.length; i++){
    if(arrDz8[i] <= arrMin){
        arrMin = arrDz8[i];
        arrIndex = i;
    }
}
alert(`Минимальный элемент массива: ${arrMin} и его порядковый номер в массиве: ${arrIndex}`)
*/



/*
let arrMax = arrDz8[0];
let arrIndex = 0;
for(let i = 0; i < arrDz8.length; i++){
    if(arrDz8[i] >= arrMax){
        arrMax = arrDz8[i];
        arrIndex = i;
    }
}
alert(`Максимальный элемент массива: ${arrMax} и его порядковый номер в массиве: ${arrIndex}`)
 */



/*
let newArrLength = [];
for(let i = 0; i < arrDz8.length; i++ ){
    if(arrDz8[i] < 0){
        newArrLength.push(arrDz8[i]);
    }
}
alert(`Колличество негативных элементов в массиве: ${newArrLength.length}`)
*/



/*
let positiveAndOddArr = [];
for(let i = 0; i < arrDz8.length; i++ ){
    if(arrDz8[i] > 0 && arrDz8[i] %2 !== 0){
        positiveAndOddArr.push(arrDz8[i]);
    }
}
alert(`Колличество нечетных и позитивных элементов: ${positiveAndOddArr.length}`)
*/



/*
let positiveAndEvenArr = [];
for(let i = 0; i < arrDz8.length; i++ ){
    if(arrDz8[i] > 0 && arrDz8[i] %2 === 0){
        positiveAndEvenArr.push(arrDz8[i]);
    }
}
alert(`Колличество четных и позитивных элементов: ${positiveAndEvenArr.length}`)
*/



/*
let SumPositiveAndEvenArr = 0;
for(let i = 0; i < arrDz8.length; i++ ){
    if(arrDz8[i] > 0 && arrDz8[i] %2 === 0){
        SumPositiveAndEvenArr += (arrDz8[i]);
    }
}
alert(`Сумма четных и позитивных элементов: ${SumPositiveAndEvenArr}`)
*/



/*
let SumPositiveAndOddArr = 0;
for(let i = 0; i < arrDz8.length; i++ ){
    if(arrDz8[i] > 0 && arrDz8[i] %2 !== 0){
        SumPositiveAndOddArr+= (arrDz8[i]);
    }
}
alert(`Сумма нечетных и позитивных элементов: ${SumPositiveAndOddArr}`)
*/



/*
let multiplicationPositiveArr = 1;
for(let i = 0; i < arrDz8.length; i++ ){
    if(arrDz8[i] > 0){
        multiplicationPositiveArr *=  arrDz8[i];
    }
}
alert(`Произведение позитивных элементов: ${multiplicationPositiveArr}`)
*/



/*
let arrMax = arrDz8[0];
let arrNull = 0;
for(let i = 0; i < arrDz8.length; i++){
    if(arrDz8[i] >= arrMax){
        arrMax = arrDz8[i];
        arrDz8[arrNull] = 0;
        arrNull = i;
    } else {
        arrDz8[i] = 0;
    }
}
alert(`Максимальный элемент массива и остальные обнуленные: ${arrDz8}`)
*/



