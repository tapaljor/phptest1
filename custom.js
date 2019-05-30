const next = document.getElementById('raq_next');
const back = document.getElementById('raq_back');
const save = document.getElementById('save');

save.addEventListener('click', (e) => {

	e.preventDefault();

	//Submit will not without last answer5 is answered
	const input = document.getElementById('answer5');
	if ( input.value === '') {
		feedback.innerHTML = "<span style='color: red;'>You cannot submit without answering</span>";
		throw "Last answer is not answered";
	}

	const a1 = document.getElementById('answer1');
	const a2 = document.getElementById('answer2');
	const a3 = document.getElementById('answer3');
	const a4 = document.getElementById('answer4');
	const a5 = document.getElementById('answer5');

	//Redirect to PHP file (save_data.php) method as POST and saving to MySQL database
	$.ajax ({
		type: "POST",
		url: "save_data.php",
		data: { a1: a1.value, a2: a2.value, a3: a3.value, a4: a4.value, a5:a5.value },
		beforeSend: function(data) {
			$("#feedback").html('Loading..');
		},
		success: function(feedback) {
			$("#feedback").html(feedback);
		}
	});
});

var count = 1;
//Once next question is clicked
next.addEventListener('click', () => {

	if (count == 1) {
		const input = document.getElementById('answer1');
		if ( input.value === '') {
			feedback.innerHTML = "<span style='color: red;'>You cannot go to next without answering</span>";
		} else {
			count++;
			//The increment number 'count' is added to div name 
			$("#active_panel"+count).fadeTo("slow", 0.7);
			$("#active_panel"+count).show();
			let previous = count-1;
			//Previous question will be hidden by getting previous question's div by subtracting to current 'count' 
			$("#active_panel"+previous).hide();
			$("#raq_back").show();
			feedback.innerHTML = "Welcome to the ABC Quiz";
			$("#save").hide();
			$("#raq_back").show();
		}
	} else {
		//Checking the answer is typed or not, if answer is null/empty it will not execute thus throwing error to user
		const input = document.getElementById('answer'+count);
		if ( input.value === '') {
			feedback.innerHTML = "<span style='color: red;'>You cannot go to next without answering</span>";
			$("#raq_back").show();
		} else {
			count++;
			//The increment number 'count' is added to div name 
			$("#active_panel"+count).fadeTo("slow", 0.7);
			$("#active_panel"+count).show();
			let previous = count-1;
			//Previous question will be hidden by getting previous question's div by subtracting to current 'count' 
			$("#active_panel"+previous).hide();
			feedback.innerHTML = "Welcome to the ABC Quiz";
			if ( count === 5) {
				$("#raq_next").hide();
				$("#save").show();
			} else {
				$("#raq_next").show();
				$("#save").hide();
			}
		}
	}
});
//Once back/previous is clicked
back.addEventListener('click', () => {
	if (count == 1) {
		count++;
		//The increment number 'count' is added to div name 
		$("#active_panel"+count).fadeTo("slow", 0.7);
		$("#active_panel"+count).show();
		let previous = count-1;
		//Previous question will be hidden by getting previous question's div by subtracting to current 'count' 
		$("#active_panel"+previous).hide();
		$("#raq_back").show();
		feedback.innerHTML = "Welcome to the ABC Quiz";
		$("#raq_back").hide();
		$("#save").hide();
	} else {
		//Checking the answer is typed or not, if answer is null/empty it will not execute thus throwing error to user
		count--;
		//The increment number 'count' is added to div name 
		$("#active_panel"+count).fadeTo("slow", 0.7);
		$("#active_panel"+count).show();
		let previous = count+1;
		//Previous question will be hidden by getting previous question's div by subtracting to current 'count' 
		$("#active_panel"+previous).hide();
		feedback.innerHTML = "Welcome to the ABC Quiz";
		if ( count === 5) {
			$("#raq_next").hide();
			$("#save").show();
		} else {
			if ( count === 1) {
				$("#raq_back").hide();
			}
			$("#raq_next").show();
			$("#save").hide();
		}
	}
});
