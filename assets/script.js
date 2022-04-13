// Working from W3 example
var input = document.getElementById("searchBar");

input.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

var x = 2;
if (x=2){
    x-1
}