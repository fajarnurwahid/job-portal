// start: Navbar
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
// end: Navbar

// start: Slider
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
// end: Slider

// start: Form
$('.form-upload-image > input').change(function(e) {
    var file = e.target.files[0]
    if(file) {
        $(this).parent().append('<img src="'+URL.createObjectURL(file)+'">')
    }
})
// end: Form

// start: Modal
$('[data-toggle="modal"]').click(function(e) {
    e.preventDefault()
    $('html').addClass('overflow-hidden')
    $($(this).attr('data-target')).addClass('shown')
})

$('[data-dismiss="modal"]').click(function(e) {
    e.preventDefault()
    $('html').removeClass('overflow-hidden')
    $(this).closest('.modal').removeClass('shown')
})
// end: Modal