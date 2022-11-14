const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");

interface Task {
  name: string;
  done: boolean;
  category?: "general" | "gym" | "hobbie" | "work";
}

const categories: string[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  {
    name: "Wyrzucić śmieci",
    done: false,
    category: "hobby",
  },
  {
    name: "Pójść na siłkę",
    done: true,
    category: "gym",
  },
  {
    name: "Nakramić koty",
    done: false,
    category: "work",
  },
];

const render = () => {
  taskContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");

    if (task.category) {
      taskElement.classList.add(task.category);
    }

    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    taskContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (e: Event) => {
  e.preventDefault();
  addTask({ name: taskNameInputElement.value, done: false });
  render();
});

addTask({ name: "zrobić", category: "gym", done: false });
render();
