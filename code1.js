
var solde_joueur= 100;
var solde_machine=500;


document.getElementById("soldeJ").innerHTML="joueur : "+solde_joueur +" milles fcfa";
document.getElementById("soldeM").innerHTML="machine : "+solde_machine+" milles fcfa";


// fonction qui retourne une valeur aleatoire entre a et b
function alea(a,b){
    return Math.round(a+Math.random()*(b-a));
}


function go(){

    var mise = document.getElementById("mise").value ;
    var choix = document.getElementById("choix").value ;
    mise = parseInt(mise);
    if(mise){

        if(mise>solde_joueur || mise < 1){
            alert("vous n'avez pas assez d'argent");
        }else{

            var resultat =  alea(0,36);
  

   var m=1;

function valeurSuivant()
{
    m++;
    document.getElementById("resultat").innerText=m ;
    if(m==36){
        m=1
    }
    if(m==resultat){
            stop();
    }
    
}

    var demarrer = setInterval(valeurSuivant,30);

   


    function stop()
    {
        clearInterval(demarrer) ;
    }

    var gain =0;
    

    if(  parseInt(choix)==resultat  ){
         gain = ( mise + (mise * 35 ));
        document.getElementById("statut").innerText="Gagné! :"+gain;

    }else if(resultat==0){
        document.getElementById("statut").innerText="Perdu!";
        solde_joueur= solde_joueur - mise;
        solde_machine= solde_machine +  mise ;

    }else if(resultat%2==0 && choix=="pair"){

         gain = mise*2;
        document.getElementById("statut").innerText="Gagner! :"+gain;
    }else if(resultat%2!=0 && choix=="impair"){
         gain = mise*2;
        document.getElementById("statut").innerText="Gagner! :"+gain;
    }else{
        document.getElementById("statut").innerText="Perdu!";
        solde_machine= solde_machine + mise ;
        solde_joueur= solde_joueur - mise;
    }

    
    
    solde_joueur= solde_joueur + gain;
    solde_machine=solde_machine-gain ;

    document.getElementById("soldeJ").innerHTML="joueur : "+solde_joueur +" milles fcfa";
    document.getElementById("soldeM").innerHTML="machine : "+solde_machine+" milles fcfa";
    document.getElementById("mise").innerHTML="";
        }
        
   
    }else{
        alert("la mise est obligatoire ") ;
    }

}