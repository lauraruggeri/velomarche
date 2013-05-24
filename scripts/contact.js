var $ = jQuery.noConflict(); 
var formSubmitted = 'false';

jQuery(document).ready(function($) {	

	$('#formSuccessMessageWrap').hide(0);
	$('.formValidationError').fadeOut(0);
	
	// fields focus function starts
	$('input[type="text"], input[type="password"], textarea').focus(function(){
		if($(this).val() == $(this).attr('data-dummy')){
			$(this).val('');
		};	
	});
	// fields focus function ends
		
	// fields blur function starts
	$('input, textarea').blur(function(){
    	if($(this).val() == ''){		    
			$(this).val($(this).attr('data-dummy'));				
		};			
	});
	// fields blur function ends
		
	// submit form data starts	   
    function submitData(currentForm, formType){     
		formSubmitted = 'true';		
<<<<<<< HEAD:scripts/contact.js
		var formInput = $('#' + currentForm).serialize();
		
		var mail =$('#contactEmailField').val();
		var name =$('#contactNameField').val();
		var subject ='velomarche app - richiesta informazioni';
		var messaggio =$('#contactMessageTextarea').val();
		var destinatario='mac@station.it';
	
		  $.ajax({ url: "http://home.station.it/serviziomail/sendmail.asmx/SendMailLC",
				data: {
					MittenteIndirizzo: JSON.stringify(mail),
					MittenteNome: JSON.stringify(name),
					Oggetto: JSON.stringify(subject),
					Corpo: JSON.stringify(messaggio),
					Destinatario: JSON.stringify(destinatario)
				},
				dataType: "jsonp",
				success: function (data) {
					$('#' + currentForm).hide();
					$('#formSuccessMessageWrap').fadeIn(500);		
				},
				error: function (request, status, error) {
					$('#sendmailError').addClass('fieldHasError');
					$('#sendmailError').fadeIn(300);
				}
			});
		/*	
=======
		var formInput = $('#' + currentForm).serialize();		
>>>>>>> mod 1:assets/www/scripts/contact.js
		$.post($('#' + currentForm).attr('action'),formInput, function(data){			
			$('#' + currentForm).hide();
			$('#formSuccessMessageWrap').fadeIn(500);			
		});
<<<<<<< HEAD:scripts/contact.js
		*/
=======
>>>>>>> mod 1:assets/www/scripts/contact.js

	};
	// submit form data function starts	
	// validate form function starts
	function validateForm(currentForm, formType){		
		// hide any error messages starts
	    $('.formValidationError').hide();
		$('.fieldHasError').removeClass('fieldHasError');
	    // hide any error messages ends	
		$('#' + currentForm + ' .requiredField').each(function(i){		   	 
			if($(this).val() == '' || $(this).val() == $(this).attr('data-dummy')){				
				$(this).val($(this).attr('data-dummy'));	
				$(this).focus();
				$(this).addClass('fieldHasError');
				$('#' + $(this).attr('id') + 'Error').fadeIn(300);
				return false;					   
			};			
			if($(this).hasClass('requiredEmailField')){				  
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				var tempField = '#' + $(this).attr('id');				
				if(!emailReg.test($(tempField).val())) {
					$(tempField).focus();
					$(tempField).addClass('fieldHasError');
					$(tempField + 'Error2').fadeIn(300);
					return false;
				};			
			};			
			if(formSubmitted == 'false' && i == $('#' + currentForm + ' .requiredField').length - 1){
			 	submitData(currentForm, formType);
			};			  
   		});		
	};
	// validate form function ends	
	
	// contact button function starts
<<<<<<< HEAD:scripts/contact.js
	$('#contactSubmitButton').click(function() {	
		validateForm($(this).attr('data-formId'));	
	    return false;		
	});
	// contact button function ends
	
	
=======
	/*$('#contactSubmitButton').click(function() {	
		validateForm($(this).attr('data-formId'));	
	    return false;		
	});*/
	// contact button function ends
	
	$('#contactSubmitButton').click(function() {	
		alert("click");
	    return false;		
	});
>>>>>>> mod 1:assets/www/scripts/contact.js
	
	
	
});
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////// Document Ready Function Ends                                                                       */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
