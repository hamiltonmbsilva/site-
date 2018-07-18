$(document).ready(function(){
var header = $('.main_banner ');

var backgrounds = new Array(
    'url(https://img3.goodfon.com/original/1366x768/9/81/computer-programmer-computer.jpg)',
    'url(https://img4.goodfon.com/original/1366x768/7/4a/computer-programming-codes-screen.jpg)',
    'url(https://img4.goodfon.com/original/1366x768/f/c6/noutbuk-telefon-tekhnika-kofe-bloknot-ruchka.jpg)',
	'url(https://img3.goodfon.com/original/1366x768/0/e4/apple-macbook-ipad-iphone.jpg)'
  
  
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 5000);

header.css('background-image', backgrounds[0]);
});

/* Começo tIMELINE sCROLL */

/**********************Scroll Animation "START"************************************/
$(document).ready(function(){
    var $animation_elements = $('.anim');
    var $window = $(window);
    
    function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
    (element_top_position <= window_bottom_position)) {
    $element.addClass('animated');
    } else {
    $element.removeClass('animated');
    }
    });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    });
    /**********************Scroll Animation "END"************************************/
    
    /**********************Change color of center aligned animated content small Circle  "START"************************************/
    $(document).ready(function(){
        $(" .debits").hover(function(){
            $(" .center-right").css("background-color", "#4997cd");
            }, function(){
            $(" .center-right").css("background-color", "#fff");
        }); 
    });
    $(document).ready(function(){
        $(".credits").hover(function(){
            $(".center-left").css("background-color", "#4997cd");
            }, function(){
            $(".center-left").css("background-color", "#fff");
        }); 
    });
    /**********************Change color of center aligned animated content small Circle  "END"************************************/

    /**Contato */
    $(document).ready(function(){ 
        $('#characterLeft').text('140 characters left');
        $('#message').keydown(function () {
            var max = 140;
            var len = $(this).val().length;
            if (len >= max) {
                $('#characterLeft').text('You have reached the limit');
                $('#characterLeft').addClass('red');
                $('#btnSubmit').addClass('disabled');            
            } 
            else {
                var ch = max - len;
                $('#characterLeft').text(ch + ' characters left');
                $('#btnSubmit').removeClass('disabled');
                $('#characterLeft').removeClass('red');            
            }
        });    
    });
    