$(document).ready(function() { 
	$(".list-services .tooltips, ul.menu .tooltips").easyTooltip();
}); 

$(window).load(function() {
	$('#bgSlider').bgSlider({
		duration:1000,
		pagination:'.pagination',
		preload:true,
		slideshow:30000,
		spinner:'.bg_spinner'
	});

	$('.blog_news').load('partial/news_blog.html');
	$('.staff_icons').load('partial/staff.html');

});