<?php
include("db_connection.php");
?>

<?php

// Basic funtcions
function confirm_query($result_set) {
    if (!$result_set) {
        die("Database query failed.");
    }
}


//Save user email
function saveEmail($userid,$useremail){
    global $connection;
    $query = "INSERT INTO `email`(`userid`, `useremail`) VALUES ($userid,'$useremail')";
//    error_log("Save Email \n" . $query, 3, "C:/xampp/apache/logs/error.log");
    $result = mysqli_query($connection, $query);
    confirm_query($result);
    $last_id = mysqli_insert_id($connection);
//    error_log("id saved \n" . $last_id, 3, "C:/xampp/apache/logs/error.log");
    return $last_id;

}

function saveScore($userid,$score,$qNumber,$familiarity,$comment){
    global $connection;
    $dateNow=date("Y-m-d H:i:s");
    $query = "INSERT INTO `userscore`(`userid`, `qustn`, `score`, `date`,familiarity,comment) VALUES ($userid,$qNumber,$score,'$dateNow','$familiarity','$comment')";
//    error_log("Save Score \n" . $query, 3, "C:/xampp/apache/logs/error.log");
    $result = mysqli_query($connection, $query);
    confirm_query($result);
    $last_id = mysqli_insert_id($connection);
//    error_log("id saved \n" . $last_id, 3, "C:/xampp/apache/logs/error.log");
    return $last_id;
}


?>

