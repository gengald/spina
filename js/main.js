 $(document).on('pageinit', function() {
$('#send').click(function() {
				var url = 'http://sitomobile.altervista.org/server/account/espina/send01.php';
				var error = 0;
				var $contactpage = $(this).closest('.ui-page');
				var $contactform = $(this).closest('.contact-form');
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
					var mobilephone = $contactform.find('input[name="mobilephone"]').val();								
					var message = $contactform.find('textarea[name="message"]').val();
				
							
					//submit the form
					$.ajax({
						type : "GET",
						url : url,
						data : {
							email : email,
							mobilephone : mobilephone,
							message : message
						},

					});
					//$.ajax
							$contactpage.find('.contact-thankyou').show();
							$contactpage.find('.contact-form').hide();
				}
				return false;
			});


 });
 