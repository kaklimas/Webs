

function showMessage(){    
    if (document.getElementById("message").innerHTML == "JOB DONE"){
        document.getElementsByClassName("button").innerHTML = "Hide"
        document.getElementById("message").innerHTML = "UPS sth gone wrong"    
    } else {
        document.getElementsByClassName("button").innerHTML = "Show"
        document.getElementById("message").innerHTML = "JOB DONE";
    }
    
    

}