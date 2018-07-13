//affichage de

var info = JSON.parse(localStorage.getItem("comptes"));

for (var i =0; i<info.length; i++) {
$("#info").append("<tr><td>"+info[i].nom+"</td><td>"+info[i].prenom+"</td><td>"+info[i].age+"</td><td>"+info[i].mail+"</td><td>"+info[i].identifiant+"</td><td>"+info[i].genre+"</td><td>"+info[i].description+"</td></tr>");
// $("#info").append("<tr><td>"+info[i].nom+"</td></tr>");
//$('#nom').append("<tr><td>"+info[i].nom+"</td></tr>");
};

