function cropImage(){
    if( !selection.startX){
        alert("Please create a selection");
        toggleSettings();
        return;
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);

    var startX = selection.startX * offset.width;
    var startY = selection.startY * offset.height;

    var width = selection.w * offset.width;
    var height = slectionY * offset.height;

    setImageProportions(browserWidth * 0.9, browserHeight * 0.9)
}