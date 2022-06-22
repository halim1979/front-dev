

let menu = prompt("Choisissez une opération: 1: Retrait  2: Solde  3: Dépot");
menu = parseInt(menu);


//localStorage.setItem('monSolde', JSON.stringify(solde));
switch (menu) {
    case 1:
        let retrait = prompt("Retrait");
        console.log("1: Retrait ");
        document.write("Vous avez retirez: ");
        document.write("<br\>");
        document.write( retrait);
        document.write(" €.");
        localStorage.setItem('monRetrait', JSON.stringify(retrait));


    case 2:
    let solde = 1000
        console.log(solde);
        console.log("2: Solde");
        document.write("<br\>");
        document.write("Votre solde est de: ");
        document.write("<br\>");
        document.write(solde - retrait);
        document.write(" €.")
        let newsolde = (solde - retrait);
        localStorage.setItem('monSolde', JSON.stringify(solde));
        document.write("<br\>");

    case 3:
    let depot = prompt("Dépot");
    depot = parseInt(depot);
        console.log("3: Dépot");
        document.write("Vous avez déposé: " + (depot) + " €.");
        document.write("<br\>");
        document.write("Votre nouveau solde est de:" + (depot+newsolde));
        document.write("<br\>");
        //document.write(soldeJSON = localStorage.getItem('monSolde');
        //  solde = soldeJSON && JSON.Parse(soldeJSON);)

      /*  soldeJSON = localStorage.getItem('monSolde');
        solde = soldeJSON && JSON.Parse(soldeJSON);
        retraitJSON = localStorage.getItem('monRetrait');
        retait = retraitJSON && JSON.Parse(retraitJSON);
        document.write((solde - retrait) + depot);*/

default :
document.write("Au revoir et merci pour votre confiance.")
}
