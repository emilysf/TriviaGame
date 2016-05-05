$(document).ready(function() {


quiz = [
	{
		question: "Vho is the Chosen One",
		answers: [" Ron Weasley", " Voldemort", " Dudley Dursley", " Harry Potter"],
		correct: 3
	},
	{
		question: "Who are Harry Potter's best friends?",
		answers: [" Crabbe and Goyle", " Ron and Hermione", " Malfoy and Neville", " Fred and George"],
		correct: 1
	},
	{
		question: "Who is the headmaster of Hogwarts?",
		answers: [" Albus Dumbledore", " Severus Snape", " Molly Weasley", " Minerva McGonagall"],
		correct: 0
	},
	{
		question: "What is the name of the house elf Harry befriends?",
		answers: [" Dobby", " Winky", " Hedwig", " Scabbers"],
		correct: 0
	},
	{
		question: "How many houses are there at Hogwarts?",
		answers: [" 1", " 2", " 3", " 4"],
		correct: 3
	},
	{
		question: "How many books are in the Harry Potter series?",
		answers: [" 4", " 7", " 1", " 6"],
		correct: 1
	},
	{
		question: "What is the name of Harry's owl?",
		answers: [" Fang", " Fawkes", " Hedwig", " Buckbeak"],
		correct: 2
	},
	{
		question: "Who disguised themself as a rat named Scabbers?",
		answers: [" Draco Malfoy", " Peter Pettigrew", " Sirius Black", " Bellatrix Lestrange"],
		correct: 1
	},
	{
		question: "Who is Harry Potter's godfather?",
		answers: [" Vernon Dursley", " Arthur Weasley", " Albus Dumbledore", " Sirius Black"],
		correct: 3
	},
	{
		question: "What house is Harry, Ron, and Hermione in at Hogwarts?",
		answers: [" Gryffindor", " Hufflepuff", " Ravenclaw", " Slytherin"],
		correct: 0
	}
	];

	var questionNumber = 0;
	var correctAnswers = 0;
	var incorrect = 0;
	var notanswered = 0;
	var answered = 0;

	function startQuiz(event) {
		$(document.createElement('h3')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#question');
	};

	startQuiz();

    function radioButtons(event) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    
    for (var i = 0; i < quiz[0].answers.length; i++) {
      item = $('<h5><li></h5>');
      input = '<input type="radio" name="answer" value= ' + i +' />';
      input += quiz[0].answers[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  	};
	$('#answers').append(radioButtons());




});
  

