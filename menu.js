$(document).ready(function(){
	$("#main").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
		$("#main-menu").show();
		$("*").find(".selected").removeClass("selected");
	});
	$("#appetizer").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
		$("#appetizer-menu").show();
		$("*").find(".selected").removeClass("selected");
	});
	$("#soup").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
		$("#soup-menu").show();
		$("*").find(".selected").removeClass("selected");
	});
	$("#dessert").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
		$("#dessert-menu").show();
		$("*").find(".selected").removeClass("selected");
	});
	$("#drinks").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
		$("#drinks-menu").show();
		$("*").find(".selected").removeClass("selected");
	});
	// clicking picture to select food
	$(".row>div").click(function(){
		if($(".row > div").hasClass("selected")){
		$(".row >div").removeClass("selected");
		}
		$(this).addClass("selected");
	});
	$("#add").click(function(){
		if($("*").hasClass("selected")){
		orderStack = document.getElementById("order");
		var node = document.createElement("div");
		var btn = document.createElement("button");
		btn.innerHTML = "X";
		btn.className += "cancel";
		node.innerHTML = $(".selected").html();
		node.append(btn);
		orderStack.prepend(node);
		}
		else{
			alert("Please select an item to add to order.  \nYou may select item in the menu by clicking them.");
		}
	});

	$("body").on("click",".cancel", function(){
		$(this).parent().remove();
	});

});
