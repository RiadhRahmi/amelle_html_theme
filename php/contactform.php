<?php

$EmailTo = "codimth.dev@gmail.com";
$Subject = "New Message from Amelle Template";

$name = Trim(stripslashes($_POST['name']));
$email = Trim(stripslashes($_POST['email']));
$message = Trim(stripslashes($_POST['message']));
$EmailFrom = $email;


// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
// php function mail($to,$subject,$txt,$headers);
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=success.php\">";
}else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.php\">";
}
?>
