$(document).ready(function(){


//mouseenter/mouseleave for lower nav
$(".page1").mouseenter(function(){
        $(".project-name1").fadeTo("fast", 1);
    });
$(".page1").mouseleave(function(){
        $(".project-name1").fadeTo("fast", 0);
    });


$(".page2").mouseenter(function(){
        $(".project-name2").fadeTo("fast", 1);
    });
$(".page2").mouseleave(function(){
        $(".project-name2").fadeTo("fast", 0);
    });


$(".page3").mouseenter(function(){
        $(".project-name3").fadeTo("fast", 1);
    });
$(".page3").mouseleave(function(){
        $(".project-name3").fadeTo("fast", 0);
    });


$(".page4").mouseenter(function(){
        $(".project-name4").fadeTo("fast", 1);
    });
$(".page4").mouseleave(function(){
        $(".project-name4").fadeTo("fast", 0);
    });


$(".page5").mouseenter(function(){
        $(".project-name5").fadeTo("fast", 1);
    });
$(".page5").mouseleave(function(){
        $(".project-name5").fadeTo("fast", 0);
    });


$(".page6").mouseenter(function(){
        $(".project-name6").fadeTo("fast", 1);
    });
$(".page6").mouseleave(function(){
        $(".project-name6").fadeTo("fast", 0);
    });


/*upper right nav div click function
$(".nav-element").click(function() {
  window.location = $(this).find("a").attr("about.html"); 
  return false;
});*/











//jQuery Function Number 4, hover
//jQuery Function Number 5, css
$(".allergy-name").hover(function(){
	$(".allergy-name").css("color","#031261")
});

//jQuery Function Number 6, click
//jQuery Function Number 7, text
$(".icon").click(function(){
        $(".bio").text("LOL");
    });

//jQuery Function Number 8, addClass
$("#header").click(function(){
        $(".date").addClass("event");
    });

});
