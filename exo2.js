
$(document).ready(function(){
    taille= 100;
    taillemax=300;
    taillebase=100;
    $("#one").click(function() {
      taille=taille+10;
         $("#rectangle").css('height', taille+"px");
              if (taille >= taillemax) {
                   $('#rectangle').css('height', taillebase+"px");
              }
    });

    $("#two").click(function() {
      $("#rectangle").css("background-color", "green");
    });

    $("#three").click(function() {
      $("#rectangle").css("background-color", "blue");
    });

    $("#four").click(function() {
      $("#rectangle").hide();
    });

    $("#five").click(function() {
      $("#rectangle").show();
    });
});