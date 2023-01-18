(function(){
    document.querySelector("body").style.filter = "invert(1) hue-rotate(180deg)";
    let media = document.querySelectorAll("img, picture, video");
    
    media.forEach ((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    })

    var elms = document.querySelectorAll("*[style]");

    elms.forEach ((elm) => {
        if (elm.style.backgroundImage) {
            elm.style.filter = "invert(1) hue-rotate(180deg)";
        }
    })
})();