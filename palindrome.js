
function palindrome(str) {
 var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

 var checkPalindrome = removeChar.split('').reverse().join('');

 if (removeChar === checkPalindrome) {

	return true;
	}
 else {
	return false;
	}
}


palindrome("eye");

result = palindrome("eye");
console.log(result);

