jQuery(document).ready(function($) {

	$('.category').hover(function() {
		$(this).children('.category_cover').css('z-index','5');
	}, function() {
		$(this).children('.category_cover').css('z-index','1');
	});

	// Popup
	$(".openfeed").magnificPopup({
		type: "inline",
		midClick: true,
		closeBtnInside: true,
		alignTop: false
	});

	// Validation
	$.validator.addMethod("emailfull", function(value, element) {
		return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
	}, "Please enter valid email address!");

	$.validator.addMethod('nofreeemail', function (value) {
		return /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!outlook\.com)([\w-]+.)+[\w-]{2,4})?$/.test(value); 
	}, 'Please key in company email address only');

	$('#eForm').validate({
		rules: {
			email: {
				required: true,
				email: true,
				emailfull: true,
				nofreeemail: true
			},
			emailrefer1: {
				email: true,
				emailfull: true,
				nofreeemail: true
			},
			emailrefer2: {
				email: true,
				emailfull: true,
				nofreeemail: true
			},
			contact: {
				required: true,
				digits: true,
				minlength: 8
			}
		}
	});

	// Checkbox
	$('#eForm').submit(function() {
		if($('#checkbox1 input:checked').length < 1){
			$('#checkboxalert1').show()
			$('#checkboxalert1').html("Please select at least 1 answer");
			
			return false;
		}else{
			$('#checkboxalert1').hide();
		}

		if($('#checkbox2 input:checked').length < 1){
			$('#checkboxalert2').show()
			$('#checkboxalert2').html("Please select at least 1 answer");
			
			return false;
		}else{
			$('#checkboxalert2').hide();
		}
	});

	// datetime
	$('#datetimepicker').datetimepicker({
		onGenerate:function( ct ){
	    $(this).find('.xdsoft_date.xdsoft_weekend')
	      .addClass('xdsoft_disabled');
	  },
		allowTimes:[
			'10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
		]
	});
});