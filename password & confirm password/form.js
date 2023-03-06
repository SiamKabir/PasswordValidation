
function validation(){

    var password = document.getElementById("password_c").value;
    var confirm_password = document.getElementById("password_cc").value;
    var show = document.getElementById('error');
    var len = password.length;

    if((password==confirm_password) && (len>= 8)){
        show.innerHTML= "Submitted!";
    }
    else{
        show.innerHTML = "Invalid";
    }
}