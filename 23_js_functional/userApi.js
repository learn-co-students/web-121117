// const UserApi = {
//   fetchUser: function() {
//     id++;
//     return {
//       id: id,
//       username: `user ${id}`
//     };
//   }
// };

const UserApi = (function() {
  var id = 0;
  return {
    fetchUser: function() {
      id++;
      return {
        id: id,
        username: `user ${id}`
      };
    }
  };
})();
