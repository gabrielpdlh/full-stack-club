const person = {
  name: 'Gabriel',
  sayHello: function() {
    console.log(this.name); // 'this' se refere ao objeto 'person'
  }
};

person.sayHello(); // Gabriel