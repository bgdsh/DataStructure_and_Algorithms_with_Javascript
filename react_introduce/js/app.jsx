var model=new app.TodoModel("react-todos");
function render() {
  React.render(
    <TodoApp model={model} />,
    document.getElementById("todoapp");
  );
}
model.subscribe(render);
render();
