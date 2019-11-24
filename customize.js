
$(document).ready(function(){
	$("input[value=yes]").click(function(){
		$("#calories>p[display!=none]").hide();
		$("#cal2").show();
	});
	$("input[value=no]").click(function(){
		$("#calories>p[display!=none]").hide();
		$("#cal3").show();

	});
	$("#peaY").click(function(){
		$("#pea").show();
		$(".ingre:contains('Peanut')").show();

	});
	$("#peaN").click(function(){
		$("#pea").hide();
		$(".ingre:contains('Peanut')").hide();
	});

	$("#onY").click(function(){
		$(".ingre:contains('Onion')").show();
	});
	$("#onN").click(function(){
		$(".ingre:contains('Onion')").hide();
	});
	
	$("#piY").click(function(){
		$(".ingre:contains('Pickle')").show();
	});
	$("#piN").click(function(){
		$(".ingre:contains('Pickle')").hide();
	});
	
	$("#jaY").click(function(){
		$(".ingre:contains('Jalapeno')").show();
	});
	$("#jaN").click(function(){
		$(".ingre:contains('Jalapeno')").hide();
	});
	$("#keY").click(function(){
		$(".ingre:contains('Ketchup')").show();
	});
	$("#keN").click(function(){
		$(".ingre:contains('Ketchup')").hide();
	});

});
