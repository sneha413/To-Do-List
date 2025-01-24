const input = document.getElementById("inputBox");
const list = document.getElementById("listcontainer");

function addtask(){
if(input.value === ''){
    alert("Enter something");
}
else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7" ;
    li.appendChild(span);
}
input.value = " ";
}

list.addEventListener("click", function(a){
    if(a.target.tagName === "LI"){
       if(a.target.style.textDecoration === "line-through"){
        a.target.style.textDecoration = "none";
       }
       else{
        a.target.style.textDecoration = "line-through";
       }
    }
    else if(a.target.tagName === "SPAN"){
        a.target.parentElement.remove();
    }

},false);
