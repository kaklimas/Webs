

function check(){
    let form = document.getElementById("form");
    
    let login = form.elements["login"].value;
    let password = form.elements["password"].value;

    let h1 = document.getElementById("message")

    if (login == '' || password == ''){
        h1.innerHTML = "login or password is empty";
    }
    else {
        h1.innerHTML = "checking...";
    }


}