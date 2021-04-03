// spy and scroll menu boogey
$("#stamps li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault()

   // store hash
   var hash = this.hash

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top -50
     }, 1000, function(){
       window.location.hash = hash -50
     })

})
