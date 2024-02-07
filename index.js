var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var gmailError = document.getElementById("gmail-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){

    var name = document.getElementById("contact-name").value;
    console.log(name)

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-circle-check"></i>';
    return true;
}
function validatePhone(){

    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digit";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digit no";
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-circle-check"></i>';
    return true;
}
function validateEmail(){

    var gmail = document.getElementById("contact-gmail").value;

    if(gmail.length == 0){
        gmailError.innerHTML = "gmail is required";
        return false;
    }
    
    if (!gmail.match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/)) {
        gmailError.innerHTML = "Email invalid";
        return false;
    }
    gmailError.innerHTML = '<i class="fa fa-circle-check"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;
    if (left>0) {
        messageError.innerHTML = left +" " + "more character is required";
        return false;
    }
    messageError.innerHTML = '<i class="fa fa-circle-check"></i>';
    return true;

}

function validteForm(){

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "please fix the error ";
        setTimeout(function(){ submitError.style.display = "none"},3000)
        return false
    }
}