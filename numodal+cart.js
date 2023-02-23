function validation(){
    var username = document.getElementById('nuname').value;
    var email = document.getElementById('nuemail').value;
    var number = document.getElementById('nunumber').value;
    var password = document.getElementById('nupwd').value;
    var cpassword = document.getElementById('nucpwd').value;

    var usercheck = /^[A-Za-z ]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if (usercheck.test(username)){
        document.getElementById('errornuname').innerHTML = " ";
    }
    else{
        document.getElementById('errornuname').innerHTML = "Please use only alphabets.";
        return false;
    }
    if (emailcheck.test(email)){
        document.getElementById('errornuemail').innerHTML = " ";
    }
    else{
        document.getElementById('errornuemail').innerHTML = "Please follow valid email syntax.";
        return false;
    }

    if (numbercheck.test(number)){
        document.getElementById('errornunumber').innerHTML = " ";
    }
    else{
        document.getElementById('errornunumber').innerHTML = "Invalid number.";
        return false;
    }

    if (passwordcheck.test(password)){
        document.getElementById('errornupwd').innerHTML = " ";
    }
    else{
        document.getElementById('errornupwd').innerHTML = "Please make at least an 8-character password with only alphabets, numericals and special characters.";
        return false;
    }

    if (cpassword.match(password)){
        document.getElementById('errornucpwd').innerHTML = " ";
    }
    else{
        document.getElementById('errornucpwd').innerHTML = "Password does not match.";
        return false;
    }
    

}


function closenu(){
    document.getElementById('nu-modal').style.display='none';
}


function cart() {
    alert("Item has been added to your cart!");
}