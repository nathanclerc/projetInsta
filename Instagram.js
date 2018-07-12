$("#t_coment").hide();
$("#ok").hide();
$("#show").hide(); 
var likeCount = 0;
var clickCount = 0;
var like=0;
var count_c=0;
var coment=[];


var coment = JSON.parse(window.localStorage.getItem("comment"));
for (var i = 0; i < coment.length; i++) {
		$('#commentaires').append('<p>' + coment[i] + '</p>');
	}
//////////////////////////////:


$("#comment").click(function()
{   
	$("#t_coment").show();
	$("#comment").hide(); 
	$("#ok").show();
	

}); 
$("#ok").click( function(){

	var commentaire = $("#t_coment").val();
	var coment = JSON.parse(window.localStorage.getItem("comment"));
	if (coment == null) {
		var coment = [];
		alert('Premier commentaire');
	}
	coment.push(commentaire);
	var val = JSON.stringify(coment);
	window.localStorage.setItem("comment", val);
	                    //console.log(commentaire);
	                    $("#t_coment").hide();
	                    $("#ok").hide();
	                    $("#comment").show();
	$('#commentaires').empty();
	for (var i = 0; i < coment.length; i++) {
		$('#commentaires').append('<p>' + coment[i] + '</p>');
	}
});

////////////////////////////////////////////////////////////////////

$("#like_0_1").click(function()
{   

	if (clickCount == 1)
	{

		clickCount = 0;

		likeCount--;

	}else
	{
		clickCount++;

		likeCount++;
	}      
	$("#count_0_1").text(likeCount);


})
//////////////////////////////////////////////////////////////////////