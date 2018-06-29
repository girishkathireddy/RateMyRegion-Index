
<?php
include("../includes/functions.php");
?>
<?php


$obj = $_POST['myData'];

if($obj["mode"]=="saveemail"){
    $userid=$obj["userid"];
    $useremail=$obj["useremail"];
   $returnValue =saveEmail($userid,$useremail);
//    error_log("id  \n" . $returnValue, 3, "C:/xampp/apache/logs/error.log");
    $arr = array('saved' => $returnValue);
    echo json_encode($arr);

}

if($obj["mode"]=="saveScore"){
    $userid=$obj["userid"];
    $score=$obj["score"];
    $qNumber=$obj["q-number"];
    $familiarity=$obj['familiarity'];
    $comment=$obj['comment'];
//    error_log("Function calling  \n", 3, "C:/xampp/apache/logs/error.log");
    $returnValue =saveScore($userid,$score,$qNumber,$familiarity,$comment);
//    error_log("id  \n" . $returnValue, 3, "C:/xampp/apache/logs/error.log");
    $arr = array('saved' => $returnValue);
    echo json_encode($arr);

}


?>



