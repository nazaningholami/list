const addbtn = document.getElementById("addbtn");
const input1 = document.getElementById("input").value;
const order = document.getElementById("order").value;
const sevebtn = document.getElementById("addtodo");
 const containerfrom = document.getElementById("container")
const todolist = [];
addbtn.addEventListener("click",()=>{
    if(containerfrom.classList.contains("hidden")){
        containerfrom.classList.remove("hidden");
        containerfrom.classList.add("flex");
    }
    else{
        containerfrom.classList.remove("flex");
        containerfrom.classList.add("hidden");
    }
})
sevebtn.addEventListener("click",(e)=>{
    e.preventDefault();
 savetodo();
})
function savetodo(){
const savetodo = {
    mytodo: input1,
    importance: order
}
todolist.push(savetodo);
}

