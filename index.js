const toDoItems = document.getElementById('to-do-list');
const input = document.getElementById('input');
const binIcon = document.getElementById('bin');
const btn = document.getElementById('btn');
const type = document.getElementById('value');
const show = document.getElementById('Show');

const todoShow = localStorage.getItem("todoData");


input.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){ 
    addItem();
    }
})

btn.addEventListener('click',()=>{
    addItem();
})

function addItem(){
    var divParent = document.createElement('div');
    var divChild1 = document.createElement('div');
    var divChild2 = document.createElement('div');
    var binIcon = document.createElement('i');

    divParent.className = 'item';
    divChild1.innerText = input.value;
    divChild1.className = 'todo-data'

    binIcon.className = 'fa-solid fa-trash';
    binIcon.style.color = 'black';
    binIcon.addEventListener('click',()=>{
        divParent.remove();
    })

    divChild2.appendChild(binIcon);

    divParent.appendChild(divChild1);
    divParent.appendChild(divChild2);

    toDoItems.appendChild(divParent);

    let select = type;
    if(select.value == 'High'){
        divParent.style.backgroundColor = 'rgb(210, 53, 53)';
    }
    if(select.value == 'Medium'){
        divParent.style.backgroundColor = 'yellow';
    }
    if(select.value == 'Low'){
        divParent.style.backgroundColor = 'greenyellow';
    }
}