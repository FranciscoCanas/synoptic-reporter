/*
Attach toggle handlers to all .toggles in document.
Hide toggle target elements in the document.
*/
function initializeToggleables() {
	var toggleables = $(".toggles");
	$(toggleables).click(toggleElement);	
	
	$(toggleables).each(function(){
		var targets = $(this).attr('target');
		$.each(targets.split(' '), function( index, value ) {
  			$('#'.concat(value)).hide();
		});
	});
}

/*
This method will be attached to all elements
of class 'toggles'. These elements are required to
have a 'target' attribute set to the id of the
element that will be toggled.
*/
function toggleElement() {
	var toggleTargets = $(this).attr('target');
	$.each(toggleTargets.split(' '), function( index, value ) {
  		$('#'.concat(value)).toggle();	
	});
}