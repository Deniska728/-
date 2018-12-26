let imgInfo = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
}
let cloneElement, imgClone

let gallery = $( "menu > ul:not(:first-child)" ),
    trash = $( "section > figure" );

resetHandlersForPriora()    
    
gallery.find('img').draggable({
  revert: 'invalid',
  helper: 'clone',
  scope: "images",
  start: function(event, ui){
    imgInfo.left = getCoord(this).left
    imgInfo.top = getCoord(this).top
    imgInfo.width = getSize(this).width
    imgInfo.height = getSize(this).height
    ui.helper.css({
      'width': imgInfo.width,
      'height': imgInfo.height,
      'z-index': "50"
    });
    cloneElement = $(this)
    cloneElement.css("display", "inline")
  }
});
 
trash.droppable({
  scope: "images",
  drop: function( event, ui ) {
    cloneElement.css("display", "none");
    imgClone = ui.helper.clone();
    $(this).append(imgClone);
    imgClone.css({
      position: "absolute",
      top: getCoord(ui.helper[0]).top - getCoord(this).top,
      left: getCoord(ui.helper[0]).left - getCoord(this).left,
      "z-index": '50'
    });

    trash.find('img:not(:first-child)').on('click', function(event){
      let target = event.target
      let innerImg = $(this).parent().find('img:not(:first-child)')
      resetHandlers(innerImg)
      $(target).css({
        'border': '1px dashed black'
      })

      $(target).draggable({
        disabled: false,
        start: function(){
          imgInfo.preventTop = getCoord(this).top - getCoord($(this).parent()).top
          imgInfo.preventLeft = getCoord(this).left - getCoord($(this).parent()).left
        },
        stop(){
          imgInfo.top = getCoord(this).top - getCoord($(this).parent()).top
          imgInfo.bottom =  getCoord($(this).parent()).bottom - getCoord(this).bottom
          imgInfo.left = getCoord(this).left - getCoord($(this).parent()).left
          imgInfo.right = getCoord($(this).parent()).right - getCoord(this).right
          if(imgInfo.top < 0 || imgInfo.bottom < 0 || imgInfo.left < 0 || imgInfo.right < 0){
            $(this).css({
              top: imgInfo.preventTop,
              left: imgInfo.preventLeft
            });
          }
        }
      })

      $('body').on('keydown', e => {
        imgInfo.top = getCoord(this).top - getCoord($(this).parent()).top
        imgInfo.bottom = getCoord($(this).parent()).bottom - getCoord(this).bottom
        imgInfo.left = getCoord(this).left - getCoord($(this).parent()).left
        imgInfo.right = getCoord($(this).parent()).right - getCoord(this).right
        switch(e.keyCode){
          case 38:
            $(target).css({
              top: imgInfo.top >= 5 ? parseInt(imgInfo.top) - 5 : 0
            })
          break;
          case 40: 
            $(target).css({
              top: imgInfo.bottom >= 5 ? parseInt(imgInfo.top) + 5 : getSize($(this).parent()).height - getSize(this).height
            })
          break; 
          case 39: 
            $(target).css({
              left: imgInfo.right >= 5 ? parseInt(imgInfo.left) + 5 : getSize($(this).parent()).width - getSize(this).width
            })
          break; 
          case 37: 
            $(target).css({
              left: imgInfo.left >= 5 ? parseInt(imgInfo.left) - 5 :  0
            })
          break;    
        }
        return false
      })
      handleButtons(target)
    })
  }
});