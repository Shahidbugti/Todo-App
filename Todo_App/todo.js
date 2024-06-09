// Selecting
const todoContainer = document.querySelector('.container');
const todoList = document.querySelector('.todo-list');
const todoIcon = document.querySelector('.icon');

// EventListener
todoIcon.addEventListener('click', addItem);

// Function
function addItem(event) {
    const newItem = prompt("Enter a new item");
    if (newItem) { // Check if the user entered a value
        // Create a new list item
        const li = document.createElement("li");
        li.classList.add('todoItem');

        // Create the span for the todo text
        const span = document.createElement('span');
        span.textContent = newItem; // Set the text content
        li.appendChild(span);

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => li.remove());

        // Create an edit button
        const editButton = document.createElement("button");
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const updatedItem = prompt("Edit the item", newItem);
            if (updatedItem) {
                span.textContent = updatedItem;
            }
        });

        // Append the buttons to the list item
        li.appendChild(editButton);
        li.appendChild(removeButton);

        // Append the new list item to the todo list container
        todoList.appendChild(li);
    }
}
