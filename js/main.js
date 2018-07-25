// Hamburger Menu
$(document).ready(function() {
    $("#menu").mmenu();

    $("#menu-close").on('click', function(e){
      e.preventDefault();
      $("#menu").hide(3000);
    })

 });
