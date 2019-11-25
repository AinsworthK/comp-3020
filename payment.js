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
  $("#BillThree").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
    $("#Bill3").show();
		$("*").find(".selected").removeClass("selected");
	});

  $("#AllTogether").click(function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
		$(".menu[display!='none']").hide();
    $("#payAll").show();
		$("*").find(".selected").removeClass("selected");
	});


  var firstBill =  [];
  var secondBill = [];
  var thirdBill =  [];
var data = ["Hamburger","10",
	"Pizza","15",	
	"Pasta","10",	
	"Hotdog","15",	
	"Steak","10",	
	"Chicken","15",	
	"Rice","10",	
	"Noodles","15",	
	"Taco","10",	
	"Borrito","15",	
	"Raw_meat","100",	
	"Salad","15",	
	"Ham_and_cheese","100",	
	"Scallop","15",	
	"Tomato_soup","1000",	
	"Pumpkin_soup","15",	
	"Caramel_cake","100",	
	"Donut","15",	
	"Pepsi","1000000",	
	"Coke","15",	
];

  function createBills(){

    if(localStorage.getItem("Bill 1") !== null){
      var billnumone = localStorage.getItem("Bill 1");
	    console.log(billnumone);
      var str = billnumone.replace(/\$/g,'');
      var arr = str.split(" ");
	var current = [];
	    for(var i=0; i<arr.length-1;i++){
		    if(arr[i] != null){
			    current[i] = arr[i];
		    }
	    }
	    arr = current;
      for(var i=0; i<=arr.length-4;i=i+2){
        for(var j=i+2; j<=arr.length-2;j=j+2){
          if(arr[i]===arr[j]){
            arr[i+1]=parseInt(arr[j+1])+parseInt(arr[i+1]);
            arr[j] = null;
            arr[j+1] = null;
          }
        }
      }
      firstBill = arr;
	    console.log(firstBill);
    }else{
      console.log("Didn't order anything");
    }
    if(localStorage.getItem("Bill 2") !== null){
      var billnumtwo = localStorage.getItem("Bill 2");
      var str = billnumtwo.replace(/\$/g,'');
      var arr = str.split(" ");
	var current = [];
	    for(var i=0; i<arr.length-1;i++){
		    if(arr[i] != null){
			    current[i] = arr[i];
		    }
	    }
	    arr = current;
      for(var i=0; i<=arr.length-4;i=i+2){
        for(var j=i+2; j<=arr.length-2;j=j+2){
          if(arr[i]===arr[j]){
            arr[i+1]=parseInt(arr[j+1])+parseInt(arr[i+1]);
            arr[j] = null;
            arr[j+1] = null;
          }
        }
      }
      secondBill = arr;
	    console.log(secondBill);
    }else{
      console.log("Bill 2 didn't order anything");
    }
  

    if(localStorage.getItem("Bill 3") !== null){
      var billnumthree = localStorage.getItem("Bill 3");
      var str = billnumthree.replace(/\$/g,'');
      var arr = str.split(" ");
	var current = [];
	    for(var i=0; i<arr.length-1;i++){
		    if(arr[i] != null){
			    current[i] = arr[i];
		    }
	    }
	    arr = current;
      for(var i=0; i<=arr.length-4;i=i+2){
        for(var j=i+2; j<=arr.length-2;j=j+2){
          if(arr[i]===arr[j]){
            arr[i+1]=parseInt(arr[j+1])+parseInt(arr[i+1]);
            arr[j] = null;
            arr[j+1] = null;
          }
        }
      }
      thirdBill = arr;
    }
    else{
      console.log(" Bill 3 didn't order anything");
    }
  }

  function displayBill1(){
	  var result = "";
    if(firstBill !== null){
      for(var i=0; i<=firstBill.length-2;i+=2){
        if(firstBill[i]!= null){
           result += firstBill[i]+"\t\t\t"+firstBill[i+1]+"\t\t\t"+parseInt(firstBill[i+1])/parseInt(data[data.indexOf(firstBill[i])+1])+"\n";
        }

      }
    }
	  return result;
  }
function displayBill2(){
	  var result = "";
    if(secondBill !== null){
      for(var i=0; i<=secondBill.length-2;i+=2){
        if(secondBill[i]!= null){
           result += secondBill[i]+"\t\t\t"+secondBill[i+1]+"\t\t\t"+parseInt(secondBill[i+1])/parseInt(data[data.indexOf(secondBill[i])+1])+"\n";
        }
      }
    }
	  return result;
}
function displayBill3(){
	  var result = "";
    if(thirdBill !== null){
      for(var i=0; i<=thirdBill.length-2;i+=2){
        if(thirdBill[i]!= null){
           result += thirdBill[i]+"\t\t\t"+thirdBill[i+1]+"\t\t\t"+parseInt(thirdBill[i+1])/parseInt(data[data.indexOf(thirdBill[i])+1])+"\n";
        }
      }
    }
	  return result;
  }

function totalBill1(){
	var result =0;
      for(var i=0; i<=firstBill.length-2;i+=2){
	      if(firstBill[i]!= null){
		     result += parseInt(firstBill[i+1]) ;
	      }
      }
	return result;
}

function totalBill2(){
	var result =0;
      for(var i=0; i<=secondBill.length-2;i+=2){
	      if(secondBill[i]!= null){
		     result += parseInt(secondBill[i+1]) ;
	      }
      }
	return result;
}

function totalBill3(){
	var result =0;
      for(var i=0; i<=thirdBill.length-2;i+=2){
	      if(thirdBill[i]!= null){
		     result += parseInt(thirdBill[i+1]) ;
	      }
      }
	return result;
}
createBills();


/// bill 1
var bill = document.createElement("pre");
bill.innerHTML = displayBill1();
var total = document.createElement("pre");
total.innerHTML = "Total:"+"\t\t\t"+totalBill1();
var gst = document.createElement("pre");
var gstNum = totalBill1()*0.7;
gst.innerHTML = "GST:"+"\t\t\t"+gstNum;
var pst = document.createElement("pre");
var pstNum = totalBill1()*0.8;
pst.innerHTML = "PST:"+"\t\t\t"+pstNum;
var taxT = document.createElement("pre");
var taxTNum = totalBill1()+gstNum+pstNum;
taxT.innerHTML = "Total after tax:"+"\t"+taxTNum;
$("#Bill1").append(bill);
$("#Bill1").append(total);
$("#Bill1").append(gst);
$("#Bill1").append(pst);
$("#Bill1").append(taxT);



var bill = document.createElement("pre");
bill.innerHTML = displayBill2();
var total = document.createElement("pre");
total.innerHTML = "Total:"+"\t\t\t"+totalBill2();
var gst = document.createElement("pre");
var gstNum = totalBill2()*0.7;
gst.innerHTML = "GST:"+"\t\t\t"+gstNum;
var pst = document.createElement("pre");
var pstNum = totalBill2()*0.8;
pst.innerHTML = "PST:"+"\t\t\t"+pstNum;
var taxT = document.createElement("pre");
var taxTNum = totalBill2()+gstNum+pstNum;
taxT.innerHTML = "Total after tax:"+"\t"+taxTNum;
$("#Bill2").append(bill);
$("#Bill2").append(total);
$("#Bill2").append(gst);
$("#Bill2").append(pst);
$("#Bill2").append(taxT);

var bill = document.createElement("pre");
bill.innerHTML = displayBill3();
var total = document.createElement("pre");
total.innerHTML = "Total:"+"\t\t\t"+totalBill3();
var gst = document.createElement("pre");
var gstNum = totalBill3()*0.7;
gst.innerHTML = "GST:"+"\t\t\t"+gstNum;
var pst = document.createElement("pre");
var pstNum = totalBill3()*0.8;
pst.innerHTML = "PST:"+"\t\t\t"+pstNum;
var taxT = document.createElement("pre");
var taxTNum = totalBill3()+gstNum+pstNum;
taxT.innerHTML = "Total after tax:"+"\t"+taxTNum;
$("#Bill3").append(bill);
$("#Bill3").append(total);
$("#Bill3").append(gst);
$("#Bill3").append(pst);
$("#Bill3").append(taxT);

function payAll(){
	
var bill = document.createElement("pre");
bill.innerHTML = displayBill1();
$("#payAll").append(bill);
var bill = document.createElement("pre");
bill.innerHTML = displayBill2();
$("#payAll").append(bill);
var bill = document.createElement("pre");
bill.innerHTML = displayBill3();
$("#payAll").append(bill);
var total = document.createElement("pre");
var adding = totalBill1()+totalBill2()+totalBill3();
total.innerHTML = "Total:"+"\t\t\t"+adding;
$("#payAll").append(total);
var gst = document.createElement("pre");
var gstNum = adding*0.7;
gst.innerHTML = "GST:"+"\t\t\t"+gstNum;
var pst = document.createElement("pre");
var pstNum = adding*0.8;
pst.innerHTML = "PST:"+"\t\t\t"+pstNum;
var taxT = document.createElement("pre");
var taxTNum = adding+gstNum+pstNum;
taxT.innerHTML = "Total after tax:"+"\t"+taxTNum;

$("#payAll").append(gst);
$("#payAll").append(pst);
$("#payAll").append(taxT);

}
payAll();

$("#assist").click(function(){
	alert("Help is on the way.");	 
});
$("#payHere").click(function(){
	alert("Use your card to finish tap here.");	 
});
$("#payFront").click(function(){
	alert("Your bill is sent to the front desk.");	 
});

});
