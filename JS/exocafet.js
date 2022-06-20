

let menu =prompt ("Bonjour, veuillez choisir une boisson: 1: Café  2: Thé  3:Chocolat");
    menu=parseInt(menu);
    

        
   

switch(menu){
    case 1 : 
    let cafe = prompt (" Café => veuillez inserer 1€.");
    cafe=parseInt(cafe);
    document.write("Vous avez insérez: " + cafe + "€");
    document.write("<br\>");
    console.log(cafe);
    document.write("Votre solde est de: ");
    let solde = cafe;
    document.write(solde-1);
    break;
    case 2 :
    let the = prompt (" Thé => veuillez inserer 2€. ");
    the = parseInt (the);
    document.write("Vous avez insérez: " + the + "€");
    document.write("<br\>");
    console.log(the);
    document.write("Votre solde est de: ");
    let solde2 = the
    document.write(solde2=the-2);
    break;
    case 3 :
    let chocolat =prompt(" Chocolat => veuillez inserer 3 €: ");
    chocolat = parseInt (chocolat);
    document.write("Vous avez insérez: " + chocolat + "€");
    document.write("<br\>");
    console.log(chocolat);
    document.write("Votre solde est de: ");
    let solde3 = chocolat
    document.write(solde3=chocolat-3);
default:











}
    