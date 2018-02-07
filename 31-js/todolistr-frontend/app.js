const App = (function() {
  return class App {
    static init() {
      this.renderTodos();
      console.log("Running app");
      let form = document.getElementById("todo-form");
      form.addEventListener("submit", this.handleSubmit);

      /// presumably the app already has todos
      /// lets show some todos on the page

      /// 1. get the list from html
    }

    static renderTodos() {
      let todoContainer = document.getElementById("todo-list");
      // const todos = [{ title: "Wash Cat" }, { title: "Walk Fish" }];

      /// First send a GET request to http://localhost:3000
      /// response gives us some json
      /// json will be array
      /// iterate through array
      /// create todo objs
      /// append todo objs to screen

      console.log(TodoApi.fetchTodos());
      TodoApi.fetchTodos().then(todos => {
        console.log(todos);
      });
      //
    }

    static handleSubmit(event) {
      event.preventDefault();
      let formInput = document.getElementById("todo-input");
      console.log(formInput.value);

      let todoContainer = document.getElementById("todo-list");
      let todo = new Todo(formInput.value);
      todoContainer.append(todo.render());

      // when we submit our form
      // a new todo should appear
    }
  };
})();
