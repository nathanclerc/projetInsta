console.log("coucou !!")






$(function(){
	$("#display").click(load_click);

})

function load_click() {
	
	$(".image").each(function() {
		$(this).hide()

		var input = $(this);
		var inputFiles = this.files;
		
		if(inputFiles == undefined || inputFiles.length == 0) 
			return;
		var inputFile = inputFiles[0];

		var reader = new FileReader();
		reader.onload = function(event) {
			input.next().attr("src", event.target.result);
		};
		reader.onerror = function(event) {
			alert(" ERROR: " + event.target.error.code);
		};
		reader.readAsDataURL(inputFile);
	});
}
