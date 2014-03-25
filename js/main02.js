 $(document).on('pageinit', function() {
$('#send').click(function() {
				var url = 'http://sitomobile.altervista.org/server/account/espina/send02.php';
				var error = 0;
				var $contactpage = $(this).closest('.ui-page');
				var $contactform = $(this).closest('.contact-form02');
				$('.required', $contactform).each(function(i) {
					if($(this).val() === '') {
						error++;
					}
				});
				// each
				if(error > 0) {
					alert('Inserisci tutti i campi obbligatori segnati con asterisco*.');
				} else {
					var email = $contactform.find('input[name="email"]').val();	
					var datetime = $contactform.find('input[name="datetime"]').val();	
					var mobilephone = $contactform.find('input[name="mobilephone"]').val();	
					var selectnative4 = $contactform.find('select[name="selectnative4"]').val();
					var message = $contactform.find('textarea[name="message"]').val();
				
							
					//submit the form
					$.ajax({
						type : "GET",
						url : url,
						data : {
							email : email,
							datetime : datetime,
							mobilephone : mobilephone,
							selectnative4 : selectnative4,
							message : message
						},

					});
					//$.ajax
							$contactpage.find('.contact-thankyou02').show();
							$contactpage.find('.contact-form02').hide();
				}
				return false;
			});


 });
 