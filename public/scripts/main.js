
$(document).ready(function() {

    // Add listener for slide 3
    // ------------------------------------------------------
    var myElement = document.getElementById("slide3");

    var elementWatcher = scrollMonitor.create( myElement );

    elementWatcher.enterViewport(function() {
        alert( 'I have entered the viewport' );
    });
    elementWatcher.exitViewport(function() {
        alert( 'I have left the viewport' );
    });
    // ------------------------------------------------------

    // Create slide transisitons clicking the navbar
    $('a[href*=\\#]').each(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname
        && this.hash.replace(/#/,'') ) {
        var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
        var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;
                $(this).click(function() {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                            $('html, body').animate({scrollTop: targetOffset}, 1000);
                            return false;
                });
            }
        }
    });

});

