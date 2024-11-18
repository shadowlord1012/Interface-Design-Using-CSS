/** Changes the bag to the sour kind**/
function onClick(){
    if($(".Original_Bag_Class").is(":visible")){
        $(".Original_Bag_Class").css("display", "none");
        $(".Sour_Bag_Class").css("display", "grid");
    }
    else{
        $(".Sour_Bag_Class").css("display", "none");
        $(".Original_Bag_Class").css("display", "grid");
    }
}

/** changes the bag to the nutrition's table on back depending on bag**/
function onBagClick(){
    if($(".Original_Bag_Class").is(":visible") && $("#original_bag").attr("src") === "./img/original%20bag%20182g.png"){
        $("#original_bag").attr("src","./img/back%20side%20original%20128g.png")
    }
    else if ($(".Original_Bag_Class").is(":visible") && $("#original_bag").attr("src") === "./img/back%20side%20original%20128g.png"){
        $("#original_bag").attr("src","./img/original%20bag%20182g.png")
    }
    else if($(".Sour_Bag_Class").is(":visible") && $("#sour_bag").attr("src") === "./img/Sour%20bag%20182g.png"){
        $("#sour_bag").attr("src","./img/back%20side%20sour%20182g.png")
    }
    else if ($(".Sour_Bag_Class").is(":visible") && $("#sour_bag").attr("src") === "./img/back%20side%20sour%20182g.png"){
        $("#sour_bag").attr("src","./img/Sour%20bag%20182g.png")
    }
}