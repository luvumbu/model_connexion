var information_G_html = new IdentificationHtml("div","information_G","formulaire");
// création du premier div juste apres formulaire
var information_G_html2 = new IdentificationHtml("div","information_G2","formulaire");
// creation des deux div 
information_G_html.clasS_="information_G" ;
information_G_html2.clasS_="information_G2 opacity_off" ;
// atribution de class au div .opacity_off
var div_info = new IdentificationHtml("div","div_info","formulaire") ;
// creation d'un div pour accueillir connection et inscription
var connexion_G = new IdentificationHtml("h1","connexion","information_G") ;
connexion_G.innerhtmL_="Connexion" ;
// création de l'information clickable Connexion
setatributes("connexion","onclick","connexion_on()") ;
// atribue une valeur à connexion lors qu"on click effectuer cette tache    
var information_G_childs = "information_G_child cursor-pointer connexion_hover";
// variable pour la preparation datribution de class au enfant de la class information_G
connexion_G.clasS_=information_G_childs;
// atribution de class avec varible prédefinis 
var inscription_G = new IdentificationHtml("h1","inscription","information_G") ;

inscription_G.innerhtmL_="Inscription" ;
inscription_G.clasS_=information_G_childs; 
setatributes("inscription","onclick","inscription_on()") ;
var inputs_1 = new IdentificationHtml("input","input1","information_G2");
inputs_1.clasS_ ="inputs" ;
var input1_1_ = new IdentificationKey("input1") ;
input1_1_.onkeydowN_= "keylog()" ; 
input1_1_.onkeypresS_="keylog()";
input1_1_.onkeyuP_="keylog()";
// lors qu'on appui sur le clavier verifie appel au fonction
setatributes("input1","placeholder","Entrer votre adresse mail") ;  
var inputs_2 = new IdentificationHtml("input","input2","information_G2");
inputs_2.clasS_ ="inputs";
var input2_2_ = new IdentificationKey("input2") ;
input2_2_.onkeydowN_= "keylog()" ; 
input2_2_.onkeypresS_="keylog()";
input2_2_.onkeyuP_="keylog()"; 
setatributes("input2","placeholder","Entrer votre nom complet") ;  
var inputs_3 = new IdentificationHtml("input","input3","information_G2");
inputs_3.clasS_ ="inputs" ;
setatributes("input3","placeholder","Entrer votre mot de passe") ; 
var input3_3_ = new IdentificationKey("input3") ;
input3_3_.onkeydowN_= "keylog()" ; 
input3_3_.onkeypresS_="keylog()";
input3_3_.onkeyuP_="keylog()"; 

var inputs_4 = new IdentificationHtml("input","input4","information_G2");
inputs_4.clasS_ ="inputs" ; 
setatributes("input4","placeholder","confirmation du mot de passe") ; 
var inputs_envoyer = new IdentificationHtml("div","inputs_envoyer","information_G2");
var statu;
var envoyer_  =false;
var model_x ; 

var input4_4_ = new IdentificationKey("input4") ;
input4_4_.onkeydowN_= "keylog()" ; 
input4_4_.onkeypresS_="keylog()";
input4_4_.onkeyuP_="keylog()";
inputs_envoyer.clasS_ ="inputs_envoyer cursor-pointer" ; 
inputs_envoyer.innerhtmL_="Envoyer";
setatributes("inputs_envoyer","onclick","inputs_envoyer_status()") ;  

function inputs_envoyer_status()
{
  if(envoyer_==false)
  {
    alert("remplir tous les champs pour envoyer le formulaire") ;
  }
  else 
  {
    var  info_user = { 
  mail:inputs_1.valuE_,
  name:inputs_2.valuE_,
  password:inputs_3.valuE_,
  adresse: inputs_4.valuE_,
  model_x:statu,
};
  console.log("click");
  $.post( "http://localhost/luvumbu/src/app/all/app.all.login.php", info_user )
    .done(function( data ) {
      console.log(data);
  });
  setTimeout(function(){    
  ajax("src/app/all/app.ajax.php");
}, 400);  
}
}
function connexion_on()
{   
    
    
    model_x = "c_on";
    document.getElementById("input1").value="";
    document.getElementById("input4").value="";
    envoyer_  =false;
    statu = "con";  
    document.getElementById("information_G2").className="information_G2 opacity_on";
    inputs_2.clasS_="opacity_off";
    inputs_3.clasS_="opacity_off";
    inputs_envoyer.clasS_ ="inputs_envoyer envoyer_disable";
    inputs_4.typE_="password";
    setatributes("input4","placeholder","mot de passe") ;
    model_x = statu ;    
}
function inscription_on()
{  
    type = "i_on";
     
    envoyer_  =false;
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";
    document.getElementById("input4").value=""; 
    statu = "ion";   
    document.getElementById("information_G2").className="information_G2 opacity_on";
    inputs_2.clasS_="inputs";
    inputs_3.clasS_="inputs";
    inputs_envoyer.clasS_ ="inputs_envoyer envoyer_disable";
    inputs_4.typE_="password";
    setatributes("input4","placeholder","mot de passe") ;     
}
function keylog() 
{
    if(  statu =="con" )
    {
        if(inputs_1.valuE_=="" ||inputs_4.valuE_=="")
            {
                inputs_envoyer.clasS_ ="inputs_envoyer envoyer_disable";
                envoyer_ = false ;
            }
            else 
            {
                inputs_envoyer.clasS_ ="inputs_envoyer envoyer_on cursor-pointer";
                envoyer_ = true;
            }
    }
    else 
    {
        if(inputs_1.valuE_=="" ||inputs_2.valuE_=="" || inputs_3.valuE_=="" ||inputs_4.valuE_=="")
            {
                inputs_envoyer.clasS_ ="inputs_envoyer envoyer_disable";

 
                envoyer_ = false ;
            }
            else 
            {
                if(inputs_3.valuE_!=inputs_4.valuE_)
                        {
                            inputs_envoyer.clasS_ ="inputs_envoyer envoyer_disable";
                            envoyer_ = false;
                        }
                        else 
                        {
                            inputs_envoyer.clasS_ ="inputs_envoyer envoyer_on cursor-pointer";
                            envoyer_ = true;
                        }
            }
    }

}
function keyin() 
{
 if(inputs_1.valuE_==""||inputs_2.valuE_=="" ||inputs_3.valuE_=="" ||inputs_4.valuE_=="")
 {
    inputs_envoyer.clasS_ ="inputs_envoyer envoyer_disable";
 }
 else 
 {
    inputs_envoyer.clasS_ ="inputs_envoyer envoyer_on cursor-pointer";
    envoyer_ = true;
 }

}