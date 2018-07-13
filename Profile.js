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

$('#bidon').hide();

//afficher les images du local storage
$("#contenu").empty();
var photo = JSON.parse(window.localStorage.getItem("photos"));
//store in local storage
if (photo == null) {
	var photo = [];
}
//recup this array
for (var i = 0; i < photo.length; i++)	{

	$("#contenu").append('<div class="thème col-sm-2"><a class="photo" href="#"><img class="img-fluid" src="images/' + photo[i] + '"/></a></div>');

}

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





//like function//////////
var likeCount = 0;  //  count funtion
var clickCount = 0;   // count funtion
$("#likes").click(function()
{  
   var result1=likes();
   localStorage1(result1); 
})
function likes() 
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
            return likeCount;
}
function localStorage1(result) 
{
         if (result==1)
       {
          $( "#likes" ).addClass( "blue" );
        }else
       if(result==0)
       {
          $( "#likes" ).removeClass( "blue" );    
       }
var val = JSON.parse(window.localStorage.getItem("comment"));

   if (result == 1)
    {
        if (val == null)
         {
              val =1;
            alert('Premier like');
         }else 
         if(val >= 0)
         {
             val ++;
         }
    }else
    if (result == 0)
    {
        if (val == 0)
         {
                alert('no commentaire');

         }else 
         if(val >= 0)
         {
             val --;
         }
    }
       var val1 = JSON.stringify(val);
       window.localStorage.setItem("comment", val1)
       $('#nombrelikes').empty();
        $('#like').empty();
        $('#nombrelikes').append('<P>Vous avez '+val+' likes</P>');
}
////////////////////////// comenter
$("#t_coment").hide();
$("#ok").hide(); 
$("#comment_div").hide(); 
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
function ok()
{
    if ($("#t_coment").val()!="")
         {
            var coment = JSON.parse(window.localStorage.getItem("commentt"));
                if (coment == null)
                 {
                     var coment =[];
                    alert('Premier commentaire');
                    pushh(coment);
                 }else
                 {
                    pushh(coment);
                 }
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
function pushh(coment)
 {
    coment.push($("#t_coment").val());
    var val = JSON.stringify(coment);
    window.localStorage.setItem("commentt", val);
 }
/////////////////////////////////  


$("#list").click( function()
{
    $('#list_coment').empty(); 
    var coment = JSON.parse(window.localStorage.getItem("commentt"));
        if (coment!=null || coment!=[])
                 {
                    for (var i = 0; i < coment.length; i++) 
                        {
                                   $('#list_coment').append('<div id="'+i+'" class="alert alert-danger alert-dismissible"><a class="close " data-dismiss="alert" aria-label="close">&times;</a><li class="list-group-item">'+coment[i]+'</li></div>');
                        }
                }else {confirm("empty");}
/// supremer
                $(".close").click(function()
                {  
                          var ligne = $(this);
                        var coment = JSON.parse(window.localStorage.getItem("commentt"));
                        coment.splice(ligne, 1);
                        var val = JSON.stringify(coment);
                        window.localStorage.setItem("commentt", val);
                 })
});