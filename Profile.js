// $("#table_m").hide();
// $("#create").click(function ()
// {
// 	$("#table_m").show();
// });

//délais avant l'ouverture de la deuxième modal (patch d'un bug)
$('#createAccount').click( function(){
	setTimeout(mod, 500);
});
function mod(){
	$('#modalAccount').modal('toggle');
};

//vide les inputs au chargement
$('#identifiant').val('');
$('#password').val('');

//récupère les comptes du local storage
var logs = JSON.parse(window.localStorage.getItem("comptes"));

//vérifie si un compte existe déjà, si oui cache le bouton créer un compte
if (logs != null) {
	$('#createAccount').hide();
}

//garde en mémoire si les logs sont bon, par défault ils sont faux
var connection = false;
// compte le nombre de tentatives
var attempt = 3;

// Fonction qui s'éxcecute au click du bouton connection
$('#valider').click( function login(){
	//récupère la valeur des input
	var username = $('#identifiant').val();
	var password = $('#password').val();
	//parcour le tableau des comptes
	for (compte in logs){
	//compare les logs
	if ( username == logs[compte].identifiant && password == logs[compte].password){
		//vide les inputs
		$('#identifiant').val('');
		$('#password').val('');
		connection = true;
		//redirige vers la page admin
		location.href="admin.html";
		return false;
	}
		//compare si la connection a échoué
	} if (connection === false){
		// décrémente par un
		attempt --;
		alert("Il vous reste "+attempt+" tentatives.");
		// Désactive les champs et le bouton au bout de 3 tentatives
		if( attempt === 0){
				//vide les inputs
				$('#identifiant').val('');
				$('#password').val('');
				//désative les inputs et le bouton
				$('#identifiant').prop('disabled', true);
				$('#password').prop('disabled', true);
				$('#valider').prop('disabled', true);
				return false;
			}
		}

	});

//création de compte
//vide les inputs au chargments de la page
$('#nom').val('');
$('#prenom').val('');
$('#age').val('');
$('#mail').val('');
$('#identifiant').val('');
$('#password').val('');
$('#passwordconf').val('');
$('#coord').val('');
$('#description').val('');
//fonction de création de compte
$('#create').click(function (){
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
		//si il n'y a pas de compte dans le local storage
		if (dataParse == null) {
			//création d'un tableau
			var dataParse = [];
			alert('Premier ajout fait');
		}
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
		location.href="Profile.html";
	}
	//si les mots de passe ne sont pas identiques
	else{
		alert('Vos mots de passe sont pas identiques.')
	}
});

$('.photo').click( function(){
	$('#image').empty();
	var image = $(this).find("img")
	image = image.attr('src');
	console.log(image);
	$('<img src="'+image+'" alt="Instagram">').appendTo('#image');
	$('#modalImage').modal('toggle');
	// var div = $(this).closest(".thème");
	// div.css("width", "50%");
	// $(this).click( function(){
	// 	div.css("width", "16%");
	// 	location.href="Profile.html";
	// });
});

