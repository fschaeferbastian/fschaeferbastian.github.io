$(document).ready(function(){

	$("#portfolio-button").click(function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $("#slide2").offset().top}, 300);
	});

	$("#about-button").click(function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $("#slide3").offset().top -59}, 300);

	});

$("#bigname").fadeIn(1000);

$("ul.image li").hover
});