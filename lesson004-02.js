function Animal(type, name) {
  this.type = type;
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log(`my name is ` + this.name);
};

function Bird() {

}

Bird.prototype = new Animal();
