<?php

//The back-end PHP scripts goes here
$con = new PDO("mysql:host=localhost; dbname=tashi", "tashi", "tashi");
$now = time();

$status = false;
$status = $con->query("INSERT INTO `qbank`(a1, a2, a3, a4, a5, registerdate) VALUES('$_POST[a1]', '$_POST[a2]', '$_POST[a3]', '$_POST[a4]', '$_POST[a5]', '$now')");
if ( !$status) {
	echo 'Failed to insert into DB';
} else {
	echo 'Thank you, your form is saved';
}


