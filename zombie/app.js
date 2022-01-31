

function display(){
    let display_butt = document.getElementById("display-butt");
    let form1 = document.getElementById("form1");


    if (display_butt.innerHTML == "Show"){
        display_butt.innerHTML = "Hide";
        form1.style.display = 'block';
    } else {
        display_butt.innerHTML = "Show";
        form1.style.display = 'none';
        
    }
}