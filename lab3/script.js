(function () {
  let names = ["Bill", "John", "jen", "Jason", "PPaul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  console.log("Якщо ім’я починається з літери j або J, то вивід -> Goodbye 'name', інакше -> Hello 'name'.");
  for (let name of names) {
    let letter = name.charAt(0).toLowerCase();
    if (letter === 'j') {
      sayGoodBye(name);
    } else {
      sayHello(name);
    }
  }
  
  console.log("Якщо ім’я має подвоєння літер, то вивід -> Doubling 'name', інакше -> No doubling 'name'.");
  for (let name of names) {
    let doubling = false;
    for (let i = 0; i < name.length - 1; i++) {
      if (name[i].toLowerCase() === name[i + 1].toLowerCase()) {
        doubling = true;
        break;
      }
    }
    if (doubling) {
      writeDoubling(name)    
    } else {
      writeNoDoubling(name)   
    }
  }
})();