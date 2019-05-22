function searching(){
	result="";
	getElementsByClass("container");

}

function comments(id){
		var nom=prompt("Votre pseudonyme ?");
		commentaire=prompt("Que voulez-vous nous dire ?")
		getElementById(id).value.innerHTML+="<p>"+nom+"<br>"+commentaire+"</p><hr>";

}