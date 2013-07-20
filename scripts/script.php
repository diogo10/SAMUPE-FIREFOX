<?php	
	
	$con = mysql_connect('localhost','foccus_samupe','samupe123', 'foccus_samupe');
	$sql = "INSERT INTO usuario VALUES ($_POST["dados"])";
	mysql_query($sql,$con);

?>

