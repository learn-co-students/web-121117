/*
  INITIAL Wanted Behavior
  ==================
  - Takes in a GitHub username
    - We need to get a value from an input
  - Displays a profile for that username

  PATCH PROFILE Behavior
  ==================
  - We have to add a new input onto the form
  - Grab the values from the form
  - Put them into the fetch (because we already have a token, we actually don't,
    need to pass the username)
    - PATCH method
    - Body will be only an updated body
  - Render the change onto the page

  ***** IMPORTANT NOTE *****
  As it currently stands, the way we have tried to implement our patchProfile
  onto the view, doesn't work. That's because we're in async JavaScript, we want
  to add two different pieces that let us update.

  - If you want to use our previous functionality, change L33 to handleShowProfile()
    * It will populate our bio input with text from the server
  - If you want to use the **NEW AND WORKING** functionality, change L33 to handlePatchProfile()
    * We want to give a username and bio and show it on the page
*/


let form = document.getElementById('form')

/**** You can change the functionality by changing the callback ****/
form.addEventListener('submit', handleShowProfile)

// 1. Getting profile for event listener
function handleShowProfile(event){
  event.preventDefault()

  let githubUsername = document.getElementById('github-username').value
  getUserProfile(githubUsername)
}

// 2. Patching profile for event listener
function handlePatchProfile(event){
  event.preventDefault()

  let bioInput = document.getElementById('bio').value
  GitHubAdapter.patchProfile(bioInput)
  .then(json => {
    let profileContainer = document.getElementById('profile-container')
    let newUser = new User(json)
    let profile = newUser.render()
    profileContainer.append(profile)
  })
}

// Calls the getProfile and handles applying it all on the view
function getUserProfile(username){
  GitHubAdapter.getProfile(username)
  .then( json => {
    let bioField = document.getElementById('bio')
    bioField.value = json["bio"]

    let profileContainer = document.getElementById('profile-container')
    let newUser = new User(json)
    let profile = newUser.render()
    profileContainer.append(profile)
  })
}


// Encapsulates all of our fetches and our variable
const GitHubAdapter = (function(){
  const BASE_URL = "https://api.github.com"
  const TOKEN = "YOUR_TOKEN_HERE"

  return class GitHubAdapter {
    static getProfile(username){
      return fetch(BASE_URL + "/users/" + username, {
        method: "GET",
        headers: {
          Authorization: "token " + TOKEN
        }
      })
      .then( res => res.json() )
    }

    static patchProfile(ghBio){
      return fetch(BASE_URL + "/user", {
        method: "PATCH",
        headers: {
          Authorization: "token " + TOKEN
        },
        body: JSON.stringify({
          bio: ghBio
        })
      })
      .then( res => res.json())
    }
  }
})()

class User {
  constructor({name, bio}){
    this.name = name
    this.bio = bio
  }

  render(){
    let profile = document.createElement('div')
    profile.innerHTML = `
    <h3>${this.name}</h3>
    <p>${this.bio}</p>`

    return profile
  }
}
