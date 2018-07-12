//ajouter une personne
$('#valider').click(function (){
	var passwordSet = $('#password').val();
	var passwordConf = $('#passwordconf').val();
	if (passwordSet === passwordConf) {
		var nomSet = $('#nom').val();
		var prenomSet = $('#prenom').val();
		var ageSet = $('#age').val();
		var emailSet = $('#mail').val();
		var identifiantSet = $('#identifiant').val();
		var passwordSet = $('#password').val();
		var passwordConf = $('#passwordconf').val();
		var coordSet = $('#coord').val();
		var genreSet = $('#genre option:selected').val();
		var descriptionSet = $('#description').val();

		var dataParse = JSON.parse(window.localStorage.getItem("comptes"));
		if (dataParse == null) {
			var dataParse = [];
			alert('Premier ajout fait');
		}
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
		var val = JSON.stringify(dataParse);
		window.localStorage.setItem("comptes", val);
		$('#nom').val('');
		$('#prenom').val('');
		$('#age').val('');
		$('#mail').val('');
		$('#identifiant').val('');
		$('#password').val('');
		$('#passwordconf').val('');
		$('#coord').val('');
		$('#description').val('');
	}else{
		alert('Vos mots de passe sont pas identiques.')
	}
});
