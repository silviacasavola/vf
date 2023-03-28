<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["surname"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = "info@villafenicia.com";
  $subject = "Richiesta di informazioni da $name $name";
  $body = "$message\n\n$name\n$email\nPhone: $phone";

  if (mail($to, $subject, $body)) {
    echo "Abbiamo ricevuto la tua richiesta, ti risponderemo il prima possibile.";
  } else {
    echo "C'è stato un errore nell'invio del tuo messaggio! Ti invitiamo a riprovare";
  }
}
?>
