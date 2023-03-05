//Auto fontSize
let fontsize = 1;
//fontIncrement
$("#increaseFont").click(function () { 
    if (fontsize < 2){
        fontsize += 0.5 ;
        $("body").css( "font-size", fontsize+ "rem" );
    }else {
        $("body").css( "font-size", fontsize+"rem" );
    }
});
// normalFont
$("#normalFont").click(function () { 
    $("body").css( "font-size", "1rem" );
});
//fontDecrement
$("#decreaseFont").click(function () { 
    if (fontsize > 1){
        fontsize -= 0.5;
        $("body").css( "font-size", fontsize+ "rem" );
    }else if (fontsize = 1){
        $("body").css( "font-size", fontsize + "rem" );
    }
});

//nightTime
function dark() {
    // body
    $("body").attr("class", "bg-darker");
    // navColor
    $(".navColor").css("color", "#ffffff");
    // svgDropdown
    $(".dropdoenSvg").addClass("svgDark");
    // iconcolor
    $(".fa-2sx").css("color", "#ffffff");
    // dropDown-menue
    $(".dropdown-menu").css("background-color", "#ffffff");
    // btnFontsize    
    $(".btn").removeClass("btn-outline-dark").addClass("btn-outline-light");
    // hr
    $(".m-0").removeClass("text-primary").addClass("text-light");
    // annioncment
    $("#bg-info").toggleClass("bg-light");
}
//daylight
function light() {
    // body
    $("body").removeClass("bg-darker");
     // navColor
    $(".navColor").css("color", "");
    // svgDropdown
    $(".dropdoenSvg").removeClass("svgDark");
    // iconcolor
    $(".fa-2sx").css("color", "");
    // dropDown-menue
    $(".dropdown-menu").css("background-color", "");  
    // btnFontsize
    $(".btn").removeClass("btn-outline-light").addClass("btn-outline-dark"); 
    // hr
    $(".m-0").removeClass("text-light").addClass("text-dark"); 
    // annioncment
    $("#bg-info").toggleClass("bg-light");
}
//autoTime
function autoMode() {
    let currentDate = new Date();
    let time = currentDate.getHours(); 
    if ( time > 18){
        dark();
    }else{
        light();
    } 
}
// nightMode
$("#nightTime").click(function () { 
    dark();
});
// dayMode
$("#daylight").click(function () { 
    light();
});
// onClickAuto
$("#autoMode").click(function () { 
    autoMode();
});
//autoMode
$(document).ready(function () { 
    autoMode();  
    $("#currentDte").text(new Date().toLocaleDateString());
});
