$('[data-toggle="navbar-submenu"]').click(function(e) {
    if(window.innerWidth <= 767) {
        e.preventDefault()
        $(this).toggleClass('active')
        $(this).siblings('.navbar-submenu').toggleClass('active')
    }
})

$('.navbar-toggle').click(function(e) {
    e.preventDefault()
    $('.navbar-menu').toggleClass('active')
    $('html').toggleClass('overflow-hidden')
})

$('[data-toggle="tab"]').click(function(e) {
    e.preventDefault()
    $(this).parent().find('[data-toggle="tab"]').removeClass('active')
    $('[data-tab]').removeClass('active')
    $(this).addClass('active')
    $('[data-tab="'+$(this).attr('data-target')+'"]').addClass('active')
})