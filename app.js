
//selector
const todoInput = document.querySelector('.todo-input');
const btnButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');
//Event Listener
btnButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)
filterTodo.addEventListener('click',filterOptions)
//Function
function addTodo(event){
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create Li of Div
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);
    //button complete
    const buttonComplete = document.createElement('button');
    buttonComplete.innerHTML = '<i class="fas fa-check-square"></i>';
    buttonComplete.classList.add('btn-complete');
    todoDiv.appendChild(buttonComplete);
    //button complete
    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    buttonDelete.classList.add('btn-delete');
    todoDiv.appendChild(buttonDelete);
    //clear when enter input 
    todoInput.value='';
    //add child todolist
    todoList.appendChild(todoDiv)
}

//Deletecheck
function deleteCheck(e){
    const item = e.target;
    
    // console.log(e.target)
    // console.log(item.classList);
    if(item.classList[0]==='btn-delete'){
        const todo= item.parentElement;
        //tim dem thang cha chua no 
        todo.classList.add('fall')
        // todo.remove()//xoa todo-item
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
    }
    //check mark
    if(item.classList[0]==='btn-complete'){
        const todo= item.parentElement;
        todo.classList.toggle('completed')
    }
}

    // })// console.log(todos)
    function filterOptions(e) {
        const todos = todoList.childNodes;
        // i finr childrens with selector alll
        todos.forEach((todo) => {
            if (todo.classList !== undefined) {
                switch(e.target.value) {
                    case 'all':
                    todo.style.display = 'flex';
                    break;
                    case 'completed':
                    if(todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                    case 'uncompleted':
                    if(!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                }
            };
            return;
        })
    }



