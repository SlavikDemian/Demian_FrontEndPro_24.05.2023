

function funAdditions () {
    let val = 0;
    return function (x) {
        val += x;
        return val;
    }
}
let sum = funAdditions();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));


let sumSecond = funAdditions();
console.log(sumSecond(20));
console.log(sumSecond(5));
console.log(sumSecond(3));