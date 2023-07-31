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