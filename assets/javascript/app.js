var triviaGame = {
	question: ["How many countries don't use the metric system?", "What flavor is Red Gatorade?", "What year was the Nintendo 64 released?", "Diamonds are made up almost entirely of what element?", "How many letters are in the Greek alphabet?", "What is the chemical symbol for iron?", "1,024 Gigabytes is equal to what?", "What language do they speak in Brazil?"],
	answerA: ["1", "Passion Fruit", "1996", "Carbon", "23", "Ir", "1.024 Megabytes", "English"],
	answerB: ["23", "Fruit Punch", "1964", "Nitrogen", "24", "Hr", "1 Megabyte", "Spanish"],
	answerC: ["7", "Cherry", "1989", "Calcium", "25", "Fe", "1.024 Terabytes", "French"],
	answerD: ["3", "Watermelon", "1993", "Potassium", "26", "I", "1 Terabyte", "Portuguese"],
	correctAnswer: ["D", "B", "A", "A", "B", "C", "D", "D"]	
}


var timer = 15;
var questNum = 0;
var numCorr = 0;
var numIncorr = 0;
var totalQuest = 0;
var userAns = "hello";
var result = 0;



$(".btnA").on("click", function() {

	userAns = "A";
	console.log(userAns);
	if (userAns == triviaGame.correctAnswer[questNum]) {
  		$(".correct").html("Correct!");
   		alert("Correct!")
  		numCorr++;
  		questNum++;
  		timer = 15;
	}else{
		alert("Incorrect");
		alert("Correct Answer: " + triviaGame.correctAnswer[questNum]);
		numIncorr++;
		questNum++;
		timer = 15;

	}
})

$(".btnB").on("click", function() {
	var userAns = "B";
	console.log(userAns);
	if (userAns == triviaGame.correctAnswer[questNum]) {
  		$(".correct").html("Correct!");
  		alert("Correct!")
  		numCorr++;
  		questNum++;
  		timer = 15;
  		


	}else{
		alert("Incorrect");
		alert("Correct Answer: " + triviaGame.correctAnswer[questNum]);
		numIncorr++;
		questNum++;
		timer = 15;

	}
})

$(".btnC").on("click", function() {
	var userAns = "C";
		console.log(userAns);
	if (userAns == triviaGame.correctAnswer[questNum]) {
  		$(".correct").html("Correct!");
  	  	alert("Correct!")
  		numCorr++;
  		questNum++;
  		timer = 15;
	}else{
		alert("Incorrect");
		alert("Correct Answer: " + triviaGame.correctAnswer[questNum]);
		numIncorr++;
		questNum++;
		timer = 15;

	}
})

$(".btnD").on("click", function() {
	var userAns = "D";
	console.log(userAns);
	if (userAns == triviaGame.correctAnswer[questNum]) {
  		$(".correct").html("Correct!");
  		alert("Correct!")
  		numCorr++;
  		questNum++;
  		timer = 15;
	}else{
		alert("Incorrect");
		alert("Correct Answer: " + triviaGame.correctAnswer[questNum]);
		numIncorr++;
		questNum++;
		timer = 15;

	}
  })

$(".choices").on("click", function() {
	result++;
	if (result > triviaGame.question.length - 1) {
		alert("You got " + numCorr + "/" + triviaGame.question.length + "correct!");
		timer = 15;
		questNum = 0;
		numCorr = 0;
		numIncorr = 0;
		totalQuest = 0;
		userAns = "hello";
		result = 0;
	}
})



function run(){
	counter = setInterval(decrement, 1000);
}

	function decrement() {
		timer--;
		$(".timer").html("Time Remaining: " + timer);
			if (timer == 0) {
			alert("Incorrect");
			alert("Correct Answer: " + triviaGame.correctAnswer[questNum]);
			timer = 15;
			numIncorr++;
			questNum++;

	}

$(".question").html(triviaGame.question[questNum]);
$(".answerA").html(triviaGame.answerA[questNum]);
$(".answerB").html(triviaGame.answerB[questNum]);
$(".answerC").html(triviaGame.answerC[questNum]);
$(".answerD").html(triviaGame.answerD[questNum]);


}

	$(".start").on("click", function() {
		run();
	})




