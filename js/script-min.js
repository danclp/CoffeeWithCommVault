jQuery(document).ready((function(F){F(".category").hover((function(){F(this).children(".category_cover").css("z-index","5")}),(function(){F(this).children(".category_cover").css("z-index","1")})),F(".openfeed").magnificPopup({type:"inline",midClick:!0,closeBtnInside:!0,alignTop:!1}),F.validator.addMethod("emailfull",(function(F,u){return this.optional(u)||/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(F)}),"Please enter valid email address!"),F.validator.addMethod("nofreeemail",(function(F){return/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!outlook\.com)([\w-]+.)+[\w-]{2,4})?$/.test(F)}),"Please key in company email address only"),F("#eForm").validate({rules:{email:{required:!0,email:!0,emailfull:!0,nofreeemail:!0},contact:{required:!0,digits:!0,minlength:8}}}),F("#eForm").submit((function(){if(F("#checkbox input:checked").length<1)return F("#checkboxalert").show(),F("#checkboxalert").html("Please select at least 1 answer"),!1;F("#checkboxalert").hide()}))}));