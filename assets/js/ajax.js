$( document ).ready(function() {
    $("#ajax_form").submit(function(e){
		    e.preventDefault();
			sendAjaxForm('result_form', 'ajax_form', 'send-mail.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     'send-mail.php', //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	//result = $.parseJSON(response);
        	$('#result_form').html(response);//'Имя: '+result.name+'<br>Телефон: '+result.phone);
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html(response);//'Ошибка. Данные не отправлены.');
    	}
 	});
 $('#ajax_form')[0].reset();
setTimeout(function() {$('#result_form').html('');}, 5000);
}