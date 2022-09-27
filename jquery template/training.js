$(document).ready(function() {
    $("button").click(function(){
            alert("coming soon");
    });

    $("p").hover(function(){  
        $(this).css("background-color", "coral");  
        }, function(){  
        $(this).css("background-color", "white");
    });

    $("button").click(function(){
        alert( "redirecting to udemy courses " );
    });

    $("input").keydown(function(){
        $("input").css("background-color", "pink");
    });
    $("input").keyup(function(){
        $("input").css("background-color", "grey");
    });  
    $("form").submit(function(){
        alert("Submitted Successfully");
    });
    $("h2").toggle(
        function(){$("h2").css({"color": "red"});},
        function(){$("h2").css({"color": "blue"});},
        function(){$("h2").css({"color": "green"});
    });
    $("input").change(function(){
        alert("The text has been changed.");
    });

    $("#city").change(function(){
        var name= $(this).val();
        alert(name);
    });   
    $("input").focus(function(){
        $(this).next( "span" ).css("display", "inline",).fadeOut(1000);     
    });
    // $(window).on("unload", handler){
    //     alert("Thanks for visit");
    //   };
    var x = 0;
    $(window).resize(function(){
        $("h56").text(x += 1);
    });
});
