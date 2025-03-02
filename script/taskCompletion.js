const dateAndTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"});

const taskCompleteBtns = document.querySelectorAll('.task-complete-btn');


for (const btn of taskCompleteBtns) {
    // console.log(taskCompleteBtns[i])
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        const assignedTaskNumber = getInnerTextById('assigned-tasks');
        const totalCompleteTaskNumber = getInnerTextById('completed-tasks');
        const historyContainer = document.getElementById('history-container');
        if (assignedTaskNumber > 1) {
            // alert("You have complete the task")
            const remainingTask = assignedTaskNumber - 1;
            const totalCompleteTask = totalCompleteTaskNumber + 1;
            setInnerTextById('assigned-tasks', remainingTask)
            setInnerTextById('completed-tasks', totalCompleteTask)

            const div = document.createElement('div')
            
            div.classList.add('bg-slate-100,p-3,m-2,rounded-l')
            console.log(div)
            div.innerHTML=`
            <p class="">you have complete the task at ${dateAndTime} </p>
            `
            historyContainer.appendChild(div)


            btn.setAttribute('disabled', true)

            
        }
        else {
            if (assignedTaskNumber === 0) {
                alert('no more task')
                return;
            }
            alert("You Successfully completed all assigned task")
            const remainingTask = assignedTaskNumber - 1;
            const totalCompleteTask = totalCompleteTaskNumber + 1;
            setInnerTextById('assigned-tasks', remainingTask)
            setInnerTextById('completed-tasks', totalCompleteTask)
            btn.setAttribute('disabled', true)
        }
    })


}
document.getElementById('datetime').innerHTML = dateAndTime;
