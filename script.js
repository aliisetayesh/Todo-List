document.querySelector('#add').onclick = function() {
    if(document.querySelector('#taskslist input').value.length == 0){
        alert("Please Enter your task"); 
    }else{
        document.querySelector('#tasks').innerHTML 
        += `<div class="task">
        <span id="taskname">
        ${document.querySelector("#taskslist input").value}
        </span>
        <button class="remove">Remove</button>
        </div>
        `;

        const current_tasks = document.querySelectorAll('.remove');
        for(let i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function (){
                this.parentNode.remove();
            }
        }

        const taskname = document.querySelectorAll('#taskname');
        for(let i = 0; i < taskname.length; i++){
            taskname[i].onclick = function (){
                this.classList.toggle('completed');
            }
        }

        document.querySelector('#taskslist input').value = "";


        }
    }