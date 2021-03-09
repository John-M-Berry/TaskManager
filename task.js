// TASK MANAGER

let TMRunning=true;
let MenuItem;
let TaskList=[
    `Charge MacBook`,
    `Master JavaScript`
]



const TitleBar=`Javascript Task Manager

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager\n`;

while (TMRunning){

    MenuItem=(prompt(TitleBar).toUpperCase());

    if (MenuItem===`TASKS`){
        alert(`The choice is: ${MenuItem}`);
        alert(`${TaskList.join("\n")}`);
    } else if (MenuItem ===`NEW`){
        alert(`The choice is: ${MenuItem}`);
        NewItem=(prompt(`Please enter the new task:`));
        TaskList.push(NewItem);
        alert(`"${NewItem}" has been added!`);
        
        } else if (MenuItem ===`REMOVE`){
            alert(`The choice is: ${MenuItem}`);
            RemItem=(prompt(`Please enter a number to remove:\n${TaskList.join("\n")}`));
        
            } else if (MenuItem ===`CLOSE`){
                alert(`The choice is: ${MenuItem}`);
                alert(`Thank you for using Task Manager!`);
                TMRunning=false;
                break;
                }

}
