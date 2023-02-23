function validation(){
    var name = document.getElementById('addname').value;
    var street = document.getElementById('addstreet').value;
    var country = document.getElementById('addcountry').value;
    var state = document.getElementById('addstate').value;
    var city = document.getElementById('addcity').value;
    var code = document.getElementById('addcode').value;
    var number = document.getElementById('addnumber').value;

    var namecheck = /^[A-Za-z ]{3,50}$/;
    var streetcheck = /^[A-Za-z0-9#&(), ]{5,50}$/;
    var countrycheck = /^[A-Za-z ]{4,50}$/;
    var statecheck = /^[A-Za-z ]{4,50}$/;
    var citycheck = /^[A-Za-z ]{3,50}$/;
    var codecheck = /^[0-9]{3,6}$/;
    var numbercheck = /^[0-9]{7,12}$/;

    if (namecheck.test(name)){
        document.getElementById('erroraddname').innerHTML = " ";
    }
    else{
        document.getElementById('erroraddname').innerHTML = "Please use only alphabets.";
        return false;
    }
    if (streetcheck.test(street)){
        document.getElementById('erroraddstreet').innerHTML = " ";
    }
    else{
        document.getElementById('erroraddstreet').innerHTML = "Please avoid special characters that are not allowed.";
        return false;
    }

    if (countrycheck.test(country)){
        document.getElementById('erroraddcountry').innerHTML = " ";
    }
    else{
        document.getElementById('erroraddcountry').innerHTML = "Invalid name.";
        return false;
    }

    if (statecheck.test(state)){
        document.getElementById('erroraddstate').innerHTML = " ";
    }
    else{
        document.getElementById('erroraddstate').innerHTML = "Invalid name.";
        return false;
    }

    if (citycheck.test(city)){
        document.getElementById('erroraddcity').innerHTML = " ";
    }
    else{
        document.getElementById('erroraddcity').innerHTML = "Invalid name.";
        return false;
    }

    if (codecheck.test(code)){
        document.getElementById('erroraddcode').innerHTML = " ";
    }
    else{
        document.getElementById('erroraddcode').innerHTML = "Invalid pin/zip code.";
        return false;
    }
    
    if (numbercheck.test(number)){
        document.getElementById('erroraddnumber').innerHTML = " ";
    }
    else{
        document.getElementById('erroraddnumber').innerHTML = "Invalid phone number.";
        return false;
    }

}


function closeadd(){
    document.getElementById('addmodal').style.display='none';
}

function reveal(){
    document.getElementById('cont').style.display='block';
}