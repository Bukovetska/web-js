let car1 = new Object();
car1.color = "pink";
car1.maxSpeed = 120;
car1.driver = {
  name: "Karina Bukovetska",
  category: "C",
  personalLimitations: "No driving at night",
};
car1.tuning = true;
car1["number of accidents"] = 0;

let car2 = {
  color: "puprle",
  maxSpeed: 160,
  driver: {
    name: "Karina Bukovetska",
    category: "B",
    personalLimitations: null,
  },
  tuning: false,
  "number of accidents": 2,
};

car1.drive = function () {
  console.log("I am not driving at night");
};

car2.drive = function () {
  console.log("I can drive anytime");
};

car1.drive();
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
  this.driver = null;
  this.trip = function() 
  { 
    if (!this.driver) {
    console.log("No driver assigned");
    } 
    else {
    let sms = "Driver " + this.driver.name;
    if (this.driver.nightDriving) {
      sms += " drives at night";
    } else {
      sms += " does not drive at night";
    }
    sms += " and has " + this.driver.experience + " years of experience";
    console.log(sms);
    }
  };
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience,
  };
};

let truck1 = new Truck("puprle", 7000, 20.7, "Opel", "Insignia");
let truck2 = new Truck("black", 2000, 130.9, "Mazda", "CX-5");

truck1.AssignDriver("Karina Bukovetska", true, 7);
truck2.AssignDriver("Karina Bukovetska", false, 10);

truck1.trip();
truck2.trip();
//next
class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log("A square is a quadrilateral with all sides equal and all angles right angles (90°).");
  }

  length() {
    console.log("Length: " + 4 * this.a);
  }

  square() {
    console.log("Square: " + this.a * this.a);
  }

  info() {
    console.log("Sides: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
    console.log("Angles: 90°, 90°, 90°, 90°");
    this.length();
    this.square();
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  static help() {
    console.log("A rectangle is a quadrilateral whose opposite sides are equal and all angles are right angles (90°).");
  }

  length() {
    console.log("Length: " + 2 * (this.a + this.b));
  }

  square() {
    console.log("Square: " + this.a * this.b);
  }

  info() {
    console.log("Sides: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
    console.log("Angles: 90°, 90°, 90°, 90°");
    this.length();
    this.square();
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("A rhombus is a quadrilateral with all sides equal and opposite angles equal.");
  }

  length() {
    console.log("Length: " + 4 * this.a);
  }

  square() {
    console.log("Square: " + this.a * this.a * Math.sin((this.alpha * Math.PI) / 180));
  }

  info() {
    console.log("Sides: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
    console.log("Angles: " + this.alpha + ", " + this.beta + ", " + this.alpha + ", " + this.beta);
    this.length();
    this.square();
  }
  get alpha() {
    return this._alpha;
  }

  set alpha(value) {
    if (typeof value === 'number' && value > 0 && value < 180) {
      this._alpha = value;
    } else {
      console.log("Must be a number between 0 and 180.");
    }
  }

  get beta() {
    return this._beta;
  }

  set beta(value) {
    if (typeof value === 'number' && value > 0 && value < 180) {
      this._beta = value;
    } else {
      console.log("Must be a number between 0 and 180.");
    }
  }
}

class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("A parallelogram is a quadrilateral whose opposite sides are parallel and equal, and whose opposite angles are equal.");
  }

  square() {
    console.log("Square: " + this.a * this.b * Math.sin((this.alpha * Math.PI) / 180));
  }

  info() {
    console.log("Sides: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
    console.log("Angles: " + this.alpha + ", " + this.beta + ", " + this.alpha + ", " + this.beta);
    this.length();
    this.square();
  }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let square = new Square(4);
square.info();

let rectangle = new Rectangle(7, 10);
rectangle.info();

let rhombus = new Rhombus(7, 120, 60);
rhombus.info();

let parallelogram = new Parallelogram(7, 10, 120, 60);
parallelogram.info();

function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

let ob1 = Triangular(); 
console.log(ob1); 

let ob2 = Triangular(7, 10, 13); 
console.log(ob2); 

let ob3 = Triangular(13, 14, 15); 
console.log(ob3); 

// 
function PiMultiplier(a) {
  return function () {
    return Math.PI * a;
  };
}

let pi1 = PiMultiplier(2);
let pi2 = PiMultiplier(2/3);
let pi3 = PiMultiplier(1/2);

console.log(pi1());
console.log(pi2());
console.log(pi3());

function Painter(color) {
    let paint = function (obj) {
      if (obj.type === undefined) {
        console.log("No ‘type’ property occurred");
      } else {
        console.log(`Color is ${color} and type is ${obj.type}`);
      }
      return; 
    };
    return paint; 
  }
  
  let PaintBlue = Painter("blue");
  let PaintRed = Painter("red");
  let PaintYellow = Painter("yellow");
  
  let obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta",
  };
  
  let obj2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400,
  };
  
  let obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true,
  };
  
  PaintBlue(obj1);
  PaintBlue(obj2);
  PaintBlue(obj3);

  PaintRed(obj1);
  PaintRed(obj2);
  PaintRed(obj3);

  PaintYellow(obj1);
  PaintYellow(obj2);
  PaintYellow(obj3);