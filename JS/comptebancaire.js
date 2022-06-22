
let menu = prompt("opération");
menu = parseInt(menu);
let solde = 1000;
switch (menu) {
    case 1:
        let retrait = prompt("Retrait");
        console.log("1: Retrait ");
        document.write("1: Retrait ");
        document.write("<br\>");
        console.log(retrait);
        document.write(solde - retrait);
        
        break;
    case 2: 
        console.log(solde);
        console.log("2: Solde");
        document.write("2: Solde");
        document.write("<br\>");
        document.write(solde - retrait);
        break;

    case 3:
        let depot = prompt("Dépot");
        console.log("3: Dépot");
        document.write("3: Dépot");
        document.write("<br\>");
        document.write(depot);
        break;
    default: "Quitter";

}