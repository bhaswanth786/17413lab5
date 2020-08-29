function formValidation()
{
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
    var check = document.registration.check;
    if(allLetter(uname))
    {
        if(passid_validation(passid,7,12))
        {
            if(countryselect(ucountry))
            {
                if(allnumeric(uzip))
                {
                    if(ValidateEmail(uemail))
                    {
                        if(validsex(umsex,ufsex))
                        {
                            if(validcheck(check))
                            {
                                alert("Successful");
                            }
                        }
                    } 
                }
            }
        }
    }
    return false;
}
function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    var letters = /^[0-9a-zA-Z]+$/;
    if(passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty/length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    if(passid.value.match(letters))
    {
        return true;
    }
    alert('Password must contain alphanumeric characters');
    passid.focus();
    return false;
}
function allLetter(uname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else if(uname.value.length==0)
    {
        alert('Your name should not empty');
        uname.focus();
        return false;
    }
    else
    {
        alert('Your name must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function countryselect(ucountry)
{
    if(ucountry.value == "Default")
    {
        alert('Select your state from the list');
        ucountry.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function allnumeric(uzip)
{ 
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers) && uzip.value.length==10)
    {
        return true;
    }
    else
    {
        alert('Phone must have numeric characters and 10 digits');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function validsex(umsex,ufsex)
{
    x=0;
    if(umsex.checked) 
    {
        x++;
    }
    if(ufsex.checked)
    {
        x++; 
    }
    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        // alert('Form Successfully Submitted');
        // window.location.reload()
        return true;
    }
}
function validcheck(check)
{
    if(check.checked) 
    {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;
    }
    else
    {
        alert('Please accept terms and conditions');
        check.focus();
        return false;
    }
}
