function chunk(arr, size) {

	var newArr = [];
	for(var x =0; x<arr.length; x++) {
		newArr.push(arr.splice(0, size))
	}

	if (arr.length)
		newArr.push(arr);

	return newArr;

}

chunk(["a", "b", "c", "d"], 2, "");

result = chunk(["a", "b", "c", "d"], 2, "");

console.log(result);