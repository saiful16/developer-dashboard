// get date and time
const dateAndTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"});

// get btn list
const taskCompleteBtns = document.querySelectorAll('.task-complete-btn');
// get task-title list
const tasks = document.getElementsByClassName('task-title')

// console.log(taskCompleteBtns)

for (let btn = 0; btn <taskCompleteBtns.length; btn++) {
    console.log()
    taskCompleteBtns[btn].addEventListener('click', function (event) {
        event.preventDefault();
        const assignedTaskNumber = getInnerTextById('assigned-tasks');
        const totalCompleteTaskNumber = getInnerTextById('completed-tasks');
        const historyContainer = document.getElementById('history-container');
        if (assignedTaskNumber > 1) {
            alert("Board Updated Successfully")
            const remainingTask = assignedTaskNumber - 1;
            const totalCompleteTask = totalCompleteTaskNumber + 1;
            setInnerTextById('assigned-tasks', remainingTask)
            setInnerTextById('completed-tasks', totalCompleteTask)

            const div = document.createElement('div')
            div.classList.add('bg-slate-100','m-3','rounded-lg','p-3')
            div.innerHTML=`
            <p>you have complete the ${tasks[btn].innerText}  at ${dateAndTime} </p>
            `
            historyContainer.appendChild(div)
            taskCompleteBtns[btn].setAttribute('disabled', true)

            
        }
        else {
            alert("Board Updated Successfully");
            alert("Congratulations!!! You have completed all the current task")
            const remainingTask = assignedTaskNumber - 1;
            const totalCompleteTask = totalCompleteTaskNumber + 1;
            setInnerTextById('assigned-tasks', remainingTask)
            setInnerTextById('completed-tasks', totalCompleteTask)
            const div = document.createElement('div')
            div.classList.add('bg-slate-100','m-3','rounded-lg','p-3')
            div.innerHTML=`
            <p>you have complete the ${tasks[btn].innerText}  at ${dateAndTime} </p>
            `
            historyContainer.appendChild(div)
            taskCompleteBtns[btn].setAttribute('disabled', true)
        }
    })


}
document.getElementById('datetime').innerHTML = dateAndTime;
