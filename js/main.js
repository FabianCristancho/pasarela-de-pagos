(function ($) {
	
	jQuery('nav#dropdown').meanmenu();
		
	
	$('#myTabs a').on('click',function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	$.scrollUp({
		animation: 'slide', // Fade, slide, none
		scrollSpeed: 1500,
		scrollText: [
		  "<i class='fa fa-chevron-up'></i>"
		]
	});
	
})(jQuery);