$(document).ready(function(){
	$("#BillOne").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
    $("#Bill1").show();
		$("*").find(".selected").removeClass("selected");
	});

  $("#BillTwo").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
    $("#Bill2").show();
		$("*").find(".selected").removeClass("selected");
	});

  $("#AllTogether").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
    $("#payAll").show();
		$("*").find(".selected").removeClass("selected");
	});


  var firstBill = new Array();
  var secondBill = new Array();
  var thirdBill = new Array();
  function createBills(){

    if(localStorage.getItem("Bill 1") !== null){
      var billnumone = localStorage.getItem("Bill 1");
      var str = billnumone.remove("$");
      var arr = str.split(" ");
      for(var i=0; i<arr.length()-4;i=i+2){
        for(var j=i+2; j<arr.length()-2;j=j+2){
          if(arr[i]===arr[j]){
            arr[i+1]=arr[i+1]*2;
            arr[j] = null;
            arr[j+1] = null;
          }
        }
      }
      firstBill = arr;
    }else{
      return console.log("Didn't order anything");
    }
    if(localStorage.getItem("Bill 2") !== null){
      var billnumtwo = localStorage.getItem("Bill 2");
      var str = billnumtwo.remove("$");
      var arr = str.split(" ");
      for(var i=0; i<arr.length()-4;i=i+2){
        for(var j=i+2; j<arr.length()-2;j=j+2){
          if(arr[i]===arr[j]){
            arr[i+1]=arr[i+1]*2;
            arr[j] = null;
            arr[j+1] = null;
          }
        }
      }
      secondBill = arr;
    }else{
      return console.log("Bill 2 and 3 didn't order anything");
    }

    if(localStorage.getItem("Bill 3") !== null){
      var billnumthree = localStorage.getItem("Bill 3");
      var str = billnumthree.remove("$");
      var arr = str.split(" ");
      for(var i=0; i<arr.length()-4;i=i+2){
        for(var j=i+2; j<arr.length()-2;j=j+2){
          if(arr[i]===arr[j]){
            arr[i+1]=arr[i+1]*2;
            arr[j] = null;
            arr[j+1] = null;
          }
        }
      }
      thirdBill = arr;
    }
    else{
      return console.log(" Bill 3 didn't order anything");
    }
  }

  function displayBills(){
    if(firstBill !== null){
      for(var i=0; i<firstBill.length()-2;i++){
        if(firstBill[i]!== null){
          console.log(firstBill[i]+" "+firstBill[i+1]);
        }
      }
    }
    if(secondBill !== null && firstBill !== null){
      for(var i=0; i<firstBill.length()-2;i++){
        if(secondBill[i]!== null){
          console.log(secondBill[i]+" "+secondBill[i+1]);
        }
      }
    }
    if(thirdBill !== null && secondBill !== null && firstBill !== null){
      for(var i=0; i<firstBill.length()-2;i++){
        if(thirdBill[i]!== null){
          console.log(thirdBill[i]+" "+thirdBill[i+1]);
        }
      }
    }
  }


  createBills();
  alert(displayBills());






});
