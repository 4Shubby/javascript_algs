
function findLongestWord(str) {

var split = str.split(" ");
var longest = 0;
for (var i =0; i<split.length; i++){
	if (longest < split[i].length){
		longest = split[i].length;
	}
}

return longest;
 
}	

findLongestWord('The quick brown fox jumped over the lazy dog');


result = findLongestWord('The quick brown fox jumped over the lazy dog');
console.log(result);

