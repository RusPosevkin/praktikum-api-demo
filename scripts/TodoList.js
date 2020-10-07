class TodoList {

  static _template = document.querySelector('#todolist-template').content;

  constructor(items, createTodoListForm, createTodoListItem, api) {
    this._items = items;
    this._createTodoListForm = createTodoListForm;
    this._createTodoListItem = createTodoListItem;
    this._api = api;
  }

  _addItem = (text) => {
    this._createTodoListItem(text, this._addItem, this._api).render(this._view);
  }

  _saveItem = (text) => {
    this._api
      .addTask({ name: text })
      .then((data) => this._addItem(data.name))
      .catch((err) => console.log(err));
  };

  render = (container) => {
    this._view = TodoList._template.cloneNode(true).children[0];
    this._createTodoListForm(this._saveItem).render(this._view);
    this._items.forEach(item => this._addItem({ name: item.name, id: item.id }));
    container.append(this._view);
  }

}
