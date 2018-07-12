//fonction de suppression
function suppr(){
	$('.close').click(function(){
		var ligne = $(this).closest("tr");
		var idTmp = ligne.find(".id").text();
		var coment = JSON.parse(window.localStorage.getItem("comment"));
		coment.splice(idTmp, 1);
		var val = JSON.stringify(coment);
		window.localStorage.setItem("comment", val);
		location.href="Instagram.html";
	});
}

$("#t_coment").hide();
$("#ok").hide();
$("#show").hide(); 
var likeCount = 0;
var clickCount = 0;
var like=0;
var count_c=0;
var coment=[];


var coment = JSON.parse(window.localStorage.getItem("comment"));
if (coment != null) {
	for (var i = 0; i < coment.length; i++) {
		$('#comment_table').append('<tr><td class="id">'+i+'</td><td>' + coment[i] + 
			'<a class="close " data-dismiss="alert" aria-label="close">&times;</a></td></tr>');
	}	
}
$('.id').hide();
suppr();
//////////////////////////////:


$("#comment").click(function()
{   
	$("#comment").hide(); 
	$("#t_coment").show();
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
	$("#t_coment").hide();
	$("#ok").hide();
	$("#comment").show();
	$('#comment_table').empty();
	for (var i = 0; i < coment.length; i++) {
		$('#comment_table').append('<tr><td class="id">'+i+'</td><td>' + coment[i] + 
			'<a class="close " data-dismiss="alert" aria-label="close">&times;</a></td></tr>');
	}
	$("#t_coment").val('');
	$('.id').hide();
	suppr();

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
