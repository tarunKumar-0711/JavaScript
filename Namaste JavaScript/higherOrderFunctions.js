const radiuses = [2,3,4,5,67,8,1];


const area = function(radius) {
    return Math.PI *radius*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const diameter = function(radius){
    return 2*radius;
}

const calculate = function(radiuses, logic){
    const output =[];
    for(let i=0;i<radiuses.length;i++){
        output.push(logic(radiuses[i]))
    }
    return output;
}

Array.prototype.cal = function(logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(area(this[i]))
    }
    return output;
}

console.log(calculate(radiuses,area));
console.log(calculate(radiuses,circumference));
console.log(calculate(radiuses,diameter));
console.log(radiuses.cal(area));