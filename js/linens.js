/*vid*/
 
 
 const text = baffle(".data");
    text.set({
       
        characters : '~!@#$%^&*()-+=[]{}|;:,./<>?+-•~!=*',
        speed: 120
    });
    text.start();
    text.reveal(4000);

$(function(){
	var	btn = $(".slider__btn");
	
	btn.on("click",function(){
		$(".slider__item").first().clone().appendTo(".slider");
		$(".slider__image").first().css({transform: "rotateX(-180deg)", opacity: 0});
		setTimeout(function(){
			$(".slider__item").first().remove();
		},200);
	});
});


$('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');

 });
 
 
 
 function save(){
var first=document.getElementById("exampleInput").value;
var mail=document.getElementById("exampleInputEmail1").value;
var com=document.getElementById("exampleFormControlTextarea1").value;
console.log(first.length);
if(first.length=== 0){alert("please fill the name section")}
else if(mail.length===0){alert("please fill the email section")}
else if(com.length===0){alert("please fill the message section")}
	else{alert("your query is successfully delivered to us we will get back to you soon");
	
	}
	
}







//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 
 
 
   wow = new WOW(
      {
        /*animateClass: 'animated',
        offset:       100,*/
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    /*document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };*/



  





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




