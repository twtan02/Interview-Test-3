document.addEventListener("DOMContentLoaded", function () {
    const taskTitle = document.getElementById("task-title");
    const taskDescription = document.getElementById("task-description");
    const taskPriority = document.getElementById("task-priority");
    const addTaskBtn = document.getElementById("add-task");
    const taskList = document.querySelector(".task-list");

    addTaskBtn.addEventListener("click", addTask);
    
    function addTask() {
        const title = taskTitle.value;
        const description = taskDescription.value;
        const priority = taskPriority.value;

        if (title.trim() === "") {
            alert("Please enter a title for the task.");
            return;
        }

        const task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <span>Priority: ${priority}</span>
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(task);

        taskTitle.value = "";
        taskDescription.value = "";

        const completeBtn = task.querySelector(".complete-btn");
        const editBtn = task.querySelector(".edit-btn");
        const deleteBtn = task.querySelector(".delete-btn");

        completeBtn.addEventListener("click", () => {
            task.classList.toggle("completed");
        });

        editBtn.addEventListener("click", () => {
            const newTitle = prompt("Edit Title:", title);
            const newDescription = prompt("Edit Description:", description);

            if (newTitle !== null) {
                task.querySelector("h3").textContent = newTitle;
                title = newTitle;
            }

            if (newDescription !== null) {
                task.querySelector("p").textContent = newDescription;
                description = newDescription;
            }
        });

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(task);
        });
    }
});
