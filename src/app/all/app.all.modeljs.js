/*  𝕨𝕨𝕨.𝔹𝕠𝕜𝕠𝕟𝕫𝕚.𝕔𝕠𝕞  𝖞𝖉𝖊𝖓𝖌𝖆 𝕿𝖚𝖛𝖚𝖒𝖇𝖚   ★☆♨♫✈❤ 
    //  ★   =   début de l'information
    //  ☆   =   fin de l'information
    //  ♨   =   Code de l'information premier letre du fichier et dernier lettre du fichier suivi du numéro du commentaire.
    //  ♫   = connexion css all suivi du nom du fichier
    //  ☹☹ Double appel du fichier 
    //  ✈  = ★♨=ls0003☹☹♨=ap012  app.links et app.ph ★♨=ls0003☹☹  ♨=ap012
    //  ❥ = le fichier ne pas au même emplacement que l'appelant /!\
    𝕨𝕨𝕨.𝔹𝕠𝕜𝕠𝕟𝕫𝕚.𝕔𝕠𝕞  𝖞𝖉𝖊𝖓𝖌𝖆 𝕿𝖚𝖛𝖚𝖒𝖇𝖚   ★☆♨♫✈❤ */
    function setatributes(iD,atribut,atributName)
    {
        document.getElementById(iD).setAttribute(atribut,atributName);
    }



    
    function adddiV(type,moniD,finaL)
  {
    var node = document.createElement(type);                 // Create a <li> node
    node.setAttribute("id",moniD);              
    document.getElementById(finaL).appendChild(node);  
  }
    class IdentificationHtml {
    constructor(setattributE,iD,finaL,clasS,innerhtmL,typE,srC,valuE) {
    this.setattributE=setattributE;
    this.iD = iD;
    this.finaL=finaL;     
    this.clasS = ""; 
    this.innerhtmL = ""; 
    this.typE = "";   
    this.srC = ""; 
    this.valuE = "";
    var node = document.createElement(setattributE);  // donne un atribu lors de l'utilisation              
    node.setAttribute("id",iD);
  
    if(this.finaL==undefined)
    {
      document.body.appendChild(node);  
    }
    else 
    {
      document.getElementById(this.finaL).appendChild(node);  
    }   
  } 

  get setattributE_()
  {
    return this.setattributE ; 
    // retourne l'id 
  }
  get id_()
  {
    return this.iD ; 
    // retourne l'id 
  }
  get clasS_()
  {
    return this.clasS ; 
      // retourne le nom de la class
  }
  get innerhtmL_()
  {
    return this.innerhtmL ;
    
    // retourne le contenu  
  }
  get typE_()
  {
    return this.typE; 
    // retourne le typE
  }
  get srC_()
  {
    return this.srC; 
    // retourne la source
  }
  get valuE_()
  {

     
    return document.getElementById(this.iD).value;
   
    // retourne le titre
  } 
  set clasS_(clasS)
  {
    this.clasS=clasS ; 
    document.getElementById(this.iD).className=clasS;
  }
  set innerhtmL_(innerhtmL)
  {
    this.innerhtmL=innerhtmL ; 
    document.getElementById(this.iD).innerHTML=innerhtmL;
  }
  set typE_(typE)
  {  
    this.typE= typE ; 
    document.getElementById(this.iD).setAttribute("type",typE);
  }
  set srC_(srC)
  {  
    this.srC= srC ; 
    document.getElementById(this.iD).setAttribute("src",srC);
  }
  set valuE_(valuE)
  {  
    this.valuE= valuE ; 
    document.getElementById(this.iD).setAttribute("value",valuE);
  }
 
}
class IdentificationKey {
    constructor(iD,onkeydowN,onkeypresS,onkeyuP) {
    this.iD = iD;
    this.onkeydowN = "";
    this.onkeypresS = "";
    this.onkeyuP = "";
  }
  get onkeydowN_()
  {
    return this.onkeydowN ; 
    // retourne l'id 
  }
  get onkeypresS_()
  {
    return this.onkeypresS ; 
    // retourne l'id 
  }
  get onkeyuP_()
  {
    return this.onkeyuP ; 
    // retourne l'id 
  }
  set onkeydowN_(onkeydowN)
  {  
    this.onkeydowN= onkeydowN ; 
    document.getElementById(this.iD).setAttribute("onkeydown",onkeydowN);
  }
  set onkeypresS_(onkeypresS)
  {  
    this.onkeypresS= onkeypresS ; 
    document.getElementById(this.iD).setAttribute("onkeypress",onkeypresS);
  }
  set onkeyuP_(onkeyuP)
  {  
    this.onkeyuP= onkeyuP ; 
    document.getElementById(this.iD).setAttribute("onkeyup",onkeyuP);
  } 
}

class IdentificationMouse {
    constructor(iD,onmouseoveR,onmousedowN) {
    this.iD = iD;
    this.onmouseoveR ="";
    this.onmousedowN="";      
  }  
  get onmousedowN_()
  {
    return this.onmousedowN ; 
    // retourne l'id 
  }
  set onmouseoveR_(onmouseoveR)
  {  
    this.onmouseoveR= onmouseoveR ; 
    document.getElementById(this.iD).setAttribute("onmouseover",onmouseoveR);
  }
  set onmousedowN_(onmousedowN)
  {  
    this.onmousedowN= onmousedowN ; 
    document.getElementById(this.iD).setAttribute("onmousedown",onmousedowN);
  }
 }
 function ajax(source) 
 {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("session").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", source, true);
  xhttp.send();
 }



// fin du test