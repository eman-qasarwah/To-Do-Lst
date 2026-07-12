const taskinput=document.getElementById("theTask");
const addbtn=document.getElementById("addBtn");
const tasklist=document.getElementById("taskList");
addbtn.addEventListener("click",function(){
   const taskText = taskinput.value.trim();
   if(taskText==="") return;
const li=document.createElement("li");
li.textContent =taskText;
tasklist.appendChild(li);
const did=document.createElement("button");
did.textContent= "✔";
const didnt=document.createElement("button");
didnt.textContent= "✖";
li.appendChild(did);
li.appendChild(didnt);
did.classList.add("did");
didnt.classList.add("didnt");
taskinput.value="";
did.addEventListener("click",function(){
    li.classList.add("comp");
})
;
didnt.addEventListener("click",function(){
li.remove();
});




});




