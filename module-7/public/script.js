document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('taskList');
    const taskSelect = document.getElementById('taskSelect');

    // Populate the select dropdown with tasks
    taskList.querySelectorAll('li.task').forEach(task => {
        const option = document.createElement('option');
        option.value = task.getAttribute('data-id');
        option.textContent = task.textContent;
        taskSelect.appendChild(option);
    });

    // Event delegation for highlighting tasks
    taskList.addEventListener('click', function(event) {
        if (event.target && event.target.matches('li.task')) {
            event.target.classList.toggle('highlight');
        }
    });

    // Handle form submission
    document.getElementById('taskForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const selectedTaskId = taskSelect.value;
        const selectedTaskText = taskSelect.options[taskSelect.selectedIndex].text;

        if (name && selectedTaskId) {
            // Send data to server
            fetch('/add-task', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, task: selectedTaskText })
            })
            .then(response => response.text())
            .then(message => {
                // Display the message
                alert('Your task has been submitted!');
                const submittedTasksDiv = document.getElementById('submittedTasks');
                submittedTasksDiv.innerHTML += `Task "${selectedTaskText}" submitted by ${name}<br>`;
                
                // Clear the form fields
                document.getElementById('taskForm').reset();
                taskSelect.selectedIndex = 0;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            alert('Please enter your name and select a task');
        }
    });
});
