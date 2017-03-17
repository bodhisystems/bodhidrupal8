/**
 * Created by smaharjan on 1/26/2017.
 */
(function($, Drupal){
    Drupal.behaviors.slideShow = {
        attach: function(context, settings){
            $(document).ready(function(){
                $('.flexslider').flexslider({
                    animation: "slide",
                    directionNav: true,
                    slideshow: false,
                });
            });
        }
    }

})(jQuery, Drupal);