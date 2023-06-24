const prompt = require("prompt-sync")({ sigint: true });
generateResponse();
function generateResponse() {
	let promptAnswer = prompt("What class did you start as? ").toUpperCase();
	switch (promptAnswer) {
		case "ACN":
		case "LNC":
		case "ARC":
		case "PUG":
		case "THM":
			console.log("That's a class devoted to dealing damage!");
			break;
		case "CNJ":
			console.log("That's a class devoted to healing!");
			break;
		case "GLD":
		case "MRD":
			console.log("That's a class devoted to being stepped on!");
			break;
		default:
			let yesNo = prompt("I'm not familiar with that one, care to try again? Y/N ").toUpperCase();
			if (yesNo == "Y") {
				generateResponse();
			}
			else {
				break;
			}

	}
}
