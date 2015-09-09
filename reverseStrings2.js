
function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString('Greeting from Earth');
result = reverseString('Greetings from Earth');
console.log(result);

