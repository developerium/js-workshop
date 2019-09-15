class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  sayHello() {
    console.log(`my name is ` + this.name);
  }
}

class Bird extends Animal {
  fly(meter) {
    console.log(`${this.type} is flying ${meter} .m`);
  }
}

const eagle = new Bird( 'bird', 'sam');

eagle.sayHello();
eagle.fly(4);
