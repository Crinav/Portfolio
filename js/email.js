$(document).ready(function() {
    function sendEmail(email, prenom, nom, entreprise, message){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'christophe.navarro@epitech.eu',
        From : email,
        Subject : "Contact depuis mon Portfolio de la part de : "+ prenom+' '+nom+'entreprise : '+entreprise,
        Body : message
    }).then(
      message => alert(message)
    );}
})();