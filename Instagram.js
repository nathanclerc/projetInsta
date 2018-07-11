$("#t_coment").hide();
$("#ok").hide();
$("#show").hide(); 
var likeCount = 0;
var clickCount = 0;
var like=0;
var count_c=0;
var coment=[];

///////////////////////////////////
	 $("#like").click(function()
	 {   
          like ++;
        $("#count").text(like);

	 });
//////////////////////////////:
 

	$("#comment").click(function()
		 {   
				 	 $("#t_coment").show();
			         $("#comment").hide(); 
			         $("#ok").show();
					 $("#ok").click( function()
					 {  
			
	                    coment.push(localStorage.setItem("comment",$("#t_coment").val()));
	                    //console.log(commentaire);
						$("#t_coment").hide();
						$("#ok").hide();
 					    $("#comment").show(); 
		      	       console.log(localStorage.getItem("comment"));

					 });

			
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