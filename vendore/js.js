let task = document.querySelector(".inputTask")

let add = document.querySelector(".add")
let field = document.querySelector(".field")
let numberOFTasks = document.getElementById("numberOFTasks")
let remove = document.querySelector(".remove")//in js
let deleteAll = document.getElementById("deleteAll")

let sure
function deleteAllF() {

    field.textContent = ""

}
function getTaksNumber() {
    numberOFTasks.textContent = field.children.length
}
//add
function addTask() {
    //colors

    let n1 = Math.trunc(Math.random() * 255) + 1
    let n2 = Math.trunc(Math.random() * 255) + 1
    let n3 = Math.trunc(Math.random() * 255) + 1

    if (!task.value == "") {

        field.innerHTML +=
            `
        <div  style="background:rgb(${n1},${n2},${n3})" class="task alert alert-info  ">${task.value} 
        <i class="fa-solid fa-xmark  remove"></i> </div> 
    `
        task.value = ""

        getTaksNumber()
    }






}
add.addEventListener("click", addTask)


add.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        addTask(e)
    }
})
document.addEventListener("click", function (e) {


    if (e.target.classList.contains("remove")) {
        sure = confirm("Delete the Task ?")
        if (sure) {
            e.target.parentElement.remove();
            getTaksNumber()
        }
    }
})
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("task")) {
        e.target.classList.toggle("checked")
    }
})

//delete all

deleteAll.addEventListener("click", function () {
    sure = confirm("Delete All ?")
    if (sure) {
        deleteAllF()

    }

})

