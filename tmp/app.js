
function change(color){
    document.getElementById('img').style.background = color;
}
function add(){
    let prop = "Item was added to box, properties: color: " + document.getElementById('img').style.background + ", price: 123$";
    alert(prop);
}