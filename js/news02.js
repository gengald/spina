		$(document).click(function(){
	var news02 = $('#news02');
	
	$.ajax({
		url: 'http://sitomobile.altervista.org/server/account/espina/news.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = 
				'<li><u> News del '+item.data_post+'</u></li>'			
				+'<a href="prenota.html"  data-rel="dialog" data-transition="slidedown" data-role="button" data-icon="edit"><h1>'+item.titolo_post+'</h1></a>'				
				+'<p><strong>'+item.testo_post+'</strong></p>'
				+'</br>';
				
				news01.append(landmark);
			});
		},
		error: function(){
			news02.html ('<h3>Connessione assente.</h3>');
		}
	});
});