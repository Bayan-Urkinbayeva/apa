function barEvent() {
        var x = document.getElementById("menu");
        if(x.style.display === "none"){
            x.style.display = "block";
        } else{
            x.style.display = "none";
        }
}
function openTab(btnName, tabName) {
    for(i=20; i > 17; i--){
        document.getElementById("A20" + i).style.display= "none";
        document.getElementById("B" + i).style.backgroundColor= "firebrick";
    }
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(btnName).style.backgroundColor= "black";
}

function openEvTab(btnName, tabName) {
    for(i=20; i > 17; i--){
        document.getElementById("E20" + i).style.display= "none";
        document.getElementById("E" + i).style.backgroundColor= "firebrick";
    }
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(btnName).style.backgroundColor= "black";
}












