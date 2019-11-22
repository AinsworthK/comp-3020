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


	function appendStorage(key,data){
		var old = localStorage.getItem(key);
		if(old === null){
			old = "";
		}
		localStorage.setItem(key,old+data);
	}



	// clicking add when 1 bill
	if(localStorage.getItem("num") ==1){
		$("#add").click(function(){
			if($("*").hasClass("selected")){
				orderStack = document.getElementById("order");
				var billnum = document.createElement("p");
				var node = document.createElement("div");
				var btn = document.createElement("button");
				btn.innerHTML = "X";
				btn.className += "cancel";
				node.innerHTML = $(".selected").html();
				billnum.innerHTML = "Bill 1";
				billnum.className += "billnum";
				billnum.style.display = "none";
				node.append(billnum);
				node.append(btn);
				orderStack.prepend(node);
			}
			else{
				alert("Please select an item to add to order.  \nYou may select item in the menu by clicking them.");
			}
		});
	}
	else{
		$("#add").css("display","none");
		$(".dropdown").css("display","inline");	
		if(localStorage.getItem("num") == 2){
			$(".dropdown-content > a").last().css("display","none");
		}

	}
	$(".dropdown-content > a").click(function(){
			if($("*").hasClass("selected")){
				orderStack = document.getElementById("order");
				var billnum = document.createElement("p");
				var node = document.createElement("div");
				var btn = document.createElement("button");
				btn.innerHTML = "X";
				btn.className += "cancel";
				node.innerHTML = $(".selected").html();
				billnum.innerHTML = this.innerHTML;
				billnum.className += "billnum";
				billnum.style.display = "none";
				node.append(billnum);
				node.append(btn);
				orderStack.prepend(node);
			}
			else{
				alert("Please select an item to add to order.  \nYou may select item in the menu by clicking them.");
			}
	});

	$("#next").click(function(){
		$("#order").children().each(function(){
			var foodString = $(this).children(".foodS").html();
			var billNum = $(this).children(".billnum").html();
			appendStorage(billNum,foodString);
		});
		alert("Bill 1: "+localStorage.getItem("Bill 1"));
		alert("Bill 3: "+localStorage.getItem("Bill 2"));
		alert("Bill 3: "+localStorage.getItem("Bill 3"));

	});





	$("body").on("click",".cancel", function(){
		$(this).parent().remove();
	});

});
