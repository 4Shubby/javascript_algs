function mutation(arr) {

	var firstArray = arr[0].toLowerCase().split("");
	var secondArray = arr[1].toLowerCase().split("");
	var count =0;

	for (var i =0; i<secondArray.length; i++){

		if (firstArray.indexOf(secondArray[i])>-1){
			count++;
		}
	}
	if (count ==secondArray.length){
		return true
	}

	else {return false;}
}


mutation(["hello", "hey"], "");

result = mutation(["hello", "hey"], "");

console.log(result);
