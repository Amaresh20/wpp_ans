function nameConcat(str) {
  let lastThreeElement = str.slice(-3);
  if (str.length >= 3) {
    let newName = lastThreeElement + str + lastThreeElement;
    return newName;
  } else {
    return str;
  }
}
let str = "amaresh";
console.log(nameConcat(str));
