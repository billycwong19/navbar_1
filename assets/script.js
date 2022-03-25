// Working from W3 example
var input = document.getElementById("searchBar");

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});