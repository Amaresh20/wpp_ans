function reverseString(str) {
  let splitedString = str.split("");
  let reversedString = splitedString.reverse();
  let result = reversedString.join();
  return result;
}
let str = "Ram is a good boy";
console.log(reverseString(str));
