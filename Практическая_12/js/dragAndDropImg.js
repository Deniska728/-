let imgInfo = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
}
let cloneElement, imgClone

let gallery = $( "menu > ul:not(:first-child)" ),
    trash = $( "section > figure" )

resetHandlersForPriora()    
    
gallery.find('img').draggable({
  revert: 'invalid',
  helper: 'clone',
  scope: 'images',
  start: function(event, ui){
    imgInfo.left = getCoord(this).left
    imgInfo.top = getCoord(this).top
    imgInfo.width = getSize(this).width
    imgInfo.height = getSize(this).height
    ui.helper.css({
      'width': imgInfo.width,
      'height': imgInfo.height,
      'z-index': "50"
    })
    cloneElement = $(this)
    cloneElement.css("display", "inline")
  }
})
 

trash.on('click', movePrior)

trash.droppable({
  scope: 'images',
  drop: function( event, ui ) {
    $('body').off('keydown')
    $($(this).find('img:first-child')).css({
      'border': '',
    })
    imgClone = ui.helper.clone()
    $(this).append(imgClone)
    imgClone.css({
      position: "absolute",
      top: getCoord(ui.helper[0]).top - getCoord(this).top,
      left: getCoord(ui.helper[0]).left - getCoord(this).left,
      "z-index": '50'
    })
    cloneElement.parent().remove()

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
          setImgInfo(this)
          if(imgInfo.top < 0 || imgInfo.bottom < 0 || imgInfo.left < 0 || imgInfo.right < 0){
            $(this).css({
              top: imgInfo.preventTop,
              left: imgInfo.preventLeft
            })
          }
        }
      })
      handleButtons(target)
    })
  }
})

function movePrior(event){
  let findImg2 = $(this).find('img:not(:first-child)')
  let findImg = $(this).find('img:first-child')
  if(!findImg2.length){
    $(findImg).css({
      'border': '1px dashed black',
      'position': 'relative'
    })
    $('body').on('keydown', e => {
      setImgInfo(findImg)
      switch(e.keyCode){
        case 38:
          $(findImg).css({
            top: parseInt(imgInfo.top) - 5 
          })
        break

        case 40: 
          $(findImg).css({
            top: parseInt(imgInfo.top) + 5
          })
        break

        case 39: 
          $(findImg).css({
            left: parseInt(imgInfo.left) + 5
          })
        break

        case 37: 
          $(findImg).css({
            left: parseInt(imgInfo.left) - 5
          })
        break   
      }
      return false
    })
  } else {
    $('body').off('keydown')
    $(findImg).css({
      'border': '',
    })
  }
}

let setImgInfo = elem => {
  imgInfo.top = getCoord(elem).top - getCoord($(elem).parent()).top
  imgInfo.bottom = getCoord($(elem).parent()).bottom - getCoord(elem).bottom
  imgInfo.left = getCoord(elem).left - getCoord($(elem).parent()).left
  imgInfo.right = getCoord($(elem).parent()).right - getCoord(elem).right
}