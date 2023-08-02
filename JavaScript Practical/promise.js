const ticket = new Promise(function(resolve, reject){
    isBoarded=true;
    if(isBoarded){
        resolve("Not in Flight");
    }
    else{
        reject("Flight Cancelled");
    }
});

ticket.then((data)=>{
    console.log("Promise accepted ", data);
}).catch((data)=>{
    console.log("Promise rejected ", data);
})

function makeCheese(){
    return new Promise((resolve,reject) =>{
       setTimeout( () =>{
        const cheese ="cheese";
        resolve(cheese);
       },5000);
    });
}

function makeDough(cheese){

    return new Promise( (resolve, reject) =>{
        setTimeout( () =>{
            const dough = "dough";
        resolve(dough);
        },5000);
    })
}

function makePizza(dough){
    return new Promise((resolve,reject)=>{
       setTimeout( () =>{
        const pizza ="pizza";
        resolve(pizza);
       })
    },5000);
}


// makeCheese()
//     .then((cheese)=>{
//         console.log("Got Cheese ",cheese);
//         return makeDough(cheese);
//     })
//     .then((dough)=>{
//         console.log("Got Dough",dough);
//         return makePizza(dough);
//     })
//     .then((pizza) =>{
//         console.log("Got Pizza ",pizza);
//     })
//     .catch(()=>{
//         console.log("Error Occured");
//     })

    async function orderPizza(){
        try{const cheese = await makeCheese();
        console.log("Here is the cheese", cheese);

        const dough = await makeDough(cheese);
        console.log("Here is the dough", dough);7

        const pizza = await makePizza(dough);
        console.log(pizza);}
        catch(err){
            console.log("Error Occured",err);
        }
    }

    orderPizza();
