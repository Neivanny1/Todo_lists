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
        // create div with class content
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        // append div inside taskel with main div
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML ='Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);
        input.value = '';
        // editing and saving 
        task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
        // deeting
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});