// Run after document loads.
$( document ).ready(function() {
	console.log("Doc Ready.");
	/*
	* Center all input fields when user focuses on them.
	*/
	$(':input').focus(function(){
		var center = $(window).height()/2;
		var top = $(this).offset().top ;
		if (top > center){
			$(window).scrollTop(top - center);
		}
	});
});