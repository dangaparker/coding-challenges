var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for( number in object1){
    string1 = string1 + object1[number]
}
console.log(string1);

var arr = [1, 2, 3]

function empty(arr){
    arr.length = 0;
    return arr;
}


console.log(empty(arr));