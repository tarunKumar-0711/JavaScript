const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-btn");

addButton.addEventListener('click', ()=>{
    addTodo();
})

function addTodo(){
    if(input.value==''){
        alert("Kuch Likh toh Bhai");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
        input.value='';
    }
    saveData();
}
listContainer.addEventListener('click', function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();