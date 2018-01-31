/* Constructor Function */
function Dog(species, age, name){
    this.species = species
    this.age = age
    this.name = name
}

/* Adding methods onto our Dog prototype */
Dog.prototype.bark = function (){
  console.log(`${this.species} is ${this.age} years old and barks.`)
}

Dog.prototype.smells = function(dog){
  console.log(`${this.name} smells ${dog.name}.`)
}

Dog.prototype.fetch = function(item){
  console.log(`${this.name} fetch ${item}.`)
}


let corgi = new Dog('Corgo', 3, 'corgi')
let husky = new Dog('husky', 2, 'Husko')

// corgi.smells(husky)
// corgi.fetch('stick')

/* Building our own Class - Artist
- Name - "string"
- Genre(s) - an array
- Song - "string"
*/

class Artist {
  constructor(name, genres, song) {
    this.name = name
    this.genres = genres
    this.song = song
  }

  sing(){
    console.log(`${this.name} belts out ${this.song}`)
  }

  meltdown(){
    console.log(`${this.name} has a meltdown and shaves their head.`)
  }

  static becomeFamous(){
    console.log("The artists become famous")
  }

  // Class methods that we know in Ruby
  //  - When we want to get `all` items
  //  - Adapters (for making API requests)

}

let brittany = new Artist("Brittany Spears", ['pop', 'classical'], 'Toxic')
let rihanna = new Artist("Rihanna Fente", ['pop'], "Umbrella")
