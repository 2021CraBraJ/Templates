$(function() {
    //Variables
    $.support.transition = false
    var Application = Application || {};
    $("#email-input").on('input', function() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!(re.test($(this).val()))) {
            $(".invalid-email").show();
        } else if ($(".invalid-email").is(":visible")) {
            $(".invalid-email").hide();
        }
    });
    $("#reset-email").on('input', function() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!(re.test($(this).val()))) {
            $(".invalid-reset-email").show();
        } else if ($(".invalid-reset-email").is(":visible")) {
            $(".invalid-reset-email").hide();
        }
    });
    $("#password-input").on('input', function() {
        var re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
        if (!(re.test($(this).val()))) {
            $(".invalid-password").show();
        } else if ($(".invalid-password").is(":visible")) {
            $(".invalid-password").hide();
        }
    });
    $('[data-tooltip="true"]').tooltip();
    $(window).resize(function() {
        if (!(window.screen.width <= 480)) {
            $("#menu").removeAttr("style")
        } else {
            $("#menu").removeAttr("style")
        }
    });
    $(".header-menu-icon").click(function() {
        if (window.screen.width <= 480) {
            $("#menu").fadeToggle(200);
        } else {
            $("#menu").clearQueue();
            if ($("#menu").css("left") == "-400px" || !($("#menu").is(":visible"))) {
                $("#menu").animate({
                    left: "0px",
                    opacity: 1,
                    right: "auto",
                    width: 400,
                    display: "block"
                }, 200);
            } else {
                $("#menu").animate({
                    left: "-400px",
                    opacity: 0.25
                }, 200);
            }
        }
    });
});
