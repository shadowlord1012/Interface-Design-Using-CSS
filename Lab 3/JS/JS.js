/*Moves the bullet across the screen when hovering over the fire button*/
function bulletMove(){
    var img = $("#Bullet"),
        width = img.get(0).width,
        distanceMoved = $(window).width(),
        duration = 5000;

    //Animates the bullet to move across the screen
    function animateBulllet() {
        img.css("left",450).animate({"left":distanceMoved},
            duration,function(){
            img.css("display", "none");
            $("#Fire").textContent = "Reload";
        });
    }
    animateBulllet();
}

/*readloads the page on click*/
function onClick(){
    window.location.reload();
}