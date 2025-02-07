let list = JSON.parse(localStorage.getItem("tasks"))
let input = document.getElementById("input")
const addBtn = document.getElementById("add-btn")
const toDoList = document.getElementById("todo-list")
const clearBtn = document.getElementById("clear-btn")
const checkBox = document.getElementById("check-box")
const taskAdded = document.getElementById("task-added")
const taskCompleted = document.getElementById("task-completed")
const comStatus = document.getElementById("status")
let taskAddedNum = 0
let taskCompletedNum = 0
let status = ["🎯 Outstanding", "💪 Excellent", "👍 Good", 
    "🙂 Satisfactory", "😕 Needs Improvement", "❌ Poor"]
localStorage.setItem("tasks", JSON.stringify(list))
list = JSON.parse(localStorage.getItem("tasks"))
console.log(list)
display()

function display() {
    list = JSON.parse(localStorage.getItem("tasks"))
    for(let i = 0; i < list.length; i++) {
        toDoList.innerHTML += `
           <li>
               <button class="check-btn check-box"></button>
               <p class="list">${list[i]}</p>
           </li>
   `
   }
   toDoList.innerHTML += `<li>
               <button class="check-btn check-box"></button>
               <input type="text" id="input">
           </li>`
}

addBtn.addEventListener("click", function() {
    taskAddedNum++
    taskAdded.textContent = taskAddedNum
    input = document.getElementById("input")
    render()
    console.log("clicked")
})

function render() {
    let toDo = ""
    list = JSON.parse(localStorage.getItem("tasks"))
    list[list.length] = input.value
    localStorage.setItem("tasks", JSON.stringify(list))
    for(let i = 0; i < list.length; i++) {
         toDo += `
            <li>
                <button class="check-btn check-box"></button>
                <p class="list">${list[i]}</p>
            </li>
    `
    }
    toDo += `<li>
                <button class="check-btn check-box"></button>
                <input type="text" id="input">
            </li>`
    toDoList.innerHTML = toDo
}

clearBtn.addEventListener("click", function() {
    toDoList.innerHTML = `<button class="check-box"></button><input type="text" id="input">`
    localStorage.clear()
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("check-btn")) {
        let taskItem = event.target.parentElement;
        taskItem.remove();
        let taskContent = taskItem.textContent.trim()
        list = list.filter(task => task != taskContent)
        taskCompletedNum++
        taskCompleted.textContent = taskCompletedNum
        const r = taskCompletedNum / taskAddedNum
        if(r === 1) {
            comStatus.textContent = status[0]
        }
        else if(r >= 0.8) {
            comStatus.textContent = status[1]
        }
        else if(r >= 0.6) {
            comStatus.textContent = status[2]
        }
        else if(r >= 0.4) {
            comStatus.textContent = status[3]
        }
        else if(r >= 0.2) {
            comStatus.textContent = status[4]
        }
        else if(r <= 0.2) {
            comStatus.textContent = status[5]
        }
        localStorage.setItem("tasks", JSON.stringify(list))
    }
});
