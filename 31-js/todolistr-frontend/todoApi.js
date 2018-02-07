const TodoApi = (function() {
  return class TodoApi {
    static fetchTodos() {
      return fetch("http://localhost:3000/todos").then(res => res.json());

      // .then(todos => {
      //   return todos;
      // });
    }
  };
})();
