let handleButtons = (target) => {
  $('[name="width-plus"]').on('click', function(){
    $(target).css({
      width: parseInt(target.style.width) + 5
    })
  })
  $('[name="width-minus"]').on('click', function(){
    $(target).css({
      width: parseInt(target.style.width) - 5
    })
  })
  $('[name="height-plus"]').on('click', function(){
    $(target).css({
      height: parseInt(target.style.height) + 5
    })
  })
  $('[name="height-minus"]').on('click', function(){
    $(target).css({
      height: parseInt(target.style.height) - 5
    })
  })
}

$('[name="print"]').click( function(){
  let priotPriora = $( "section > figure" ).clone();
  priotPriora.css( 'position', 'relative')
  priotPriora.find("img:first-child")
    .css({
      width: getSize($('section > figure')).width + "px",
      height: getSize($('section > figure')).height + "px"
    });
  $("body>*").hide();
  $("body").append(priotPriora);
  window.print()
  $("body>*").show()
  priotPriora.remove();
})