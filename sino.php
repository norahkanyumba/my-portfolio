<?php
$servername="localhost";
$username="root";
$password="";
$databasename="norah";
$conn=mysqli_connect($servername,$username,$password,$databasename);

if (!$conn)
{
echo "try again";
}

echo "CLIENTS DETAILS" ."<br>";
	
	//Retrieve data from database

	$sql = "SELECT*FROM `user`;";
	$result = $conn->query( $sql);
	if ($result->num_rows>0){
		while ($row = $result->fetch_assoc()) {
			echo "ID: " .$row["ID"], " -PIN:" .$row["PIN"], "      NAME:" .$row["NAME"], "        ADDRESS:" .$row["ADDRESS"]."<br>";

		}
	} 
    else {
		echo "0 results";
	}
?>