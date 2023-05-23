 $(document).ready(function(){
         $(".mobile-nav i").click(function(){
               $(".site-nav-menu").toggleClass("mobile-menu");
           });
     
   
  
   var typed = new Typed(".element", {
       //strings: ["John Doe", "a Developer","a Designer","a Businessman"],
       strings: ["Qu’est-ce que L’intelligence artificielle (IA) ?", "Quels sont les domaines de l'intelligence artificielle ?","Top 6 des langages de programmation utilisés dans l'IA","a"],
       smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
       loopCount: Infinity,
       startDelay: 1000
     });});
   