document.getElementById("top_chefs").disabled=true;


 
 var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,

  grabCursor: true,
  speed: 5000,


  autoplay: true,
  effect: "slide",
  
});



/*linens*/
document.getElementById("price").disabled=true;
document.getElementById("left").disabled=true;






<!--price slider-->
$(document).ready(function() {
          $("#slider").slider({
              animate: true,
              value:1,
              min: 1,
              max: 70,
              step: 1,
              slide: function(event, ui) {
                  update(1,ui.value); //changed
              }
          });

          $("#slider2").slider({
              animate: true,
              value:110,
              min: 110,
              max: 440,
              step: 110,
              slide: function(event, ui) {
                  update(2,ui.value); //changed
              }
          });

          //Added, set initial value.
          $("#amount").val(0);
          $("#duration").val(0);
          $("#amount-label").text(0);
          $("#duration-label").text(0);
          
          update();
      });

    
      function update(slider,val) {

        var $amount = slider == 1?val:$("#amount").val();
        var $duration = slider == 2?val:$("#duration").val();

     
         $total = "$" + ($amount * $duration);
         $( "#amount" ).val($amount);
         $( "#amount-label" ).text($amount);
         $( "#duration" ).val($duration);
         $( "#duration-label" ).text($duration);
         $( "#total" ).val($total);
         $( "#total-label" ).text($total);

         $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$duration+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
      }




