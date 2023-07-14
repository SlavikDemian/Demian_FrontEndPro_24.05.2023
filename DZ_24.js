

const inputElem = document.getElementsByTagName('input')
inputElem[0].setAttribute('onfocus', 'myFunction1()');
inputElem[0].setAttribute('onblur', 'myFunction2()');
inputElem[0].setAttribute('id', 'inputID');
const inputID = document.getElementById('inputID')


let divID;
function myFunction1(){
    const divTag = document.createElement('div')
    divTag.setAttribute('id', 'divID')
    document.body.appendChild(divTag)
    divID = document.getElementById('divID')


    const text = document.createTextNode('при фокусировки появляется сбоку div')
    divID.appendChild(text)
    divID.setAttribute('style', 'display: inline-block')


    document.body.appendChild(divID)

}
function myFunction2() {
    divID.remove();
}

