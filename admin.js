//redirection du bouton log-out vers la page d'acceuil 

$("#deconexion").click(function(){
	document.location.href="Profile.html";
});


//affichage des information du profil contenu dans le local storage

var info = JSON.parse(localStorage.getItem("comptes"));

for (var i =0; i<info.length; i++) {
//$("#info").append("<tr><td>"+info[i].nom+"</td><td>"+info[i].prenom+"</td><td>"+info[i].age+"</td><td>"+info[i].mail+"</td><td>"+info[i].identifiant+"</td><td>"+info[i].genre+"</td><td>"+info[i].description+"</td></tr>");
$('#info').append("<p>Nom : "+info[i].nom+"</p>");
$('#info').append("<p>Prénom : "+info[i].prenom+"</p>");
$('#info').append("<p>Age : "+info[i].age+"</p>");
$('#info').append("<p>Mail : "+info[i].mail+"</p>");
$('#info').append("<p>Identifiant : "+info[i].identifiant+"</p>");
$('#info').append("<p>Mot de passe : "+info[i].password+"</p>");
$('#info').append("<p>Coordonees : "+info[i].coordonees+"</p>");
$('#info').append("<p>Genre : "+info[i].genre+"</p>");
$('#info').append("<p>Description : "+info[i].description+"</p>");
};

