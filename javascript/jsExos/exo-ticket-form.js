function ticket(){
  prix1 = document.getElementById("prix").value;
  quantite1 = document.getElementById("quantite").value;
  document.getElementById("result").innerHTML = (prix1 * quantite1);
}
//alert(document.getElementById("result"));
document.write(document.getElementById("result").innerHTML = prix1 * quantite1 );
console.log(document.getElementById("result").innerHTML = prix1 * quantite1);
