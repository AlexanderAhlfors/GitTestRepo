/*function changePage(){
    .innerHTML z-index ="99999"
} */

$("#page1").hover(function(){
    $("#page1").style.zIndex = "9999";
    $("#page2").style.zIndex = "1";
    $("#page3").style.zIndex = "1";
    $("#page4").style.zIndex = "1";
});

$("#page2").hover(function(){
    $("#page1").style.zIndex = "1";
    $("#page2").style.zIndex = "99999";
    $("#page3").style.zIndex = "1";
    $("#page4").style.zIndex = "1";
});

$("#page3").hover(function(){
    $("#page1").style.zIndex = "1";
    $("#page2").style.zIndex = "1";
    $("#page3").style.zIndex = "999999";
    $("#page4").style.zIndex = "1";
});

$("#page4").hover(function(){
    $("#page1").style.zIndex = "1";
    $("#page2").style.zIndex = "1";
    $("#page3").style.zIndex = "1";
    $("#page4").style.zIndex = "999999";
});