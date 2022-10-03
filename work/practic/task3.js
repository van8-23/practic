function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

//console.log(newNumbers);
//console.log(numbers);

const add = {
  d: 17,
  e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);
