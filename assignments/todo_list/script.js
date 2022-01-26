var count = 0;
var input1 = document.querySelector("input[name='todo_input']");
var btnn = document.querySelector('button');
var removeP = document.querySelector('.todos')

function add_todo(){
    var para = document.createElement("p");
    var node = document.createTextNode(input1.value);
    para.appendChild(node);
    var element = document.querySelector(".todos");
    para.setAttribute('key',count);
    element.appendChild(para);    
    count += 1;
}

btnn.addEventListener('click',add_todo);

removeP.addEventListener('click',rem);
function rem(e){
    removeP.removeChild(e.target);
}



