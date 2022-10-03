const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};
const john = Object.create(soldier);
//const john = {
// health: 100,
//};
c;
//john._proto_ = soldier;
//Object.setPrototypeOf(john, soldier);
//console.log(john.armor);
//john.sayHello();
