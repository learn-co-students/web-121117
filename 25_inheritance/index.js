// function User(name) {
//   this.name = name;
// }
//
// User.prototype.sayMyName = function() {
//   console.log(this.name);
// };

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayMyName() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Instructor extends User {
  /// overriding a method
  constructor(name, age, baseLang) {
    super(name, age); /// super.construtor()
    console.log(this);
    this.baseLang = baseLang;
  }

  // override the sayMyName method

  sayMyName() {
    super.sayMyName();
    console.log(
      `I am ${this.age} years old and my first language was ${this.baseLang}`
    );
  }
}

let joe = new User("joe", 12);
let prince = new Instructor("prince", 100, "C");
