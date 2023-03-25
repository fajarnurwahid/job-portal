$('[data-toggle="tab"]').click(function(e) {
    e.preventDefault()
    $(this).parent().find('[data-toggle="tab"]').removeClass('active')
    $('[data-tab]').removeClass('active')
    $(this).addClass('active')
    $('[data-tab="'+$(this).attr('data-target')+'"]').addClass('active')
})