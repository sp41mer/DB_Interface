/**
 * Created by danilakimov on 18.11.16.
 */

$( ".show__marks" ).on("click", function() {
  $(this).parent().find( ".marks__all" ).toggle();
});

$( ".blocks" ).on("click", function() {
  window.location = $(this).find( "a" ).attr('href');
});


$('.dropdown-toggle').dropdown()