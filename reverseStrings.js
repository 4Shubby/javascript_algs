function reverseString(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

reverseString('Greeting from Earth');
result = reverseString('Greetings from Earth');
console.log(result);

