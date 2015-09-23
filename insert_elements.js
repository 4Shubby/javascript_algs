function where(arr, num) {

  arr.sort(function(a, b){

    return a - b;

  });
   
  for (var a in arr){

    if (arr[a]>=num)
 
     return parseInt(a);

}
  return arr.length;
  
}

where([40, 60], 50, "");

result = where([40, 60], 50, "");

console.log(result);