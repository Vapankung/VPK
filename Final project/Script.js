var picmusic = document.getElementById("picmusic");
var mysong = document.getElementById("mysong");

picmusic.onclick = function () {
    if (mysong.paused){
        mysong.play();
    }else{
        mysong.pause();
    }
}
