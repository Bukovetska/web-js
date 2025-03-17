(function () {
  let speakWord = "Hello";
  window.sayHello = function (name) {
    console.log(speakWord + " " + name);
  };
})();