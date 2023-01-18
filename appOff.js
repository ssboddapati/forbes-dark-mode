(function(){
    document.querySelector("body").style.filter = "invert(0) hue-rotate(0deg)";

    let media = document.querySelectorAll("img, picture, video");
    
    media.forEach ((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
    })

    var elms = document.querySelectorAll("*[style]");

    elms.forEach ((elm) => {
        if (elm.style.backgroundImage) {
            elm.style.filter = "invert(0) hue-rotate(0deg)";
        }
    })
})();