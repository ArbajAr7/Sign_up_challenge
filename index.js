function CheckLength(l) {
    if(l<4)
    {
        return false;
    }else{
        return true;
    }
}

function CheckRegex(email) {
    const char1 = "@";
    const char2 = ".";

    if (email.includes(char1) && email.includes(char2)) {
        return true;
    } else {
         return false;
    }
}

function CheckPassword(passwordLength) {
    if(passwordLength<9)
        {
            return false;
        }else {
            return true;
        }
}

function ValidateForm(){
    event.preventDefault();
    let email = document.getElementById("form_email").value;
    document.getElementById("form_email").value="";
    let password = document.getElementById("form_password").value;
    document.getElementById("form_password").value="";
    let passwordLength = password.length;
    let emailLength = email.length;
    let flagg = 0;
    if(CheckLength(emailLength))
        {
            if(CheckRegex(email))
                {
                    document.getElementById("warning1").style.display="none";
                    console.log("email passed");
                    console.log(flagg);
                }else{
                    document.getElementById("warning1").style.display="block";
                    console.log("email failed rigs");
                    flagg = 1;
                }
        }else {
            document.getElementById("warning1").style.display="block";
            console.log("email failed length");
            flagg = 1;
        }
    if(CheckPassword(passwordLength))
        {
            document.getElementById("warning2").style.display="none";
            console.log("password is correct");
            console.log(flagg);
        }else{
            document.getElementById("warning2").style.display="block";
            console.log("password failed");
            flagg = 1;
        }

    if(flagg == 0) 
        {
            document.getElementById("okay").style.display="block";
            document.getElementById("warning1").style.display="none";
            document.getElementById("warning2").style.display="none";
        }
}

document.getElementById("submit_input").addEventListener("click", ValidateForm);

