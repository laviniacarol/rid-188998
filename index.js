const form = document.getElementById("taskForm");
const list = document.getElementById("todo-list");
const footer = document.getElementById("footerCount");
let doneCount = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  addTask();
});

function addTask() {
  const name = document.getElementById('name').value.trim();
  const label = document.getElementById('etiqueta').value;
  if (!name || !label) return; 

  const li = document.createElement('li');
  li.innerHTML = `
    <div class="task-content">
      <span class="task-name">${name}</span>
      <div class="label-date">
        <span class="task-label">${label}</span>
        <span class="task-date">Criado em ${new Date().toLocaleDateString()}</span>
      </div>
    </div>
    <div class="task-footer">
      <button class="finish-task">Concluir</button>
    </div>
  `;
  list.insertBefore(li, list.firstChild);
  form.reset();

  const btn = li.querySelector('.finish-task');
  btn.addEventListener('click', () => completeTask(li, btn));
}

function completeTask(li, btn) {
  if (!li.classList.contains('done')) {
    li.classList.add('done');

    const img = document.createElement('img');
    img.src = 'check.svg';
    img.alt = 'Concluído';
    img.classList.add("check-icon");
    btn.replaceWith(img);
    doneCount++;
  } 
  
  footer.textContent = `${doneCount} tarefa${doneCount !== 1 ? 's' : ''} concluída${doneCount !== 1 ? 's' : ''}`;
}
