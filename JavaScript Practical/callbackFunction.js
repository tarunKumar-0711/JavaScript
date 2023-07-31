const calculate = (a,b,operation) =>{
    return operation(a,b);
}

const addition = calculate(7,8, function(a,b){
    return a+b;
});

console.log(addition);

const substraction = (a,b) => a-b;

const subResult = calculate(4,2,substraction);

console.log(subResult);

function multiply(a,b){
    return a*b;
}

const mul = calculate(4,5,multiply);
console.log(mul);

const a = [2,3,4,5,-90,6,-87,1,-8,2,3,4,8,9,-2,-4,-3]

const firstNeg = (n) =>{
    return n<0;
}

const square =(n)=>n*n;
// a.forEach((n) => {
//     console.log(square(n));
// });

console.log(a.find(firstNeg));

function getCheese(callback){
    setTimeout( ()=>{
        const c ="Hi";
        console.log("Here is :",c);
        callback(c);
    },2000);
}
getCheese((c)=>{
    console.log("Got:",c);
})