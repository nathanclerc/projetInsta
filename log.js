//tableau de comptes
// var logs = [
// {
// 	identifiant : 'Nathan',
// 	password : 'Clerc'
// },
// {
// 	indentifiant : 'Marco',
// 	password : 'brezil'
// }
// ];
var logs = JSON.parse(window.localStorage.getItem("comptes"));
console.log(logs);
//vide les inputs au chargement
$('#identifiant').val('');
$('#password').val('');

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
			alert ("Login successfully");
		//vide les inputs
		$('#identifiant').val('');
		$('#password').val('');
		connection = true;
		//window.location = "profile.html"; // Redirecting to other page.
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

