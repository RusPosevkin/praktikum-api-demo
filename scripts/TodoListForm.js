class TodoListForm {

  static _template = document.querySelector('#todolist-form-template').content;

  constructor(addItem) {
    this._addItem = addItem;
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const text = this._view.querySelector('.todolist-form_input').value;
    this._addItem(text);
  }

  render = (container) => {
    this._view = TodoListForm._template.cloneNode(true).children[0];
    this._view.addEventListener('submit', this._submitHandler);
    container.append(this._view);
  }

}
