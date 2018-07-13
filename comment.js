$("#t_coment").hide();
$("#ok").hide(); 
$("#comment_div").hide(); 
var likeCount = 0;
var clickCount = 0;
var like=0;
var count_c=0;
//////////////////////////////:
$("#comment").click(function()
{   
	$("#t_coment").show();
	$("#comment").hide(); 
	$("#ok").show();	
}); 
$("#ok").click( function()
{
	ok();
});
// ////////////////////////////////////////////////////////////////////
$("#like_0_1").click(function()
{   
    like_0_1();
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#show").click(function()
{  
     show();
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function show() 
 {
 		$('#co').empty(); 
	var coment = JSON.parse(window.localStorage.getItem("comment"));
		if (coment!=null)
		    	 {
					for (var i = 0; i < coment.length; i++) 
					    {
					       $('#co').append('<div id="'+i+'" class="alert alert-danger alert-dismissible"><a class="close " data-dismiss="alert" aria-label="close">&times;</a><p>' 
					       	                   + coment[i] + '<p></div>');		
						}
				}else {confirm("empty");}
/// supremer
				$(".close").click(function()
				{  
				  		var ligne = $(this);
						var coment = JSON.parse(window.localStorage.getItem("comment"));
						coment.splice(ligne, 1);
						var val = JSON.stringify(coment);
						window.localStorage.setItem("comment", val);
				 })
/////
	$("#comment_div").show(); 
 }
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function ok() 
 {
	if ($("#t_coment").val()!="")
		 {
			var coment = JSON.parse(window.localStorage.getItem("comment"));
			var commentaire = $("#t_coment").val();
				if (coment == null)
				 {
				 	var coment =[];
					alert('Premier commentaire');
				 }
			coment.push(commentaire);
			var val = JSON.stringify(coment);
			window.localStorage.setItem("comment", val);
		    $("#t_coment").hide();
		    $("#ok").hide();
		    $("#comment").show();	
		 }else 
		 {
	 	     confirm("empty input");
	 	    $("#t_coment").hide();
		    $("#ok").hide();
		    $("#comment").show();
		 }
 }
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function like_0_1() 
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
 }
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
