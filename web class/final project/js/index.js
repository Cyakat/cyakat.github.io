$(document).ready(() => {
    $("#submit-button").mousedown(function() {
        $("#submit-button").css("background", "hsl(204, 54%, 60%);");
    });
    $("#submit-button").mouseup(function() {
        $("#submit-button").css("background", "hsl(204, 54%, 50%);");
    });
});