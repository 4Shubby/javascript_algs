function destroyer(arr) {
 var elemToDestroy = [];

 for( var i =1; i < arguments.length; i++){

 	elemToDestroy.push(arguments[i]);
 }

 var survived = arguments[0].filter(function(element, index){
    var toReturn = true;

    for(var i = 0; i < elemToDestroy.length; i++){
      if (element === elemToDestroy[i]){ 
        toReturn = false;
      }
    }
    return toReturn;

  });
  return survived;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");

result = destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");

console.log(result);


//function destroyer(arr) {
 // var args = Array.prototype.slice.call(arguments);
  //args.splice(0,1);
 // return arr.filter(function(element) {
 //   return args.indexOf(element) === -1;
 // });
//}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");

//result = destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");

//console.log(result);

