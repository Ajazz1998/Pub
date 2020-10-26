
       /*------  scroll   ---------*/

$(document).ready(function(){
    $(".category_item").click(function(){
        var catagory = $(this).attr("id");
        
        if(catagory == "all"){
            $(".items").hide();
            setTimeout(function(){
                $(".items").show();
            }, 300)
        } else {
            $(".items").hide();
            setTimeout(function(){
                $("." + catagory).show();
            }, 300)
        }
    });

    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            window.location.hash = hash;
          });
        } 
      });


       /*------   Animate   ---------*/

        
         $('.js--wp-1').waypoint(function(){
             $('.js--wp-1').addClass('animated fadeIn'); 
         }, {
             offset: '50%'
         });
      
         $('.js--wp-2').waypoint(function(){
          $('.js--wp-2').addClass('animated fadeInUp'); 
         }, {
             offset: '100%'
         });
      
         $('.js--wp-footer').waypoint(function(){
          $('.js--wp-footer').addClass('animated fadeInUp'); 
         }, {
             offset: '80%'
         });

         $('.js--wp-7').waypoint(function(){
          $('.js--wp-7').addClass('animated fadeInUp'); 
         }, {
             offset: '70%'
         });

         $('.js--wp-5').waypoint(function(){
          $('.js--wp-5').addClass('animated fadeInUp'); 
         }, {
             offset: '80%'
         });

         $('.js--wp-6').waypoint(function(){
          $('.js--wp-6').addClass('animated fadeInUp'); 
         }, {
             offset: '100%'
         });
         
         $('.js--wp-3').waypoint(function(){
             $('.js--wp-3').addClass('animated fadeIn'); 
         }, {
             offset: '50%'
         });
         
         $('.js--wp-4').waypoint(function(){
             $('.js--wp-4').addClass('animated pulse'); 
         }, {
             offset: '50%'
         });

         $('.js--wp-8').waypoint(function(){
             $('.js--wp-8').addClass('animated pulse'); 
         }, {
             offset: '50%'
         });
});

       /*------   Opening and Closing Navbar   ---------*/

document.getElementById("navicon").addEventListener("click", () => {

    const topbar = document.getElementById("topbar");
    
    if(topbar.style.display === "none"){
        topbar.style.display="block";
    }else{
        topbar.style.display="none";
    }
})


