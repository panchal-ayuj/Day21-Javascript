// console.log(5)
// var x = 2;
// let y = 3;
// const z = 4;
// z = 5;
// y = 6;
// console.log(x)
// console.log(y)

function test(){
    // var a;
    console.log(a); // hoisting, a would come out as undefined, only the declaration gets hoisted not the value
    // console.log(b); 
    if(true){
        // a = 4
        var a = 4;
        let b = 6;
        console.log(b); // block level
    }
    console.log(a); // function level
    // console.log(b); 
}
test();

const x = {
    firstname: "Ayuj",
    lastname: "Panchal",
    test: function(){
        console.log("test func")
    }
}
console.log(x.firstname)
console.log(x["lastname"])
x.test()

x.firstname = "def" // not changing object reference, so it works
console.log(x.firstname)

// x = {}; // changing whole object, can't change the address so doesn't work

x.address = "Ahmedabad" // can alter the properties of objects add, delete
console.log(x.address)

function test2(){
    console.log(2);
    return 3;
}
console.log(test2());


console.log(printName("Ayuj", "Panchal")) // func declaration can be accessed before declaration 
function printName(fName, lName){ // function declaration
    // console.log(fName + " " + lName);
    console.log(arguments)
    return fName + " " + lName;
}
// console.log(printName("Ayuj", "Panchal"))


// console.log(f1("Ayuj", "Panchal")) // func exp cant be accessed before declaration
let f1 = function(fName, lName){ // function expression
    // console.log(fName + " " + lName);
    console.log(arguments)
    return fName + " " + lName;
}
console.log(f1);
console.log(f1("Ayuj", "Panchal"))

let arr = [];
arr.push(2);
arr.push('sfw') 
arr.push({a:1,b:2}) // arrays not type safe
arr[3] = "hello"
console.log(arr);
console.log(arr[2]);

for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

arr.forEach(function(value){ // callback function
    console.log(value)
})

let arr2 = [5, 2, 8]
console.log(arr2.sort())

console.log(arr2.filter(function(elm){
    return elm%2==0;
}))

let arr3 = arr2.map(function(elm){
    return elm*2;
})
console.log(arr3)

console.log(typeof(arr3))
console.log(typeof(arr[3]))

console.log('2' == 2)
console.log(2 === 2)

// '' is considered false

console.log(0 && false) // 1st val
console.log(undefined || 0) // last val
console.log('a' || 'b')
console.log('a' && 'b')

document.querySelector('#btn').addEventListener('click', function(){
    console.log('clicked')
})

document.querySelector('#input1').addEventListener('change', function(){
    console.log(document.querySelector('#input1').value)
})

// window.addEventListener('load')