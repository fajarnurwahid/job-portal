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
})