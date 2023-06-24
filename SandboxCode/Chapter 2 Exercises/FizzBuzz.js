//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
//For numbers divisible by 3, print "Fizz" instead of the number,
//and for numbers divisible by 5(and not 3), print "Buzz" instead.
//for (let currentNumber = 0; currentNumber < 100; currentNumber++)
//{
//	if (currentNumber % 3 == 0) {
//		console.log("Fizz");
//	}
//	else if (currentNumber % 5 == 0)
//	{
//		console.log("Buzz");
//	}
//	else {
//		console.log(currentNumber);
//	}

//}



//When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
//(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let currentNumber = 0; currentNumber < 100; currentNumber++)
{
	if (currentNumber % 3 == 0 && currentNumber % 5 == 0)
	{
		console.log("FizzBuzz");
	}
	else if (currentNumber % 3 == 0)
	{
		console.log("Fizz");
	}
	else if (currentNumber % 5 == 0)
	{
		console.log("Buzz");
	}
	else
	{
		console.log(currentNumber);
	}

}