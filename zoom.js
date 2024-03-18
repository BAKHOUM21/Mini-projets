document.getElementById('maxi').addEventListener(
    'click',
    function(){//-- cet fonction en paramètre de addEventListener se déclenche lors du click
   var nouveau=document.createElement('div');//-- creation d'un container
   //-- un peu de CSS pou donner emplacement, taile et couleur voulue, j'ai fait exprés d'utiliser une semi-transparence
   nouveau.setAttribute('style','z-index:899;position:absolute;top:0;left:0;text-align:center;border:1px solid grey;width:99%;height:99%;font-size:4em;background-color:rgba(255,255,255,0.8);');
   nouveau.innerHTML=this.innerHTML;//-- sans oublier l'ajout du texte à afficher
   document.body.appendChild(nouveau);//-- ajout à la page du container ainsi crée


   //-- et on indique un comportement(écouteur d'événement) lors du clic sur celui-ci
    // Fonction qui nous retourne à la taille initial
   nouveau.addEventListener('click',function(){
    document.getElementsByTagName('div')[0].parentNode.removeChild(document.getElementsByTagName('div')[0]);
   })
   });