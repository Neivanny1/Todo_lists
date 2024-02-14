window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.getElementById('new-task')
    const list_el = document.getElementById('tasks');
    //console.log(form)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //console.log('ADDED')
        const task = input.value;
        if (!task) {
            alert("Can't Add Empty task");
            return; 
        } 
        // creating a div to embed in html
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);
        list_el.appendChild(task_el);
        
        task_el.appendChild(task_content_el);
        list_el.appendChild(task_el);
    })
})