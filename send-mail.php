<?php
if($_POST)
    {
    $to = "alsebak@gmail.com, gs-822a@yandex.ru";//""; //куда отправлять письмо
    $from = 'bakinskii.com'; // от кого
    $subject = "Обратная связь";
    
    $message = 'Имя: '.$_POST['name'].';<br>E-mail: '.$_POST['email'].';<br>Категория: '.$_POST['category'].';<br>Сообщение: '.$_POST['message'].';';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <info@sundayrussiaschool.com>\r\n";
    $result = mail($to, $subject, $message, $headers);
    if ($result){
        echo "Спасибо за обращение. <br> В ближайшее время мы с вами свяжемся.";
    }
    else {
        echo "Произошла ошибка. Пожалуйста, проверьте свои данные и попробуйте еще раз";
    }    
    }
?>
