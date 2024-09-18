function checkNumber(a, b, c) {
  if (b > a && c > b) {
    return "strict mode";
  } else if (c > b) {
    return "soft mode";
  } else {
    return "neither soft mode or strict mode";
  }
}
console.log(checkNumber(10, 15, 31));
console.log(checkNumber(22, 22, 31));
