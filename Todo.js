window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input_name = document.querySelector("#new-task-input");
    const input_dis = document.querySelector("#new-task-dis");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input_name.value;
        const task_dis = input_dis.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');
        task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_content_el.innerText = task + ":   " + task_dis;

        task_el.appendChild(task_content_el);  //here

        
        const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_complete_el = document.createElement('button');
		task_complete_el.classList.add('complete');
		task_complete_el.innerText = 'complete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_complete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input_name.value = '';
        input_dis.value = '';

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

		task_complete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});