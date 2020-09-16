$( document ).ready(function() {
    $("#ajax_form").submit(function(e){
		    e.preventDefault();
		    /*$('#payemail').val($('#demo-email').val());
		    $('#payfio').val($('#demo-name').val());
		    $('#paytel').val($('#demo-phone').val());*/
			sendAjaxForm('result_form', 'ajax_form', 'send-mail.php');
			/*$('#payform').submit();*/
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
 	//$(':input','#ajax_form','#demo-copy')
 //.not(':button, :submit, :reset, :hidden')
 //.val('')
// .removeAttr("checked")
// .removeAttr("selected");
 $('#ajax_form')[0].reset();


setTimeout(function() {$('#result_form').html('');}, 5000);
}