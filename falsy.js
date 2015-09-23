function bouncer(arr) {
 
 return arr.filter(function(x){return Boolean(x);});

  
}



bouncer([7, "ate", "", false, 9], "");

result = bouncer([7, "ate", "", false, 9], "");

console.log(result);