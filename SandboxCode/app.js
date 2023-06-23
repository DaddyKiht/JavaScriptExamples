const prompt = require("prompt-sync")({ sigint: true });

console.log('Hello world');
for (let x = 0; x < 5; x++)
{
	let promptAnswer = prompt("This is a test prompt, you should be able to enter something... ")
	let remainingPrompts = 5 - (x+1);
	console.log('You entered ' + promptAnswer + "! Repeating prompt exercise " + remainingPrompts + " more times.");
}
