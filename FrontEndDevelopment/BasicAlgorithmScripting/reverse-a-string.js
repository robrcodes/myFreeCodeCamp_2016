function reverseString(str) {
  console.log(str);
  str = str.split("");
  console.log(str);
  str = str.reverse();
  console.log(str);
  str = str.join("");
  return str;
}

var revved = reverseString('hello');
console.log(revved);
