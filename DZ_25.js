/*
const buttonFirst = document.getElementById('buttonID1')
const linkButtFirst = document.getElementById('linkButtID1')
let valuePromForButtFirst = prompt('Введите сайт для Button 1')

const buttonSecond = document.getElementById('buttonID2')
const linkButtSecond = document.getElementById('linkButtID2')
let valuePromForButtSecond = prompt('Введите сайт для Button 2')

function checkHttp (link){
    if(link === ''|| link === null){
        alert('Нет ссылки')
    } else if (!link.startsWith('http') && !link.startsWith('https')){
       return `https://${link}`;
    } else {
        return link
    }
}

linkButtFirst.setAttribute('href', checkHttp(valuePromForButtFirst))
linkButtSecond.setAttribute('href', checkHttp(valuePromForButtSecond))


buttonFirst.addEventListener('click', function (){
    if(valuePromForButtFirst){
        return linkButtFirst
    } else {
        alert('Введите ссылку для перехода')
    }
});

buttonSecond.addEventListener('click', function (){
    if(valuePromForButtSecond){
        return linkButtSecond
    } else {
        alert('Введите ссылку для перехода')
    }
});

*/
