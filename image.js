console.log("coucou !!")




function addPhoto(){
	$("#contenu").empty();
	var photo = JSON.parse(window.localStorage.getItem("photos"));
//store in local storage
	if (photo == null) {
		var photo = [];
	}
//create empty array
	var newimage =document.getElementById("image").files[0].name;
//create var contain images names
	photo.push(newimage);
//push in empty array
	window.localStorage.setItem("photos", JSON.stringify(photo));
//recup this array
	for (var i = 0; i < photo.length; i++)	{

		$("#contenu").append('<div class="thème"><a class="photo" href="#"><img class="img-fluid" src="images/' + photo[i] + '"/></a></div>');

	}
//display images

}


// var photo = JSON.parse(window.localStorage.getItem("photos"));

// if (photo == null) {
// 	var photo = [];
// }

// var newimage =document.getElementById("image").files[0].name;

// photo.push(newimage);

// window.localStorage.setItem("photos", JSON.stringify(photo));

// for (var i = 0; i < photo.length; i++)	{

// 	$("#divimage").append('<img src="images/' + photo[i] + '"/>');

// }




$("#disp").click(function(){
	addPhoto();
})


// function previewFile() {
//   var preview = document.querySelector('img');
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();

//   reader.addEventListener("load", function () {
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }

//  console.log(preview);

// }


// 		$.post('image.php', function (result) {
// $("#upload").append(result);
// });


