$(function () {
   $(".listTitle").click(function () {
       $(this).next("ul").slideToggle().siblings("ul").slideUp();
   }) 
});