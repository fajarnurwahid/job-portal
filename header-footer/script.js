$('[data-toggle="navbar-submenu"]').click(function(e) {
    if(window.innerWidth <= 767) {
        e.preventDefault()
        $(this).toggleClass('active')
        $(this).siblings('.navbar-submenu').toggleClass('active')
    }
})

$('.navbar-toggle').click(function(e) {
    e.preventDefault()
    var el = $(this)
    $('.navbar-menu').toggleClass('active')
    el.toggleClass('active')
    $('html').toggleClass('overflow-hidden')

    if(el.hasClass('active')) {
        setTimeout(function() {
            el.html('<i class="ri-close-line"></i>')
        }, 250)
    } else {
        setTimeout(function() {
            el.html('<i class="ri-menu-line"></i>')
        }, 250)
    }
})

$('[data-arrow="prev"]').click(function(e) {
    e.preventDefault()
    var width = $($(this).attr('data-slider')).children().eq(0).width()
    $($(this).attr('data-slider')).scrollLeft($($(this).attr('data-slider')).scrollLeft() - width)
})

$('[data-arrow="next"]').click(function(e) {
    e.preventDefault()
    var width = $($(this).attr('data-slider')).children().eq(0).width()
    $($(this).attr('data-slider')).scrollLeft($($(this).attr('data-slider')).scrollLeft() + width)
})