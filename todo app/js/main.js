let tv = {
    brand:"LG",
    size: 22,
    color: "black",
    year: 2022,
};

let myJSON = JSON.stringify(tv);
document.getElementById('tv').innerHTML = myJSON;



let dog = JSON.parse('{"breed":"dolmain","color":"black & white","sound":"bark"}');
document.getElementById('myDog').innerHTML =dog.breed + ' color is ' + dog.color+ "!" ;


localStorage.setItem("Name", "Todo App");
document.getElementById('name').innerHTML = localStorage.getItem("Name");


function get_todos() {
    // this creats an array of tasks that are inputed
    let todos = new Array;
    //this pulls the task that was saved in the web browser memory
    let todos_str = localStorage.getItem('todo');
    // if the input is not null then JSON.parse will communicate with the browser to make the task a JavaScript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;  
}
 // this takes the inputed task to the get_todos function array
function add() {
    //this takes the inputed task and creates a variable of it
    let task = document.getElementById('task').value;


    let todos = get_todos();
    //this adds a new task the end of the array 
    todos.push(task);
    // this converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();

    return false;
}

function show() {
    //this sets the task that was retrieved as a variable
    let todos = get_todos();

    //this sets up each task as an unordered list
    let html = '<ul>';
    //this display a task to the list in the order that it is inputed 
    for (let i = 0; i < todos.length; i++) {
        // this also displays the task as a list and creates the button with the 'x'
        html += '<li>' + todos[i] + '</li>';
    };
    let node = document.getElementsByTagName('li');
    let i;
    for (i = 0, i < node.length; i++;){
        var span = document.CreateElement('SPAN');
        var txt  = document.createTextNode("\u00D7");
        span.className = 'close';
        span.appendChild(txt);
        node[i].appendChild(span);
    }
}
    html += '</ul>';
    // this display the task as a list 
    document.getElementById('todos').innerHTML = html;


// this displays the inputed task when the 'Add Item' buttom is clicked 
document.getElementById('add').addEventListener('click', add);
//this will keep inputs display permanently on the screen 
show();

var close = document.querySelector("\u00D7");
for(i = 0; i < close.length; i++){
    close[i].onClick = function() {
        var div = this.parentElement;
        div.pop(todo)
    }
}
function remove() {
    let id = this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.getItem('todo'.JSON.stringify(todos));
    show();

    return false;
}

