const api = new Api({
  url: "https://api.todo-list.ru/tasks/",
  headers: {
		//Authorisation: 'fdsfdfsfdsa',
    "content-type": "application/json",
  },
});


const page = document.querySelector('.page');
const createTodoListForm = (...arg) => new TodoListForm(...arg);
const createTodoListItem = (...arg) => new TodoListItem(...arg);
const tasks = api.getAllTasks();
tasks.then((data) => {
  const todoList = new TodoList(
    data.map((item) => ({ name: item.name, id: item._id })),
    createTodoListForm,
    createTodoListItem,
    api
  );
  todoList.render(page);
}).catch((err) => alert(err));
