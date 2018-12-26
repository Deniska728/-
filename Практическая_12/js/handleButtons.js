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