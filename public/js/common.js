$(document).ready(function())
{
	$(".btn-conteiner-for-regist").magnificPopup();
};

$("#form").submit(function()){
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		alert("Спасибо за отправку!");
		setTimeout(function() {
			$.magnificPopup.close();
		}, 1000);
		});
return false;
	};