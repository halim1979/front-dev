
var n = new Number,
estPrem = new Boolean(true);
function tester()
{
n=Number(document.test.nbre.value);
estPrem=true;
let ok = "c'est un nombre premier";
let nook = "ceci n'est pas un nbre premier";
for(j=2;j<n;j++)
{
if(n%j==0)estPrem=false;
}
//document.write(pasok);
document.test.rep.value=estPrem;
let html = document.getElementById("reponse").innerHTML ;
if (estPrem){
document.getElementById("reponse").innerHTML = ok;
document.body.style.backgroundColor = "green";
document.body.style.color = "white";
}
else{document.getElementById("reponse").innerHTML = nook;
document.body.style.backgroundColor = "red";
document.body.style.color = "white";
}
}
