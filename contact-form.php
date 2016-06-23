<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['inputName']) && isset($_POST['inputEmail'])  && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail'])  || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPDebug = 1;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";// Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->Port = 465;
    $mail->Username = 'gabriel.escobar@airmatek.com';                 // SMTP username
    $mail->Password = 'gruntykite17';                           // SMTP password
    $mail->SetFrom = $_POST['inputEmail'];
    $mail->FromName = $_POST['inputName'];
    $mail->AddAddress('info@airmatek.com',"Info"); //recipient
    $mail->Subject = "Mensaje Formulario de Contacto Pagina Digitall";
    $mail->Body = "email: " . $_POST['inputEmail'] . "\r\n\r\nName: " . $_POST['inputName'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);



    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'El mensaje no pudo ser enviado. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }
    $data = array('success' => true, 'message' => 'Gracias! Hemos recibido tu mensaje.');
    echo json_encode($data);

} else {
    $data = array('success' => false, 'message' => 'Por favor complete el formulario.');
    echo json_encode($data);

}