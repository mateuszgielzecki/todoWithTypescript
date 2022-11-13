// <li>
//       <label for="task-1">Wyrzucić śmieci</label>
//       <input type="checkbox" id="task-1" name="Wyrzucić śmieci">
//     </li>
const taskContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasks = ["Wyrzucić śmieci", "Pójść na siłkę", "Nakramić koty"];
const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        taskContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
render();
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
