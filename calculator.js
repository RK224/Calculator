var num_str ="";
var displayString = "" ;
var result = null ;	//previous result
var operator = "" ;	//previous operator
var equalToBefore = false ;
$(".num").click(function () {
	num_str+=$(this).val();
	displayString += $(this).val();
	$("#screen").html(displayString);
	if(equalToBefore){
		result = null ;	
	}
}
);

$(".operator").click(function () {
	displayString += $(this).val();
	$("#screen").html(displayString);
	if(result== null)
	{
		result = Number.parseFloat(num_str);
	}
	else if(num_str!=null)
	{
	if (operator) {
		if (operator==="+"){
			result+=Number.parseFloat(num_str);
		}else if (operator === "-") {
			result-=Number.parseFloat(num_str);
		}else if(operator==="*"){
			result*=Number.parseFloat(num_str);		
		}else if(operator === "/"){
			result/=Number.parseFloat(num_str);		
		}
	}
	}
	num_str="";
	operator = $(this).val();
	if(equalToBefore){
		equalToBefore = false ;	
	}
	});
	
$("#equalTo").click(function () {
	$("#screen").html(result);
	displayString = result  ;
	operator="";
	equalToBefore = true ;
	});
$("#clear").click(function () {
		displayString = "" ;
	$("#screen").html(displayString);
	result = null ;
	num_str = "" ;
	});	
