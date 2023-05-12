
function changeColor() {
    var currentColor = document.getElementById("helloworld").style.color;
    var newColor = selectNewColor(currentColor);
    document.getElementById("helloworld").style.color = newColor;
}


function selectNewColor(currentColor) {
    var newColor = "";

    if (currentColor === "") {
        newColor = "red";
    } else if (currentColor === "red") {
        newColor = "purple";
    } else if (currentColor === "purple") {
        newColor = "green";
    } else if (currentColor === "green") {
        newColor = "";
    }
    
    return newColor;

}