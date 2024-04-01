function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var k = 0;
var x = 0;
var y = 1;
var next;
var fib = [0, 1];
var number = getRandomInt(0, 144);

do {
  next = fib[x] + fib[y];
  fib.push(next);
  k++;
  x++;
  y++;
} while (k < 11);

var answer = console.log(fib.includes(number));
console.log(number);
console.log(fib);
