class TodoListItem {

  static _template = document.querySelector('#todolist-item-template').content;

  constructor(data, addItem, api) {
    this._text = data.name;
    this._id = data.id;;
    this._addItem = addItem;
    this._api = api;
  }

  _delClickHandler = () => {
    this._api.deleteTask(this._id).then(() => {
      this._view.remove();
    }).catch((err) => console.log(err));
  }

  _copyClickHandler = () => {
    this._addItem(this._text);
  }

  render = (container) => {
    this._view = TodoListItem._template.cloneNode(true).children[0];
    this._view.querySelector('.todolist-item__text').textContent = this._text;
    this._view.querySelector('.todolist-item__del').addEventListener('click', this._delClickHandler);
    this._view.querySelector('.todolist-item__copy').addEventListener('click', this._copyClickHandler);
    container.append(this._view);
  }

}
