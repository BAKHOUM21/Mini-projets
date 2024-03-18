var formValid = document.getElementById('bouton_envoi');
var prenom = document.getElementById('prenom');
var missPrenom = document.getElementById('missPrenom');
var nom = document.getElementById('nom');
var missNom = document.getElementById('missNom');
var email = document.getElementById('mail');
var missEmail = document.getElementById('missEmail');

formValid.addEventListener('click', validation);

function validation(event){
    //Si le champ prenom est vide
    if (prenom.validity.valueMissing){
        event.preventDefault();
        missPrenom.textContent = alert("Veuillez saisir votre Prénom");
        
    }
    //Si le champ nom est vide
    else if (nom.validity.valueMissing){
        event.preventDefault();
        missNom.textContent = alert("Veuillez saisir votre Nom");
        
    }
    //Si le champ email est vide
    else if (email.validity.valueMissing){
        event.preventDefault();
        missEmail.textContent = alert("Veuillez saisir votre adresse email");
        
    }
    //Si le formulaire est entierement rempli
    else{
        alert("Les informations saisies sont conformes et sont bien enregistrées.");
    }
}
