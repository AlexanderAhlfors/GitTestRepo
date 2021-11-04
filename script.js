/*function changePage(){
    .innerHTML z-index ="99999";
} */
var x = 0;

$("#page1").hover(function(){
    document.getElementById("page1").style.zIndex = "9999";
    document.getElementById("page2").style.zIndex = "3";
    document.getElementById("page3").style.zIndex = "2";
    document.getElementById("page4").style.zIndex = "1";
    x = 1;
    
});

$("#page2").hover(function(){
    document.getElementById("page1").style.zIndex = "4";
    document.getElementById("page2").style.zIndex = "99999";
    document.getElementById("page3").style.zIndex = "2";
    document.getElementById("page4").style.zIndex = "1";
    x = 2;
});

$("#page3").hover(function(){
    document.getElementById("page1").style.zIndex = "4";
    document.getElementById("page2").style.zIndex = "3";
    document.getElementById("page3").style.zIndex = "999999";
    document.getElementById("page4").style.zIndex = "1";
    x = 3;
});

$("#page4").hover(function(){
    document.getElementById("page1").style.zIndex = "4";
    document.getElementById("page2").style.zIndex = "3";
    document.getElementById("page3").style.zIndex = "2";
    document.getElementById("page4").style.zIndex = "999999";
    x = 4;
});

$("#prevButton").hover(function(){
    if(x===1){
        document.getElementById("page1").style.zIndex = "4";
        document.getElementById("page2").style.zIndex = "3";
        document.getElementById("page3").style.zIndex = "2";
        document.getElementById("page4").style.zIndex = "1";
    }
    else if(x===2){
        document.getElementById("page1").style.zIndex = "9999";
        document.getElementById("page2").style.zIndex = "3";
        document.getElementById("page3").style.zIndex = "2";
        document.getElementById("page4").style.zIndex = "1";
    }
    else if(x===3){
        document.getElementById("page1").style.zIndex = "4";
        document.getElementById("page2").style.zIndex = "9999";
        document.getElementById("page3").style.zIndex = "2";
        document.getElementById("page4").style.zIndex = "1";
    }
    else if(x===4){
        document.getElementById("page1").style.zIndex = "4";
        document.getElementById("page2").style.zIndex = "3";
        document.getElementById("page3").style.zIndex = "9999";
        document.getElementById("page4").style.zIndex = "1";
    }
});

$("#nextButton").hover(function(){
    if(x===1){
        document.getElementById("page1").style.zIndex = "4";
        document.getElementById("page2").style.zIndex = "999";
        document.getElementById("page3").style.zIndex = "2";
        document.getElementById("page4").style.zIndex = "1";
    }
    else if(x===2){
        document.getElementById("page1").style.zIndex = "4";
        document.getElementById("page2").style.zIndex = "3";
        document.getElementById("page3").style.zIndex = "999";
        document.getElementById("page4").style.zIndex = "1";
    }
    else if(x===3){
        document.getElementById("page1").style.zIndex = "4";
        document.getElementById("page2").style.zIndex = "3";
        document.getElementById("page3").style.zIndex = "999";
        document.getElementById("page4").style.zIndex = "1";
    }
    else if(x===4){
        document.getElementById("page1").style.zIndex = "4";
        document.getElementById("page2").style.zIndex = "3";
        document.getElementById("page3").style.zIndex = "2";
        document.getElementById("page4").style.zIndex = "999";
    }
});