
//  Step 1: Define Essential HTML Elements in JavaScript 


let userTaskInput=document.getElementById("taskInput");
let useraddTaskButton=document.getElementById("addTaskButton");
let usershowTaskButton = document.getElementById("showTaskButton");
let userTaskList=document.getElementById("TaskList");
let userTaskArray=document.getElementById("TaskArray");

//    Step 2: Load Tasks from Local Storage  

let taskArray = getTasksFromLocalStorage();

// Step 3: Create Functions for Task Operations 

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks ")) || [];

}

  console.log(taskArray);
  


//  updateTasksInLocalStorage

function updateTasksInLocalStorage() {
localStorage.setItem("tasks", JSON.stringify(taskArray));
}

//   createTask(taskText) Function

function createTask(taskText){
    return{ text: taskText, completed: false};
}

//  deleteTask(index) Function

function deleteTask(index) {
     taskArray.splice(index, 1);
    updateTasksInLocalStorage();

}

//     createTaskElement(taskObj) Function

function createTaskElement(taskObj) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = taskObj.completed;
    checkbox.addEventListener("change", function () {
        taskObj.completed = checkbox.checked;
        taskTextElement.classList.toggle("completed", taskObj.completed);
        updateTasksInLocalStorage();
    });
  
    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("taskText");
    taskTextElement.textContent = taskObj.text;
    taskTextElement.classList.toggle("completed", taskObj.completed);
    


  
userTaskList.innerHTML = " "
 for (let i = 0; i < taskArray.length; i++) {
        let taskElement = createTaskElement(taskArray[i]);
        userTaskList.appendChild(taskElement);
        
        
        
    }
}

    // Attach an Event Listener to Add Task Button

 useraddTaskButton.addEventListener("click", function() {
    const taskText = userTaskInput.value.trim();



    if (taskText == "") {
        return;
    }

    const newTask = createTask(taskText);

   
    console.log(typeof taskArray)
     taskArray.push(newTask);

    updateTasksInLocalStorage()

    userTaskInput.value = ""

    // renderTasks()
});


// Render Tasks on Page Load

function renderTask() {
usershowTaskButton.addEventListener("click", function(){
if (taskArray !== 0) console.log(taskArray)
//render tasks();
});

}


