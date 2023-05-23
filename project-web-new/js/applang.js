// progress bars
$(document).ready(function(){

    $(".mobile-nav i").click(function(){
        $(".site-nav-menu").toggleClass("mobile-menu");
    });


var waypoint = new Waypoint({
    element: document.getElementById('experience'),
    handler: function() {
  
      var p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute("style", "width:50%;transition:1s all;");
      p[1].setAttribute("style", "width:20%;transition:1.5s all;");
      p[2].setAttribute("style", "width:10%;transition:1.7s all;");
      p[3].setAttribute("style", "width:8%;transition:2s all;");
      p[4].setAttribute("style", "width:7%;transition:2.3s all;");
      p[5].setAttribute("style", "width:5%;transition:2.5s all;");
  
  
    },
     offset: '90%'
  });
 
});


