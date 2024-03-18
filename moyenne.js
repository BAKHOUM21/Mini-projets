var formValid = document.getElementById('bouton_envoi');
var note1 = document.getElementById('note1');
var missNote1 = document.getElementById('missNote1');
var note2 = document.getElementById('note2');
var missNote2 = document.getElementById('missNote2');
var note3 = document.getElementById('note3');
var missNote3 = document.getElementById('missNote3');

formValid.addEventListener('click', validation);
function validation(event){
    //Si le champ prenom est vide
    if (note1.validity.valueMissing){
        event.preventDefault();
        missNote1.textContent = alert("Veuillez renseigner la note1");
        
    }
    //Si le champ nom est vide
    else if (note2.validity.valueMissing){
        event.preventDefault();
        missNote2.textContent = alert("Veuillez renseigner la note2");
        
    }
    //Si le champ email est vide
    else if (note3.validity.valueMissing){
        event.preventDefault();
        missNote3.textContent = alert("Veuillez renseigner la note3");
        
    }
    //Si le formulaire est entierement rempli calculer la moyenne
    else{
        var x= parseInt(note1.value);
        var y= parseInt(note2.value);
        var z= parseInt(note3.value);
        var som= x+y+z;
        alert("La moyenne est: \n"+parseInt(som/3));
    }
}
