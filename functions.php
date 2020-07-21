<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');


function connect () {
    // Create connection
    $conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DBNAME);
    mysqli_set_charset($conn, "utf8");
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}

function close ($conn) {
    mysqli_close($conn);
}
