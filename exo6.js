function calculAge() {
    alert("Page is loaded");
  }
let code = document.getElementById('anneecourante');
					let year = (new Date).getFullYear();
					code.textContent = code.textContent.slice(0, -5) + year + ";";

function calculeAge() {
	let annéeNaissance = parseInt(window.prompt("Quelle est votre année de naissance ?"));
	let age = (new Date).getFullYear() - annéeNaissance;
	if (age<0) {
		window.alert(""+annéeNaissance+" ??? Vous naîtrez dans "+ (-age) +" ans !\n\n");
	} else {
		let message="";
		if (age < 15) {message = "\n\nEn voilà un de bien précoce !\n\n"}
		if (age > 30) {message = "\n\nEh... Il n'y a pas d'âge pour apprendre !\n\n"}
		window.alert("Vous avez "+(age-1)+" ou "+ age +" ans."+message);
	}
}