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

$("#portfolio-button").hover(function(e){
	$('#portfolio-button') .css ('color', " #B0BEC5" )
});
$("#resume-button").hover(function(e){
	$('#resume-button') .css ('color', " #B0BEC5" )
});
$("#about-button").hover(function(e){
	$('#about-button') .css ('color', " #B0BEC5" )
});
$("#contact-button").hover(function(e){
	$('#contact-button') .css ('color', " #B0BEC5" )
});
$("#contact-button").mouseleave(function(e){
	$('#contact-button') .css ('color', " white" )
});
$("#about-button").mouseleave(function(e){
	$('#about-button') .css ('color', " white" )
});
$("#resume-button").mouseleave(function(e){
	$('#resume-button') .css ('color', " white" )
});
$("#portfolio-button").mouseleave(function(e){
	$('#portfolio-button') .css ('color', " white" )
});
});