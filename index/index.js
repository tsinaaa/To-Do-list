let list = []
let input = document.getElementById("input")
const addBtn = document.getElementById("add-btn")
const toDoList = document.getElementById("todo-list")
const clearBtn = document.getElementById("clear-btn")
console.log(clearBtn)
addBtn.addEventListener("click", function() {
    input = document.getElementById("input")
    render()
})

function render() {
    let toDo = ""
    list[list.length] = input.value
    console.log(input.value)
    for(let i = 0; i < list.length; i++) {
         toDo += `
            <div>
                <button class="check-box"></button><p class="list">${list[i]}</p>
            </div>
    `
    }
    toDo += `<button class="check-box"></button><input type="text" id="input">`
    toDoList.innerHTML = toDo
}