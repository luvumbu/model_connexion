<?php
    session_start()  ; 

 if(isset($_SESSION["session"]))
 {
    echo $_SESSION["session"] ; 
 }
 else 
 {
     echo "pas de valeur" ; 
 }
?>