let input =document.getElementById('display');
let buttons = document.querySelectorAll("button");
//console.log(buttons);
//console.log(typeof(buttons));
var result="";
//let arr = Array.from(buttons);
  buttons.forEach( (button) => {
    button.addEventListener('click', (e) =>{
        e.preventDefault()
        if(e.target.innerHTML == '='){
            result=eval(result);
            input.value=result;
            //console.log("=====",result);
        }
        else if(e.target.innerHTML == 'AC'){
            result="";
            input.value=result;
        }
        else if(e.target.innerHTML == 'DEL'){
           // console.log("Hii DEL");
            result= result.slice(0, result.length-1);
            input.value = result;
           // console.log(result, "Hii DEL");
        }
        else{
           // console.log(result);
            result += e.target.innerHTML;
            input.value = result;
        } 
    })
});

let currentTheme = 'blue-theme'; // Default theme

function toggleTheme() {
  const calculator = document.querySelector('.calculator');
  if (currentTheme === 'blue-theme') {
    calculator.classList.remove('blue-theme');
    calculator.classList.add('brown-theme');
    currentTheme = 'brown-theme';
  } else {
    calculator.classList.remove('brown-theme');
    calculator.classList.add('blue-theme');
    currentTheme = 'blue-theme';
  }
}
