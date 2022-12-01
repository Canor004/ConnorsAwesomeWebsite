function validateEmail() {
    let valid = true;
    let alertMessage = "";
    let x = document.getElementById("email").value;
    if (!x.length > 0) {
        alertMessage += " Email must be filled out.";
        valid = false;
    }
    if(!x.includes("@")){
        alertMessage += " Email must contain an @ symbol."
        valid = false;
    } 
    if (!(x.substring(x.indexOf("@")).length > 1)){
    alertMessage += " @ symbol must be followed by atleast 1 character."
    valid = false;
    }
    if(!valid){
    alert(alertMessage);
    }
    return valid;
}

function validateNumber(){
    let valid = true;
    let num = document.getElementById("years").value;
    let message = "Input OK!"
    if(!(num>0 && num<=10)){
        message = "Input is not between 1 and 10.";
    }
    document.getElementById("print").innerHTML = message;
}