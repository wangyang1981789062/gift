//音乐自动播放
$(document).ready(function () {
    document.getElementById("bg-music").addEventListener("loadedmetadata", myFunction);
});
function myFunction() {
    var media = document.getElementById('bg-music');
    media.play();
}