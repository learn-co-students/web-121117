const TodoApi = (function() {
  return class TodoApi {
    static fetchTodos() {
      return fetch("http://localhost:3000/todos").then(res => res.json());
    }

    static createTodo(todoText){
      return fetch("http://localhost:3000/todos",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: todoText
        })
      })
      .then(res => res.json())
    }
  };
})();
