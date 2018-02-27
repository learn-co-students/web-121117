/*
  JokeAdapter
  ============
  - Handles all of the fetch requests on our jokes resource in our Rails app
  - Each function represents the type of request we are making to our backend
    - getJokes will match to GET /jokes (aka index in a rails app)
    - createJoke will match to POST /jokes (aka create in a rails app)
      - will require a JSON body
*/

const JokeAdapter = (function(){
  const BASE_URL = "http://febe4b4d.ngrok.io/jokes/"
  return class JokeAdapter {
    static getJokes(){
      return fetch(BASE_URL)
      .then((res) => { return res.json() })
    }

    static createJoke(jokeBody){
      return fetch(BASE_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          joke: jokeBody
        })
      })
      .then(res => { return res.json() })
    }
  }
})()
