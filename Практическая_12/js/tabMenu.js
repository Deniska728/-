let elems = {
  stickerList: $('.sticker'),
  spoilerList: $('.spoiler'),
  rimsList: $('.rims')
}    

setDisplayStyle(elems, 'block', 'none', 'none')

$('input[name="sticker"]').on('click', () => setDisplayStyle(elems, 'block', 'none', 'none'))
$('input[name="spoiler"]').on('click', () => setDisplayStyle(elems, 'none', 'block', 'none'))
$('input[name="rims"]').on('click', () => setDisplayStyle(elems, 'none', 'none', 'block'))
