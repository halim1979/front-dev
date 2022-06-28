
var n = new Number;
estPrem = new Boolean(true);
function tester()
{
  n=Number(document.test.nbr.value);
  estPrem=true;
  for ( i = 2; i < n; i++)
  {
    if (n%i==0)estPrem=false;
    let html = document.getElementById("reponse").innerHTML=estPrem;
  }

    document.test.rep.value = estPrem;

  }
