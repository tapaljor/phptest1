<!DOCTYPE html>
<html>
<head>
	<title>Question & Answer Test</title>
	<script src="jquery.js"></script>
	<link rel="stylesheet" href="styles.css"/>

	<!-- Using google font Raleway due to its ligible font -->
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />

	<!-- Mobile responsive view -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div id="main">
	<div id="feedback">Do not refresh the page</div>
	<form action="#" method="post" id="raq_questions">
	<div class="question-container">
		<div id="active_panel1">
		Q1. Who created PHP? <br/>
		<input type="text" id="answer1" placeholder="Type your answer here.."/>
		</div>
		<div id="active_panel2">
		Q2. What is the height of Mt. Everest in meters? <br/>
		<input type="text" id="answer2" placeholder="Type your answer here.."/>
		</div>
		<div id="active_panel3">
		Q3. Name the person who swam Lake Ontario? <br/>
		<input type="text" id="answer3" placeholder="Type your answer here.."/>
		</div>
		<div id="active_panel4">
		Q4. BBC Stands for ?<br/>
		<input type="text" id="answer4" placeholder="Type your answer here.."/>
		</div>
		<div id="active_panel5">
		Q5. Cindi is John's mother's .....<br/>
		<input type="text" id="answer5" placeholder="Type your answer here.."/>
		</div>
	</div>
	</form>
	<div id="button">
	<div id="buttonl">
		<input type="button" value="Back" id="raq_back" style="display: none;">
	</div>
	<div id="buttonr">
		<input type="button" value="Next" id="raq_next">
	</div>
	</div>
	<button id="save" style="display: none;">Submit</button>
	<script src="custom.js"></script>
</div>
</body>
</html>
