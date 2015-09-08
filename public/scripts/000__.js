$(document).ready(function(){
    $(document).on('click','.navbar-nav li a', function(event) {
        event.preventDefault();
        $('.navbar li').each(function(){
            $(this).removeClass('active');
        });

        $(this).parent().addClass('active');
        var target = "#" + this.getAttribute('data-target');
        $('html, body').animate({
            scrollTop: ($(target).offset().top - 70)
        }, 1000);
    });
});