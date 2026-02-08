// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.



//script.js
// Section 2: App State Variables
let tasks = [];

const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");


console.log("taskForm", taskForm);
console.log("taskTable:", taskTable);


function handleSubmission(event) {
event.preventDefault();

const taskName = document.getElementById('taskName').value;
const taskDescription = document.getElementById('taskDescription').value;
const taskDeadline = document.getElementById('taskDeadline').value;

if(taskName == "" || taskDeadline == "") {
    alert('Task name and deadline are required!');
}

tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline })


render();

}


function render(){

    taskTable.innerHTML = tasks.map((task) => `
        <tr >
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick= "markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
        `).join('');

}




function init(){
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

taskForm.addEventListener('submit', handleSubmission);
init();