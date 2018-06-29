
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
    toMailChimp($useremail);
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

//Posting email to list
function toMailChimp($email){
    // MailChimp API credentials
    $apiKey = '6b636dff5ebcda12dcd7be442f4ab2af-us18';
    $listID = 'e31464d2e2';

    // MailChimp API URL
    $memberID = md5(strtolower($email));
    $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
    $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listID . '/members/' . $memberID;

    // member information
    $json = json_encode([
        'email_address' => $email,
        'status'        => 'subscribed'
    ]);

    // send a HTTP POST request with curl
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // store the status message based on response code
    if ($httpCode == 200) {
        $msg = 'You have successfully subscribed to CodexWorld';
    } else {
        switch ($httpCode) {
            case 214:
                $msg = 'You are already subscribed.';
                break;
            default:
                $msg = 'Some problem occurred, please try again.';
                break;
        }

    }
//    error_log("mail chimp  \n" . $msg, 3, "C:/xampp/apache/logs/error.log");


}

?>



