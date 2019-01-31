//--------prettyfication-setup--------
// @TODO each alert div to be created dynamically by the script - for development the element exists in HTML
// @TODO if more than 1 alert comes at a time they should stack - margin set in js
var pAlertBody = "<div class='prettyfication ptfn-hidden'></div>";
var pAlertCount = 0;

$(function(){

	// pAlertBody =  $('.prettyfication');

	// pAlertBody.click(function(){
	// 	$(this).removeClass('ptfn-show').addClass('ptfn-hidden');//.fadeIn();
	// });


});


// pAlert is a Pretty Alert - prettyfication main feature
var pAlert = function(message, alertType) {
	if(pAlertCount < 0) pAlertCount = 0;

	$('#prettyfication-box').append(pAlertBody);
	var pAlertInstance = $('#prettyfication-box div:last-child');
	// console.log(pAlertInstance);

	var instanceOffset = (40+pAlertCount*80).toString() + 'px';
	pAlertInstance[0].style.marginTop = instanceOffset;

	pAlertCount++;

	pAlertInstance.removeClass().addClass('prettyfication ptfn-hidden');
	pAlertInstance.text(message);
	pAlertInstance.removeClass('ptfn-hidden').addClass('ptfn-show').addClass(alertType);//.fadeOut();

	pAlertInstance.click(function(){
		console.log($(this));
		// console.log($(this)[0]);

		$(this).removeClass('ptfn-show').addClass('ptfn-hidden');//.fadeIn();

		var this_ = $(this)[0];

		setTimeout(function() {
			// console.log(this_.style.marginTop);
			$('.prettyfication').each(function(i,e){ $(this).css("margin-top", parseInt($(this)[0].style.marginTop)-80) });
		}, 500);

		removeInstance($(this));
	});

	setTimeout(function() {
		pAlertInstance.removeClass('ptfn-show').addClass('ptfn-hidden');
		removeInstance($(this));

	}, 4000);


	function removeInstance(obj){
		if(obj){
			setTimeout(function(){
				obj.removeClass('ptfn-show').addClass('ptfn-hidden');
				
				pAlertCount--;
				obj.remove();

			}, 0);
			console.log(pAlertCount);
		}
	}

	console.log(pAlertCount);
}
//--------prettyfication-setup--------