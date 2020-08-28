const App=()=>
{
    this.data = {};
    const select = () =>
    {
        this.data.form = document.getElementById("mainform");
        this.data.radio = document.querySelectorAll('input[name="gender"]');
        this.data.check = document.querySelectorAll('input[name="check"]');
        this.data.textbox = document.querySelectorAll(".textbox");
        this.data.select = document.querySelector("#state");
    };
    select();
    const isNotEmpty=()=>
    {
        let textIsFilled = Array.from(this.data.textbox).every(el =>
        {
            return el.value.length !== 0;
        });
        if(!textIsFilled)
        {
            alert("Please enter your email and phone and name");
            return false;
        }
        let radioIsChecked = false;
        Array.from(this.data.radio).some(el=>
        {
            radioIsChecked = el.checked;
            return el.checked;
        });
        if(!radioIsChecked)
        {
            alert("Please select your gender");
            return false;
        }
        
        if(this.data.select.value == "default")
        {
            alert("Please choose your state");
            return false;
        }

        let checkIsChecked = false;
        Array.from(this.data.check).some(el=>
        {
            checkIsChecked = el.checked;
            return el.checked;
        });
        if(!checkIsChecked)
        {
            alert("Please accept the terms and conditions");
            return false;
        }
        return true;
    };
  
    const matchesPattern=()=>
    {
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const name = document.getElementById("name");
        // if(([a-zA-Z]+).test(name.value))
        // {
        //     alert("Enter valid name!");
        //     return false;
        // }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
        {
            alert("Enter valid email!");
            return false;
        }
        if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value))
        {
            alert("Enter valid phone!");
            return false;
        }
        
        return true;
    };
    const runChecks=()=>
    {
        let a = isNotEmpty();
        let b = matchesPattern();
        return a && b;
    };
    const commands = {};
    commands.submit = document.querySelector('button[type="submit"]');
    commands.submit.addEventListener("click",event=>
        {
            event.preventDefault();
            const result = runChecks();
            if(result) alert("Success!");
        },
        {
            capture: true
        }
    );
  };
  window.onload = () => {
    App();
  };