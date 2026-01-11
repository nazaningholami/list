const addbtn = document.getElementById("addbtn");
const error = document.getElementById("error")

const sevebtn = document.getElementById("addtodo");
 const containerfrom = document.getElementById("container")
const todolist = [];
let message = "";
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
    const h1 = document.createElement("h1");
    e.preventDefault();
 savetodo();
 if(message.length>0){
 
 h1.textContent = message;
 error.appendChild(h1);
}
})
function savetodo(){
    const input1 = document.getElementById("input").value;
const order = document.getElementById("order").value;
if(input1 !== ""){

const savetodo = {
    mytodo: input1,
    importance: order
}
todolist.push(savetodo);

}
else{
    message = "لطفا یک لیستی اضافه نموده و دوباره تلاش نمایید"
}
}




