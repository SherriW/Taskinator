// target the items to verify you have correct element
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  // prevent default browser reload
  event.preventDefault();

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
formEl.addEventListener("submit", createTaskHandler);