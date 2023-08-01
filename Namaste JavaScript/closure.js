function x(){
    var a=7;
    return function y(){
        console.log(a);
    }
}

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}




var z = x();
//console.log(z);
z();

// function p(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// p();

function r(){
    for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            },i*1000);
        }
        close(i);
    }
}
r()

// function q(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// q();