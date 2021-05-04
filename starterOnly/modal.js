function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la modal 
const btnClose = document.querySelector(".close");

btnClose.addEventListener("click", function(){
    modalbg.style.display = "none";
});

// Ecouter l'évenement Submit
form.addEventListener("submit" , function(e){
  
  if (validPrenom() && validNom() && validEmail() && validBirth()){
    form.submit();
  } else {
    e.preventDefault();
    alert("les champs ne sont valides")
  }
  
});   

// Vérifier si l'input à au minimum 2 caractères
const isTwoCharacters = function(input){

  if ((input.value.length) >= 2) {
    return true;
  } else {
    return false;
  }
}

// Vérifier si c'est un email .
const isEmail = function(input){

  var emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );
  if (emailRegExp.test(input.value)) {
    return true;
  } else {
    return false;
  }
};

//vérifier si le champ est vide .
const isEmpty = function(input) {
  if (input.value == ""){
    return true;
  } else {
    return false;
  }
  
};

// Vérifier le champ prénom

const validPrenom = function(){

  if (isTwoCharacters(form.first)){
    form.first.parentNode.classList.remove("error");
    return true;
  } else {
    form.first.parentNode.classList.add("error");
    return false;
  }

};

// Vérifier le champ nom

const validNom = function(){

  if (isTwoCharacters(form.last)){
    form.last.parentNode.classList.remove("error");
    return true;
  } else {
    form.last.parentNode.classList.add("error");
    return false;
  }

};

// Vérifier le champ Email 

const validEmail = function(){

  if (isEmail(form.email)){
    form.email.parentNode.classList.remove("error");
    return true;
  } else {
    form.email.parentNode.classList.add("error");
    return false;
  }

};

// Vérifier si une date de naissance est saisie et valide

const validBirth = function() {

  var dateEntred = new Date(form.birthdate.value);
  var dateToday = new Date();
  
  if(isEmpty(form.birthdate) || (dateEntred.getTime() > dateToday.getTime())) {
    form.birthdate.parentNode.classList.add("error");
    return false;
  } else {
    form.birthdate.parentNode.classList.remove("error");
    return true;
  }
};