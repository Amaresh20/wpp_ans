function findNumber(num) {
  if (num <= 0) {
    return `${num} is negative please give positive number`;
  }
  if (num % 3 == 0 || num % 7 == 0) {
    return `${num} is multiple of 3 or 7`;
  } else {
    return `${num} not is multiple of 3 or 7`;
  }
}
let num = 42;
console.log(findNumber(num));
