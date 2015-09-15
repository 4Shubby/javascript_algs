function truncate(str, num) {
  if(str.length > num)
  return str.substring(0,num-3)+'...';
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 43);
result = truncate('A-tisket a-tasket A green and yellow basket', 43);
console.log(result);

	