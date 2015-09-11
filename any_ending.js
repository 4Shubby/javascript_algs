function end(str, target) {
	
  return str.indexOf(target, str.length - target.length)!==-1;
}

end('Bastian', 'an');



result = end('Bastian', 'an');
console.log(result);

