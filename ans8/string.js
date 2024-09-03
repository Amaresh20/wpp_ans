function firstStr(str) {
  let firstString = str.slice(0, 4);
  if (firstString === "java") {
    return true;
  } else {
    return false;
  }
}
console.log(firstStr("javascript"));
console.log(firstStr("Javascript"));
