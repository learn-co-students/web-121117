/*
  Joke
  ============
  - Similar to what our Joke model will be, with an id and joke
  - has a render method that will return html for our app
*/


const Joke = (function(){
  return class Joke {
    constructor({id, joke}){
      this.id = id
      this.joke = joke
    }

    render(){
      let jokeContainer = document.createElement('li')
      let jokeBody = document.createTextNode(this.joke + " ")

      let jokeShare = document.createElement('a')
      jokeShare.innerText = "x"
      jokeShare.href = "http://localhost:3000/jokes/" + this.id


      jokeContainer.append(jokeBody)
      jokeContainer.append(jokeShare)

      return jokeContainer
    }
  }
})()
