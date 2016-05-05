$(document).ready(function() {


quiz = [
	{
		question: "Vho is the Chosen One?",
		answers: [" Ron Weasley", " Voldemort", " Dudley Dursley", " Harry Potter"],
		correct: 3
	},
	{
		question: "Vho are Harry Potter's best friends?",
		answers: [" Crabbe and Goyle", " Ron and Hermione", " Malfoy and Neville", " Fred and George"],
		correct: 1
	},
	{
		question: "Vho is the headmaster of Hogvarts?",
		answers: [" Albus Dumbledore", " Severus Snape", " Molly Weasley", " Minerva McGonagall"],
		correct: 0
	},
	{
		question: "Vhat is the name of the house elf Harry befriends?",
		answers: [" Dobby", " Winky", " Hedwig", " Scabbers"],
		correct: 0
	},
	{
		question: "Hov many houses are there at Hogvarts?",
		answers: [" 1", " 2", " 3", " 4"],
		correct: 3
	},
	{
		question: "Hov many books are in the Harry Potter series?",
		answers: [" 4", " 7", " 1", " 6"],
		correct: 1
	},
	{
		question: "Vhat is the name of Harry's ovl?",
		answers: [" Fang", " Fawkes", " Hedwig", " Buckbeak"],
		correct: 2
	}
	];

	var questionNumber = 0;
	var correctAnswers = 0;
	var incorrect = 0;
	quizOver = false;

	start();
	function start(event) {
		$(document.createElement('h3')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#question');
	};

	

    function radioButtons(event) {
    var list = $('<li>');
    var item;
    var input = '';
    
    for (var i = 0; i < quiz[0].answers.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value= ' + i +' />';
      input += quiz[0].answers[i];
      item.append(input);
      list.append(item);
    }
    return list;
  	};
		$('#answers').append(radioButtons());

	

	function choose() {
    	answers[questionNumber] = +$('input[name="answer"]:checked').val();
  	};
  	choose();

  	("#next").on("click", function(){
  		$(document.createElement('h3')).addClass('question').attr('id', 'question').text(quiz[1]['question']).appendTo('#question');

  	});

});


  

