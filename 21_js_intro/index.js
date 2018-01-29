console.log("index.js");

const underscore = (function() {
  return {
    forEach: function(array, cb) {
      for (let i = 0; i < array.length; i++) {
        cb(array[i]);
      }
      return array;
    }
  };
})();

underscore.forEach([1, 2, 3], function(element) {
  console.log(element);
});
