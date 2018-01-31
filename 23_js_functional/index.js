function functionReplace(arr, index, newElement) {
  return [...arr.slice(0, index), newElement, ...arr.slice(index + 1)];
}
/*

I want to write a method that pretends to talk to my backend
 // some method that will return
 {

   id: 2,
   username: "user 2"
}


*/
console.log(UserApi.fetchUser());
console.log(UserApi.fetchUser());
console.log(UserApi.fetchUser());
var id = 100;
console.log(UserApi.fetchUser());
console.log(UserApi.fetchUser());
console.log(UserApi.fetchUser());
