function check() {
    // Current data
    let map = new Map();
    map.set('doubleK1', 'abc');
    map.set('doubleK2', '2');
    
    let form = document.getElementById("logIn");
    let login = form.elements["login"].value;
    let password = form.elements["password"].value;

    for (let key of map.keys()){
        if (login == key && password == map.get(key) ){
            document.getElementById("message").innerHTML = "Good";
            break;
        } else {
            document.getElementById("message").innerHTML = "wrong"
        
        }
    }
}
