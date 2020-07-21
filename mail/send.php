<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';
header('Access-Control-Allow-Origin: *');
header('Content-type: text/html; charset=utf-8');

/////////////////////////////////////////////////////
$data = file_get_contents('php://input');
$data = json_decode($data, true);        

$lastname = trim($data['lastname']);
$name = trim($data['name']);
$contactinfo = trim($data['contactinfo']);

///////////////////////////////////////////////////////

// Настройки
$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'timabed'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'Derdan123'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('timabed@yandex.ru'); // Ваш Email
$mail->addAddress('vipyatnitsky@1cbit.ru'); // Email получателя
//$mail->addAddress('temir1201@mail.ru'); // Еще один email, если нужно.


// Прикрепление файлов
//  for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
//        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
//        $filename = $_FILES['userfile']['name'][$ct];
//        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
//            $mail->addAttachment($uploadfile, $filename);
//        } else {
//           $msg .= 'Failed to move file to ' . $uploadfile;
//       }
//    }   
                                 
// Письмо
$sitename = "1bit";
$pagetitle = "Новая заявка с сайта \"$sitename\"";


$mail->isHTML(true); 
$mail->CharSet = 'UTF-8';
$mail->Subject = $pagetitle; // Заголовок письма
$mail->Body    = "Фамилия: $lastname \r\nИмя: $name \r\nКонтакты: $contactinfo"; // Текст письма

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo '1';
}
?>
