let todoList = [
    {item: "complete js", dueDate: "10/10/2023"},

    {item: "complete react.js", dueDate: "12/11/2023"},

    {item: "complete python", dueDate: "20/07/2023"}
];
displayItem();


// add new item 

function addTodo() {
    let inputEl = document.querySelector("#todoText");
    let dateEl = document.querySelector("#todoDate")

    let todoItem = inputEl.value;
    let todoDates = dateEl.value; 
    todoList.push({item: todoItem, dueDate: todoDates});4
    inputEl.value = "";    
    displayItem();
}

// function to display/delete item to pagex`

function displayItem() {
    let containerEl = document.querySelector(".todoContainer");
   
    let newHtml = "";

    for (let i = 0; i<todoList.length; i++) {
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        // above 2 line code is in one line

        let {item, dueDate} = todoList[i];

        newHtml += `
                    <span>${item}</span>
                    <span>${dueDate}</span>
                    <button class = "delButton" onclick = "todoList.splice(${i}, 1); displayItem()">Delete</button>
                    `;
    }
    containerEl.innerHTML = newHtml;
}