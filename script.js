const inputArea=document.getElementById("inputArea");
const listContainer=document.getElementById("listContainer");

function addTask(){
    if(inputArea.value === ''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputArea.value;
        listContainer.appendChild(li);
        //cross icon
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        listContainer.scrollTo({top:listContainer.scrollHeight,behavior:"smooth"})
    }
    inputArea.value='';
    saveData();
}

//enter button click 
inputArea.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        addTask();
    }
});

//li list in click then line-through means task was done and you remove(first checked and second time remove)
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

//store a task
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();