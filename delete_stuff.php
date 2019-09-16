<?php
require("dbinfo.php");

// Gets data from URL parameters.
$id = $_GET['id'];

// Opens a connection to a MySQL server.
$connection = mysqli_connect ("localhost", $username, $password, $database);

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/* Sets the active MySQL database.
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysqli_error());
} */

$sql = "DELETE FROM `markers` WHERE `markers`.`id` = " . $id;

if (mysqli_query($connection, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($connection);
}

// mysqli_close($connection);

?>