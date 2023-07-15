

let button1 = document.createElement('button');
document.body.appendChild(button1);
let linkBut1 = document.createElement('a')
button1.appendChild(linkBut1)
const textBut1 = document.createTextNode('Button1')
linkBut1.appendChild(textBut1)

linkBut1.setAttribute('style', 'text-decoration: none; color: black')
linkBut1.setAttribute('target', '_blank')
let valuePrompt1


button1.addEventListener('click', function (){
    valuePrompt1  = prompt('Введите сайт для кнопки номер 1')

    if(valuePrompt1.startsWith('http') === false && valuePrompt1.startsWith('https') === false){
        valuePrompt1 = `https://${valuePrompt1}`;
        linkBut1.setAttribute('href', valuePrompt1)

    } else {
        linkBut1.setAttribute('href', valuePrompt1)
    }
})









const button2 = document.createElement('button');
document.body.appendChild(button2);
const textBut2 = document.createTextNode('Button2')
button2.appendChild(textBut2)




