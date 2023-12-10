$(document).ready(function() {
    var count = document.querySelectorAll('div.project').length;
    var btnElement = document.getElementById("load-more");
    if (count > 6)
    {
        btnElement.style.display = "block";
    }
    else
    {
        btnElement.style.display = "none";
    }

})