document.getElementById("inscription").addEventListener("submit", function(e)){
    let erreur;
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous le champs";
        }
    }
    if (erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else{
        alert("Formulaire envoyé !");
    }
}