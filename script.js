$(document).ready(function(){
	

	//hide the <h1> "Welcome"
	$(document).ready(function(){
    $("#hide").click(function(){
        $("h1").hide();
    });
});
	

});

	$(function() {
    $("img")
        .mouseover(function() { 
            $(this).attr("src", "images/03.jpg");
        })
        .mouseout(function() {
           $(this).attr("src", "images/04.jpg");
        });
});


	$(document).ready(function(){
    $("p").hover(function(){
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", "white");
    });
    
    $(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        
    });
});

    $(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeOut();
        
    });
});

    $(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


});
