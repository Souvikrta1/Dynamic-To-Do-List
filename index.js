const toDoItems = document.getElementById('to-do-list');
const input = document.getElementById('input');
const binIcon = document.getElementById('bin');
const btn = document.getElementById('btn');

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

    binIcon.className = 'fa-solid fa-trash';
    binIcon.style.color = 'darkgray';
    binIcon.addEventListener('click',()=>{
        divParent.remove();
    })

    divChild2.appendChild(binIcon);

    divParent.appendChild(divChild1);
    divParent.appendChild(divChild2);

    toDoItems.appendChild(divParent);
    
    divChild1.addEventListener('click',()=>{
        divChild1.style.textDecoration = 'line-through';
        divParent.style.background = 'lightgray'
    })
}

