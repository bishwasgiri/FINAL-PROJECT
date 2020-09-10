// Form validation
function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error_message = document.getElementById('error_message');
    var text;
    error_message.style.padding = "8px";
    if(name.length < 5){
        text = "Please Enter the valid name(length > 5)";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter the valid email address";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 20){
        text = "Please Enter Greater than 20 Characters";
        error_message.innerHTML = text;
        return false;

    }
    alert("Form submitted successfully");
    return true;

}