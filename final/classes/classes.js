var main = function(){


           // for the accordian
           $(".accordian > li > div").click(function(){

if(false== $(this).next().is(':visible')){
$('.accordian ul').slideUp(300);
}
$(this).next().slideToggle(300);

});






//this will allow the navbar to hide when scrolling but show when you scroll up

var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('#menu_bar').stop().slideToggle("fast");
        up = !up;

    } else if(newscroll < mypos && up) {
        $('#menu_bar').stop().slideToggle("fast");
        up = !up;
    }
    mypos = newscroll;
});







};

$(document).ready(main);
