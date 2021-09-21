// target the items to verify you have correct element
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
  // create a new task item / element
  var listItemEl= document.createElement("li");  
  // style the new task item
  listItemEl.className = "task-item";
  // add the text
  listItemEl.textContent = "This is a new task.";
  // append this element to the task list
  tasksToDoEl.appendChild(listItemEl);    
}

// add event listener
buttonEl.addEventListener("click", createTaskHandler);