let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

const taskinput=document.getElementById("theTask");
const addbtn=document.getElementById("addBtn");
const tasklist=document.getElementById("taskList");





















//////////////////////////////
function makeli(task){
const li=document.createElement("li");
li.textContent =task.text;
tasklist.appendChild(li);


const did=document.createElement("button");
did.textContent= "✔";
const didnt=document.createElement("button");
didnt.textContent= "✖";



li.appendChild(did);
li.appendChild(didnt);




did.classList.add("did");
didnt.classList.add("didnt");



if (task.completed) {
        li.classList.add("comp");
}

savetasks();
did.addEventListener("click",function(){
   task.completed=!task.completed;
   if(task.completed)
    li.classList.add("comp");
else
    li.classList.remove("comp")
savetasks();
})
;
didnt.addEventListener("click",function(){
li.remove();
tasks=tasks.filter(t=>t.text!==task.text);
savetasks()
});


}









function savetasks(){
    localStorage.setItem("tasks"
        , JSON.stringify(tasks)
    )
}






tasks.forEach(task=> {
    makeli(task);
});














addbtn.addEventListener("click",function(){
   const taskText = taskinput.value.trim();
   taskinput.value="";
   if(taskText==="") return;
   const task={
    text: taskText,
    completed :false
   };
   tasks.push(task);
savetasks();
   makeli(task);

});




