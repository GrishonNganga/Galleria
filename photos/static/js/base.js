$(document).ready(()=>{
    let search = document.getElementById('search')

    $(function () {
        $('[data-toggle="popover"]').popover()
      })
  
  $('.home-route').click(()=>{
    $('.home-route').removeClass('default')
    $('.home-route').addClass('selected')
    $('.search-route').addClass('default')
    $('.disco-route').addClass('default')
    $('.search-route').removeClass('selected')
    $('.disco-route').removeClass('selected')
    window.location.href = '/'
  })
  
  $('.search-route').click(()=>{
    $('.search-route').removeClass('default')
    $('.search-route').addClass('selected')
    $('.home-route').addClass('default')
    $('.disco-route').addClass('default')
    $('.home-route').removeClass('selected')
    $('.disco-route').removeClass('selected')
    
  })

  $('.disco-route').click(()=>{
    $('.disco-route').removeClass('default')
    $('.disco-route').addClass('selected')
    $('.home-route').addClass('default')
    $('.search-route').addClass('default')
    $('.home-route').removeClass('selected')
    $('.search-route').removeClass('selected')
    window.location.href = '/discover'
  })

      
})