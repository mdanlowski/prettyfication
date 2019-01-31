//--------prettyfication-setup--------
// @TODO each alert div to be created dynamically by the script - for development the element exists in HTML
// @TODO if more than 1 alert comes at a time they should stack - margin set in js
var pAlertBody;

$(function(){

	pAlertBody =  $('.prettyfication');

	pAlertBody.click(function(){
		$(this).removeClass('ptfn-show').addClass('ptfn-hidden');//.fadeIn();
	});

});


// pAlert is a Pretty Alert - prettyfication main feature
function pAlert(message, alertType) {
	pAlertBody.removeClass().addClass('prettyfication ptfn-hidden');
	pAlertBody.text(message);
	pAlertBody.addClass('ptfn-show').addClass(alertType);//.fadeOut();

	setTimeout(function() {
		pAlertBody.removeClass('ptfn-show').addClass('prettyfication ptfn-hidden');
	}, 3000);
}
//--------prettyfication-setup--------