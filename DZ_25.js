
let buttonFirst = document.createElement('button');
document.body.appendChild(buttonFirst);
let linkButtFirst = document.createElement('a')
buttonFirst.appendChild(linkButtFirst)
const textButt1 = document.createTextNode('Button1')
linkButtFirst.appendChild(textButt1)

linkButtFirst.setAttribute('style', 'text-decoration: none; color: black')
linkButtFirst.setAttribute('target', '_blank')
let valuePromForButtFirst


let buttonSecond = document.createElement('button');
document.body.appendChild(buttonSecond);
let linkButtSecond = document.createElement('a')
buttonSecond.appendChild(linkButtSecond)
const textButt2 = document.createTextNode('Button2')
linkButtSecond.appendChild(textButt2)

linkButtSecond.setAttribute('style', 'text-decoration: none; color: black')
linkButtSecond.setAttribute('target', '_blank')
let valuePromForButtSecond



buttonFirst.addEventListener('click', function (){

    valuePromForButtFirst  = prompt('Введите сайт для кнопки номер 1')

    if(valuePromForButtFirst === ''|| valuePromForButtFirst === null){
        alert('Нет ссылки')
    } else if (!valuePromForButtFirst.startsWith('http') && !valuePromForButtFirst.startsWith('https')){
        valuePromForButtFirst = `https://${valuePromForButtFirst}`;
        linkButtFirst.setAttribute('href', valuePromForButtFirst)
    } else {
        linkButtFirst.setAttribute('href', valuePromForButtFirst)
    }
})

buttonSecond.addEventListener('click', function (){

    valuePromForButtSecond  = prompt('Введите сайт для кнопки номер 2')

    if(valuePromForButtSecond === ''|| valuePromForButtSecond === null){
        alert('Нет ссылки')
    } else if (!valuePromForButtSecond.startsWith('http') && !valuePromForButtSecond.startsWith('https')){
        valuePromForButtSecond = `https://${valuePromForButtSecond}`;
        linkButtSecond.setAttribute('href', valuePromForButtSecond)
    } else {
        linkButtSecond.setAttribute('href', valuePromForButtSecond)
    }
})




