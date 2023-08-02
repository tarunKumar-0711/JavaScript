a();//hoisted properly
b(); //throws error not hoisted as expected

//Fn Statement or Fn Declaration
function a(){
    console.log("a called");
}
a();

//Fn Expression
var b = function (){
    console.log("b called");
}
b();

//Anonymouse Fn
// function (){
//This wrong syntax
// }
//they are used when fn are used as values.

//Named Fn Expression
//Ability of Fn to be used as values,passed as parameter and returned from functions.
var c = function (param1){
    return function(){

    }
    console.log("c called");
}
function xyz(){

}
console.log(c(xyz));

//Arrow Functions

const t = () =>{

}