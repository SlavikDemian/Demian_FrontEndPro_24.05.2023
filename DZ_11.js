
const array = [1, 2, 3, 4, 5, 6, 7]
function removeElement(array, value) {

    return array.filter(function(ele){
        return ele != value;
    });

};

const newArray = removeElement(array , 5);

console.log(array)
console.log(newArray)