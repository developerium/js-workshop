function Animal(type, name) {
  this.type = type;
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log(`my name is ` + this.name);
};

Animal.isAnimal = () => {
  //
};

const eagle = new Animal('bird', 'sam');
eagle.sayHello();

Animal.isAnimal();
