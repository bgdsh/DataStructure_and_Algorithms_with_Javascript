var TodoApp=React.createClass({
  render:function() {
    var footer;
    var main;
    var todos=this.props.model.todos;
    var showTodos=todos.filter(function(){
      switch (this.state.nowShowing) {
        case app.ACTIVE_TODOS:
          return !todo.completed;
          break;
        case app.COMPLETED_TODOS:
          return todo.completed;
          break;
        default:
          return true;
      }
    },this);
  }
});
var todoItems=showTodos.map(function (todo) {
  return (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={this.toggle.bind(this,todo)}
      onDestory={this.destory.bind(this,todo)}
      onEdit={this.edit.bind(this,todo)}
      editing={this.state.editing===todo.id}
      onSave={this.save.bind(this,todo)}
      onCancel={this.cancel}
    />
  );
},this);
var activeTodoCount=todos.reduce(function (accum,todo) {
  return todo.completed?accum:accum+1;
},0)
var completedCount=todos.length-activeTodoCount;
if(activeTodoCount || completedCount){
  footer=<TodoFooter
    count={activeTodoCount},
    completedCount={completedCount}
    nowShowing={this.state.nowShowing}
    onClearCompleted={this.clearCompleted}
  />
}
if(todos.length){
  //声明式写法
  main=(
    <section id="main">
      <input
        id="toggle-all"
        type="checkbox"
        onChange={this.toggleAll}
        checked={activeTodoCount===0}
      />
      <ul id="todo-list">
        {todoItems}
      </ul>
    </section>
  );
}
return (
  <div>
    <header>
      <h1>todos</h1>
      <input
        ref="newField"
        id="new-todo"
        onKeyDown={this.handleNewTodoKeyDown}
        autoFocus={true}
        placeholder="what needs to be done?" />
    </header>
  </div>
);
app.TodoItem=React.createClass({
  render:function () {
    return (
      <li className={React.addons.classSet({
        completed:this.props.todo.completed,
        editing:this.props.todo.editing
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
          />
          <label onDoubleClick="this.handleEdit">
            {this.props.todo.title}
          </label>
          <button className="destory" onClick={this.props.onDestory}></button>
        </div>
        <input
          ref="editField"
          className="edit"
          value={this.state.editText}
          onBlur={this.handleSubmit}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    );
  }
});
