document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const deleteAllButton = document.getElementById("delete-all");
    const ulTodo = document.getElementById("ul-todo");

    let editMode = false;
    let editElement = null;


    const loadAllTodo = () => {
        const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
        allTodos.forEach((task) => createTodo(task));
    };

    //saving to-do 
    const saveAllTodo = () => {
        const allTodos = [...document.querySelectorAll(".text-todo")].map(
            (task) => task.textContent
        );
        localStorage.setItem("allTodos", JSON.stringify(allTodos));
    };

    // Create new todo item
    const createTodo = (task) => {
        if (!task.trim()) return;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-start";
        li.innerHTML = `
            <span class="text-todo">${task}</span>
            <div class="btn-group">
                <button type="button" class="btn btn-danger btn-edit">Edit</button>
                <button type="button" class="btn btn-warning btn-delete">Delete</button>
            </div>
        `;
        ulTodo.appendChild(li);
    };

    // Add or update a task
    buttonTodo.addEventListener("click", () => {
        const text = inputTodo.value;


        if (editMode) {
            editElement.querySelector(".text-todo").textContent = text;
            editMode = false;
            editElement = null;
            buttonTodo.textContent = "Add";
        } else {
            createTodo(text);
        }
        inputTodo.value = "";
        saveAllTodo();
    });


    ulTodo.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-delete")) {
            e.target.closest(".list-group-item").remove();
            saveAllTodo();
        }

        if (e.target.classList.contains("btn-edit")) {
            const li = e.target.closest(".list-group-item");
            const taskText = li.querySelector(".text-todo").textContent;

            inputTodo.value = taskText;
            buttonTodo.textContent = "Update";

            editElement = li;
            editMode = true;
        }
    });


    deleteAllButton.addEventListener("click", () => {
        if (ulTodo.children.length === 0) {
            alert("No items to delete.");
            return;
        }
        const confirmDelete = confirm("Are you sure you want to delete all items?");
        if (confirmDelete) {
            ulTodo.innerHTML = "";
            localStorage.removeItem("allTodos");
        }
    });

    loadAllTodo();
});
