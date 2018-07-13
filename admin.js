//affichage des information du profil contenu dans le local storage

var info = JSON.parse(localStorage.getItem("comptes"));

if (info != null) {
for (var i =0; i<info.length; i++) {
//$("#info").append("<tr><td>"+info[i].nom+"</td><td>"+info[i].prenom+"</td><td>"+info[i].age+"</td><td>"+info[i].mail+"</td><td>"+info[i].identifiant+"</td><td>"+info[i].genre+"</td><td>"+info[i].description+"</td></tr>");
//$('#info').append("<Nom : "+info[i].nom+"</p><p>Prénom : "+info[i].prenom+"</p><p>Age : "+info[i].age+"</p><p>Mail : "+info[i].mail+"</p><p>Identifiant : "+info[i].identifiant+"</p><p>Mot de passe : "+info[i].password+"</p><p>Coordonees : "+info[i].coordonees+"</p><p>Genre : "+info[i].genre+"</p><p>Description : "+info[i].description+"</p>");
$('#info').append("<div>Nom : "+info[i].nom+"</div>");
$('#info').append("<>Prénom : "+info[i].prenom+"</p>");
$('#info').append("<p>Age : "+info[i].age+"</p>");
$('#info').append("<p>Mail : "+info[i].mail+"</p>");
$('#info').append("<p>Identifiant : "+info[i].identifiant+"</p>");
//$('#info').append("<p>Mot de passe : "+info[i].password+"</p>");
$('#info').append("<p>Coordonees : "+info[i].coordonees+"</p>");
$('#info').append("<p>Genre : "+info[i].genre+"</p>");
$('#info').append("<p>Description : "+info[i].description+"</p>");
};
}
//redirection du bouton de déconexion vers la page d'acceuil 

$("#deconexion").click(function(){
	document.location.href="Profile.html";
});

//fonction bouton modification des info du profil de l'admin

$('#modif').click(function (){
	//récupère la valeur des inputs des mots de passe
	var passwordSet = $('#passwordCr').val();
	var passwordConf = $('#passwordconf').val();
	//compare les mots de passe, si ils sont identique éxecution du code sinon il passe dans le else
	if (passwordSet === passwordConf) {
		//récupération de la valeur de tout les inputs
		var nomSet = $('#nom').val();
		var prenomSet = $('#prenom').val();
		var ageSet = $('#age').val();
		var emailSet = $('#mail').val();
		var identifiantSet = $('#identifiantCr').val();
		var passwordSet = $('#passwordCr').val();
		var passwordConf = $('#passwordconf').val();
		var coordSet = $('#coord').val();
		var genreSet = $('#genre option:selected').val();
		var descriptionSet = $('#description').val();
		//récupère les comptes existant dans le local storage
		var dataParse = JSON.parse(window.localStorage.getItem("comptes"));
		dataParse = [];
		//envois les valeurs récupéré dans le tableau dataParse sous forme dans un ojbet
		dataParse.push({
			nom : nomSet,
			prenom : prenomSet,
			age : ageSet,
			mail : emailSet,
			identifiant : identifiantSet,
			password : passwordSet,
			coordonees : coordSet,
			genre : genreSet,
			description : descriptionSet
		});
		//stringify le tableau dataParse
		var val = JSON.stringify(dataParse);
		//envois dans le tableau dataParse dans le local storage
		window.localStorage.setItem("comptes", val);
		//vide les inputs
		$('#nom').val('');
		$('#prenom').val('');
		$('#age').val('');
		$('#mail').val('');
		$('#identifiant').val('');
		$('#password').val('');
		$('#passwordconf').val('');
		$('#coord').val('');
		$('#description').val('');
		//rechargement de la page
		location.href="admin.html";
	}
	//si les mots de passe ne sont pas identiques
	else{
		alert('Vos mots de passe sont pas identiques.')
	}
});



$('#modifier').click( function(){
	var dataParse = JSON.parse(window.localStorage.getItem("comptes"));
	for (id in dataParse){
		$('#nom').val(dataParse[id].nom);
		$('#prenom').val(dataParse[id].prenom);
		$('#age').val(dataParse[id].age);
		$('#mail').val(dataParse[id].mail);
		$('#identifiantCr').val(dataParse[id].identifiant);
		$('#coord').val(dataParse[id].coordonees);
		$('#genre option:selected').val(dataParse[id].genre);
		$('#description').val(dataParse[id].description);
	}
});

// fonction ajout photo



function addPhoto(){
	$("#divimage").empty();
	var photo = JSON.parse(window.localStorage.getItem("photos"));
//store in local storage
	if (photo == null) {
		var photo = [];
	}
//create empty array
	var newimage =document.getElementById("image").files[0].name;
	console.log(newimage);
//create var contain images names
	photo.push(newimage);
//push in empty array
console.log(photo);
	window.localStorage.setItem("photos", JSON.stringify(photo));
//recup this array
	for (var i = 0; i < photo.length; i++)	{

		$("#divimage").append('<div class="col-sm-4" class="thème"><a class="photo" href="#"><img class="img-fluid" id="photodisp" src="images/' + photo[i] + '"/></a></div>');

	}
//display images

}

$("#photo").click(function(){
	addPhoto();
})
