function createTitle (title) {
  console.log('Title' + title)
}
function createThumbnail (thumb, id) {
  if(thumb === true){
    console.log('images/ss-project' + id + '.PNG')
  } else {
    console.log('images/no-preview.png')
  }
}
