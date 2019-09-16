<?php
require("dbinfo.php");

// Gets data from URL parameters.
$name = $_GET['name'];
$address = $_GET['address'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];

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

// Inserts new row with place data.

$query = sprintf("INSERT INTO markers " .
         " (id, name, address, lat, lng, type ) " .
         " VALUES (NULL, '%s', '%s', '%s', '%s', '%s');",
         mysqli_real_escape_string($connection, $name),
         mysqli_real_escape_string($connection, $address),
         mysqli_real_escape_string($connection, $lat),
         mysqli_real_escape_string($connection, $lng),
         mysqli_real_escape_string($connection, $type));

$result = mysqli_query($connection, $query);

if (!$result) {
  die('Invalid query: ' . mysqli_error());
}



?>