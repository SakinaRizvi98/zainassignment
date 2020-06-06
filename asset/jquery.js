//---------- modal---------------
$(document).ready(function(){  
jQuery('a.info').click(function( ){
    var heff = jQuery(this).parents('div.hovereffect');
    var imgsrc = jQuery(heff).children('img').attr('src')
    var ptitle = jQuery(heff).children('p').html()
    var pbr = jQuery(heff).children('p').html()
    var modaltitle = jQuery(heff).parents('.category').children('h3').text()


    jQuery('#myModal .modal-header h4').html(modaltitle);
    jQuery('#myModal .modal-body img').attr('src', imgsrc);
    jQuery('#myModal .modal-body p').html(ptitle, pbr);
    jQuery('#myModal').modal('show');
})
})

//--------------- contact ---------//

$(document).ready(function(){
  jQuery('#send_btn').click(function(){
    var name = jQuery('#name').val()
    var email = jQuery('#email').val()
    var subject = jQuery('#subject').val()
    var message = jQuery('#message').val()
    if (name == ''||email == ''||subject == ''||message == ''){
      alert ('All filed must be filled')
      return false
    }else {
       alert ('Your Request IS Successfully Submited')
       /*jQuery('#name').val("")
       jQuery('#email').val("")
       jQuery('#subject').val("")
       jQuery('#message').val("")*/
     }

  })
})
//--------------- contact ---------// 

//-------- scrolup button--------
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


