//The previous chapter introduced the standard function Math.min that returns its smallest argument.
//We can build something like that now.Write a function min that takes two arguments and returns their minimum.

// Your code here.

function mini(number1, number2) {
	if (number1 > number2) {
		return number2
	}
	else {
		return number1
	}
}


console.log(mini(0, 10));
// ? 0 
console.log(mini(0, -10));
// ? -10
console.log(mini(5));
// -> 5