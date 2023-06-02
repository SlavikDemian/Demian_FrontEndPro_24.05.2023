//
// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// if(numOrStr === null) {
//     console.log('ви відмінили')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }
// console.log(isNaN(+numOrStr))


let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case numOrStr === null:
        alert('ви відмінили');
        break;
    case numOrStr.trim() === '':
        alert('Empty String')
        break;
    case isNaN(+numOrStr):
        alert('number is Ba_NaN');
        break;
    default:
        alert('OK!');
}

