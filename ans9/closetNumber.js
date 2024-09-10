function findCloset(num1, num2) {
  let target = 100;
  let num1Diff = Math.abs(num1 - target);
  let num2Diff = Math.abs(num2 - target);
  if (num1Diff == num2Diff) {
    return "both numbers are closet";
  } else if (num1Diff > num2Diff) {
    return num2;
  } else {
    return num1;
  }
}
let num1 = 70;
let num2 = 90;
console.log(findCloset(num1, num2));
