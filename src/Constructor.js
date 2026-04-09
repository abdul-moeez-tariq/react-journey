// Constructor is a member of class
// Constructor is used to initialize the object
// Constructor automatically called when an object is created

// JS OOP Concept
class StudentOne {
  constructor() {
    // console.log("Hello I am Constructor")
  }
}

const std = new StudentOne();


class StudentTwo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const std1 = new StudentTwo("Moeez", 24);

console.log(std.name)
console.log(std.age)