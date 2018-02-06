/* App
   ====
   - Handles all of top-level logic for our frontend application
   - Ties together all of the files into one place
*/

const App = (function(){
  return class App {

    // The Magic Function that we will run
    static init() {

      // Adds our jokes from our app onto the view
      App.renderAllJokes()

      // Adding our eventListeners
      let jokeForm = document.getElementById('joke-form')
      jokeForm.addEventListener('submit', App.handleJokeSubmit)
    }

    static renderAllJokes(){
      JokeAdapter.getJokes()
      .then(json => {
        let jokes = json.map(function(json) { return new Joke(json) })

        let jokeList = document.getElementById('joke-list')

        jokes.forEach(function(joke){
          jokeList.append(joke.render())
        })
      })
    }

    static handleJokeSubmit(event){
      event.preventDefault()

      let jokeInput = document.getElementById('joke-body').value

      JokeAdapter.createJoke(jokeInput)
      .then(json => {
        let jokeList = document.getElementById('joke-list')

        let jokeContainer = document.createElement('li')
        let jokeShare = document.createElement('a')
        jokeShare.innerText = "x"
        jokeShare.href = "http://localhost:3000/joke/" + json["id"]
        let jokeBody = document.createTextNode(jokeInput + " ")

        jokeContainer.append(jokeBody)
        jokeContainer.append(jokeShare)

        jokeList.append(jokeContainer)
      })
    }
  }
})()
