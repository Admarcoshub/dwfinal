jQuery(document).ready(function ($) {

            var jssor_1_options = {
              $AutoPlay: true,
              $AutoPlaySteps: 4,
              $SlideDuration: 500,
              $SlideWidth: 200,
              $SlideSpacing: 3,
              $Cols: 4,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 4,
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingX: 1,
                $SpacingY: 1
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 809);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);

            $(window).scroll(function() {
                if ($(document).scrollTop() > 30) {
                  $('.flat-icons').addClass('shrink');
                } else {
                  $('.flat-icons').removeClass('shrink');
                }
            }); 

            $(window).scroll(function() {
                if ($(document).scrollTop() > 30) {
                  $('.logo').addClass('shrink')
                  $('.nav-fixed').addClass('whitenav')
                  $('.hell').addClass('cheese')
                  $('.caret').addClass('caret2')
                } else {
                  $('.logo').removeClass('shrink')
                  $('.nav-fixed').removeClass('whitenav')
                  $('.hell').removeClass('cheese')
                  $('.caret').removeClass('caret2')
                }
            });   
        });

