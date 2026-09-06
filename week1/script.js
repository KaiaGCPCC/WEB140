/*
   Week 3
   JavaScript Interactivity Assignment
   WEB140-N801
   
   JavaScript for Video Game Quiz
   Author: Shakaia Gaddy
   Date: 9/3/26  
   
   Filename: script.js   
*/

let score = 0;

/*Q1 logic */
let q1Ans = false;
function chkAns1(answer) {
	if (q1Ans === false) {
		if (answer === "correct") {
			document.getElementById("q1F").textContent = "You Got It!";
			score += 1;
		} else {
			document.getElementById("q1F").textContent = "Aw man, you missed.";
		}
		q1Ans = true;
	}
}

document.getElementById("1A").addEventListener("click", function() {
	chkAns1("incorrect");
});

document.getElementById("1B").addEventListener("click", function() {
	chkAns1("incorrect");
});

document.getElementById("1C").addEventListener("click", function() {
	chkAns1("correct");
});

document.getElementById("1D").addEventListener("click", function() {
	chkAns1("incorrect");
});

/* Q2 logic */
let q2Ans = false;
function chkAns2(answer) {
	if (q2Ans === false) {
		if (answer === "correct") {
			document.getElementById("q2F").textContent = "You Got It!";
			score += 1;
		} else {
			document.getElementById("q2F").textContent = "Aw man, you missed.";
		}
		q2Ans = true;
	}
}

document.getElementById("2A").addEventListener("click", function() {
	chkAns2("incorrect");
});

document.getElementById("2B").addEventListener("click", function() {
	chkAns2("correct");
});

document.getElementById("2C").addEventListener("click", function() {
	chkAns2("incorrect");
});

document.getElementById("2D").addEventListener("click", function() {
	chkAns2("incorrect");
});

/* Q3 logic */
let q3Ans = false;
function chkAns3(answer) {
	if (q3Ans === false) {
		if (answer === "correct") {
			document.getElementById("q3F").textContent = "You Got It!";
			score += 1;
		} else {
			document.getElementById("q3F").textContent = "Aw man, you missed.";
		}
		q3Ans = true;
	}
}

document.getElementById("3A").addEventListener("click", function() {
	chkAns3("incorrect");
});

document.getElementById("3B").addEventListener("click", function() {
	chkAns3("incorrect");
});

document.getElementById("3C").addEventListener("click", function() {
	chkAns3("incorrect");
});

document.getElementById("3D").addEventListener("click", function() {
	chkAns3("correct");
});

/* Q4 logic */
let q4Ans = false;
function chkAns4(answer) {
	if (q4Ans === false) {
		if (answer === "correct") {
			document.getElementById("q4F").textContent = "You Got It!";
			score += 1;
		} else {
			document.getElementById("q4F").textContent = "Aw man, you missed.";
		}
		q4Ans = true;
	}
}

document.getElementById("4A").addEventListener("click", function() {
	chkAns4("correct");
});

document.getElementById("4B").addEventListener("click", function() {
	chkAns4("incorrect");
});

document.getElementById("4C").addEventListener("click", function() {
	chkAns4("incorrect");
});

document.getElementById("4D").addEventListener("click", function() {
	chkAns4("incorrect");
});

/* Q5 logic */
let q5Ans = false;
function chkAns5(answer) {
	if (q5Ans === false) {
		if (answer === "correct") {
			document.getElementById("q5F").textContent = "You Got It!";
			score += 1;
		} else {
			document.getElementById("q5F").textContent = "Aw man, you missed.";
		}
		q5Ans = true;
	}
}

document.getElementById("5A").addEventListener("click", function() {
	chkAns5("incorrect");
});

document.getElementById("5B").addEventListener("click", function() {
	chkAns5("correct");
});

document.getElementById("5C").addEventListener("click", function() {
	chkAns5("incorrect");
});

document.getElementById("5D").addEventListener("click", function() {
	chkAns5("incorrect");
});

/* Show score */

document.getElementById("score").addEventListener("click", function() {
	document.getElementById("showScore").textContent = `Your Score: ${score} out of 5`;
});