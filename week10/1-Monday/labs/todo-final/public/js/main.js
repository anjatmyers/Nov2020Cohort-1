
var addButton = document.getElementById('addButton');  //addbutton
var addInput = document.getElementById('itemInput');
var todoList = document.getElementById('todoList'); //ul tag
var clearButton = document.getElementById('clearButton');

//ul
    //li
var listArray = [];

//


(()=>{
    //fetch to api to get all todos

    fetch('/api')
    .then(results => results.json())
    .then(data =>{
        console.log(data);

        //display these todos on our page
        //[{id, description}, {}, {}]

        data.forEach(todo =>{
            todoList.innerHTML += createItemDom(todo.description, todo.id)

        })

    })

})()




//function to change the dom of the list of todo list
var createItemDom =  (description, id) => {

    let listItem = `<li>
   
        <div class="row">
            <div class="col-10">
                <input type="text" style="border:none;width:100%" id="a${id.toString()}" value="${description}">
            </div>

            <div class="col-1">
                <button id="${id.toString()}" class="btn btn-success">Update</button>
            </div>

            <div class="col-1">
                <button id="${id.toString()}" class="btn btn-danger">Delete</button>
            </div>

        </div>
    </li>`

    return listItem;
}

addButton.addEventListener('click', e=>{

    e.preventDefault();

    fetch('/api', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            description: addInput.value
        })
    })
    .then(response => response.json())
    .then(data =>{
        //[{}, {}, {}]
        console.log(data);

        //display all records
        todoList.innerHTML= "";
        addInput.value = "";
        data.forEach(todo =>{
            todoList.innerHTML += createItemDom(todo.description, todo.id)
        })
    })
})

todoList.addEventListener('click', e=>{
    e.preventDefault();

    if(e.target.innerText === 'Delete'){
        console.log(e.target.id);

        ///api/:34
        //id = 34
        fetch(`/api/${e.target.id}` , {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: e.target.id
            })
        })
        .then(response => response.json())
        .then(data =>{
            //[{}, {}]

            todoList.innerHTML = "";
            data.forEach(todo =>{
                todoList.innerHTML += createItemDom(todo.description, todo.id);
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }//delete

    if(e.target.innerText === 'Update'){
        let = selector = `input#a${e.target.id}`  //input#a73
        //document.querySelector(selector)

        fetch(`/api/description/${e.target.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: e.target.id,
                description: document.querySelector(selector).value
            })
        })
        .then(response => response.json())
        .then(data =>{
            //[{}, {}, {}]

            todoList.innerHTML ="";

            data.forEach(todo => {
                todoList.innerHTML += createItemDom(todo.description, todo.id);
            })
        })
    }
})

clearButton.addEventListener('click', e =>{
    e.preventDefault();

    fetch('/api/delete/all', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data =>{
        //[{}, {}, {}]
        todoList.innerHTML = "";

        data.forEach(todo =>{
            todoList.innerHTML += createItemDom(todo.description, todo.id);
        })
    })
    .catch(error =>{
        console.log(error);
    })
})
