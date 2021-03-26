// TASK MANAGER

let TMRunning = true;
let MenuItem;
let newTask;
let showTasks = "";
let num;
let removed;
const TaskList = [
    `Charge MacBook`,
    `Master JavaScript`
]

const TitleBar = `JAVASCRIPT TASK MANAGER\n
What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager\n`;

while (TMRunning) {

    MenuItem = (prompt(TitleBar).toUpperCase());

    if (MenuItem === `CLOSE`) {
        alert(`Thank you for using Task Manager!`);
        TMRunning = false;
        break;
    }

    else if (MenuItem === `TASKS`) {
        alert(`${TaskList.join("\n")}`);

    } else if (MenuItem === `NEW`) {
        newTask = (prompt(`Please enter the new task:`));
        while (newTask.length === 0) {
            alert(`Please enter a task name`);
            newTask = (prompt(`Please enter the new task:`));
        }
        TaskList.push(newTask);
        alert(`"${newTask}" has been added!`);

    } else if (MenuItem === `REMOVE`) {
        while (true) {
            for (i = 0; i < TaskList.length; i++) {
                // Using \n to create a new line. Also, adding 1 to i (AKA The index) so the numbers will start displaying at 1.

                showTasks += `${i + 1}: ${TaskList[i]}\n`;
            }
            // Prompts the user to enter a number and stores their response. Also, using \n to create a new line. Finally, subtracting 1 from the user's entry so it matches the index in the tasks array.   
            num = parseInt(prompt(`Please enter a number to remove:\n${showTasks}`)) - 1;
            // num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
            alert(num);
            if (num >= 0 && num < TaskList.length) {
                // Removes the selected task/item and sets that task/value to the removed variable
                removed = TaskList.splice(num, 1);
                alert(`"${removed[0]}" has been removed...`);
                showTasks = "";
                break;
            }
            else {
                alert(`Please enter a valid number`);
                showTasks = "";
                // num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
            }
        }
    }
}