<!--    𝕨𝕨𝕨.𝔹𝕠𝕜𝕠𝕟𝕫𝕚.𝕔𝕠𝕞  𝖞𝖉𝖊𝖓𝖌𝖆 𝕿𝖚𝖛𝖚𝖒𝖇𝖚   ★☆♨♫✈❤
    //  ★   =   début de l'information
    //  ☆   =   fin de l'information
    //  ♨   =   Code de l'information premier letre du fichier et dernier lettre du fichier suivi du numéro du commentaire.
    //  ♫   = connexion css all suivi du nom du fichier 
    //  ✈  =♨=#ix0002 provenence du fichier total index.php  racine du fichier le commentaire de sa ligne est  ♨=#ix0002
    //  ❤   = Le fichier appéle est bien dans la racine du meme appelant 
    //
𝕨𝕨𝕨.𝔹𝕠𝕜𝕠𝕟𝕫𝕚.𝕔𝕠𝕞  𝖞𝖉𝖊𝖓𝖌𝖆 𝕿𝖚𝖛𝖚𝖒𝖇𝖚   ★☆♨♫✈❤  -->
<script src="src/app/all/app.all.modeljs.js"></script>
<link rel="stylesheet" href="src/app/header/app.header.css">    <!--★♫ ♨=ap001 ☆-->
<link rel="stylesheet" href="src/app/header/app.header.responsive.css">    <!--★♫ ♨=ap001 ☆-->
<link rel="stylesheet" href="src/app/section/app.section.css">  <!--★♫ ♨=ap002 ☆-->
<link rel="stylesheet" href="src/app/footer/app.footer.css">    <!--★♫ ♨=ap003 ☆-->
<link rel="stylesheet" href="src/app/all/app.all.css">          <!--★♫ ♨=ap004 ☆-->
<!-- #1 -->
<?php
     require 'src/app/all/app.all.bdd.php';  //<!--★♫ ♨=ap005 ☆-->
     require 'src/app/all/app.all.php';     //<!--★♫ ♨=ap006 ☆-->
?>
<header>
    <?php
        // ajout la page header #2
        require 'src/app/header/app.header.html'; //<!--★♫ ♨=ap007 ☆-->
        require 'src/app/header/app.header.php'; //<!--★♫ ♨=ap008 ☆-->
    ?>
</header>
<section>
    <?php
        require 'src/app/section/app.section.html' ; //<!--★♫ ♨=ap009 ☆-->
        require 'src/app/section/app.section.php' ; //<!--★♫ ♨=ap0010 ☆-->
    ?>
</section>
<footer>
    <?php
        require 'src/app/footer/app.footer.html' ;//<!--★♫ ♨=ap010 ☆-->
        require 'src/app/footer/app.footer.php' ;//<!--★♫ ♨=ap011 ☆-->
    ?> 
</footer>
<?php
    require 'links.php' ;//<!--★♫ ♨=ap012 ☆-->
?>