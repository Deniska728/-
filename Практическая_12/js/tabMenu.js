let stickerList = $('.sticker')
let spoilerList = $('.spoiler')
let rimsList = $('.rims')
let topPosition, leftPosition


stickerList.css('display', 'block');
spoilerList.css("display", "none");
rimsList.css("display", "none");

$('input[name="sticker"]').on('click', function(){
    stickerList.css('display', 'block');
    spoilerList.css('display', 'none');
    rimsList.css('display', 'none');
})

$('input[name="spoiler"]').on('click', function(){
    stickerList.css('display', 'none');
    spoilerList.css('display', 'block');
    rimsList.css('display', 'none');
})

$('input[name="rims"]').on('click', function(){
    stickerList.css('display', 'none');
    spoilerList.css('display', 'none');
    rimsList.css('display', 'block');
})


function deleteImage( $item ) {
    // $item.css('position', 'absolute')
    // $item.css('width', '50px')
    // $item.css('height', '50px')
    // $item.css('z-index', '5')
    // $item.css('top', '5px')
  }

let gallery = $( "menu > ul:not(ul:first-child)" ),
      trash = $( "section > figure" );
 
$( "li", gallery ).draggable({
    revert: "invalid",
    cursor: "move",
    appendTo: 'section > figure'
});
 
trash.droppable({
    accept: "ul:not(ul:first-child) li",
    drop: function( event, ui ) {
    deleteImage( ui.draggable );
    }
});

$('body').on('mousemove', function(e){
    top = e
    left = e.originalEvent.clientX
    console.log(top)
})
