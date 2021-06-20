 var x = document.getElementById("myAudio");

    function getVolume() {
    alert(x.volume);
}
    /*function DurationOfSong_Now() {
    var DurationOfSong = document.getElementById("myAudio").currentTime;
    document.getElementById("duration-of-song").innerHTML = DurationOfSong;
}*/
    function getCurTime() {
    document.getElementById("full-duration").innerHTML = x;
}


 document.body.onkeyup = function(e){
     var isTyping_1 = document.getElementById("commentLayer").style.opacity;
     var isTyping_2 = document.getElementById("open-social-media").style.opacity;

     if(e.keyCode == 32 && isTyping_1 == 0 && isTyping_2 == 0){
         playPause();
     }
     if(e.keyCode == 37 && isTyping_1 == 0 && isTyping_2 == 0){
         x.currentTime = x.currentTime - 15;
     }
     if(e.keyCode == 39 && isTyping_1 == 0 && isTyping_2 == 0){
         x.currentTime = x.currentTime + 20;
     }
     if(e.keyCode == 38 && isTyping_1 == 0 && isTyping_2 == 0){

         var volume_tmp = document.querySelector("#volume-control").value;
         var v_tmp = parseInt(volume_tmp);
         v_tmp = v_tmp + 10;
         if ( v_tmp > 90 && v_tmp != 100  ) {
             plus_v_tmp = 100 - v_tmp;
             v_tmp = plus_v_tmp + v_tmp;
         }
         if ( v_tmp == 100 ) {
             v_tmp = 100;
         }
         x.volume = v_tmp / 100;
         document.querySelector("#volume-control").value = v_tmp;
     }
     if(e.keyCode == 40 && isTyping_1 == 0 && isTyping_2 == 0){

         var volume_tmp = document.querySelector("#volume-control").value;
         var v_tmp = parseInt(volume_tmp);
         v_tmp = v_tmp - 10;
         if ( v_tmp < 10 && v_tmp != 0 ) {
             minus_v_tmp = 10 - v_tmp;
             v_tmp = 0;
         }
         if (v_tmp == 0) {
             v_tmp = 0;
         }
         x.volume = v_tmp / 100;
         document.querySelector("#volume-control").value = v_tmp;
     }
     if(e.keyCode == 76 && isTyping_1 == 0 && isTyping_2 == 0){
         if (x.loop == true) {
             loopStatus_Now(0);
         }
         else {
             loopStatus_Now(1);
         }
     }
     if(e.keyCode == 27 ){
         if ( isTyping_1 == 1 ) {
             showCommentBox(0);
         }
         else if ( isTyping_2 == 1){
             showShareBox(0);
         }
     }
     if(e.keyCode == 221 && isTyping_1 == 0 && isTyping_2 == 0){
         setPSpeed = x.playbackRate;
         if (setPSpeed >= 2.5 ) {

         }
         else {
             setPSpeed = setPSpeed + 0.25;
             setPlaySpeed(setPSpeed);
         }
     }
     if(e.keyCode == 219 && isTyping_1 == 0 && isTyping_2 == 0){
         setPSpeed = x.playbackRate;
         if (setPSpeed <= 0.25 ) {

         }
         else {
             setPSpeed = setPSpeed - 0.25;
             setPlaySpeed(setPSpeed);
         }

     }
 }

    // Set Volume
 /*   function setMyVolume(setMyVolume_tmp) {
    x.volume = x.volume + setMyVolume_tmp;
    var volumebar_tmp = x.volume / 1;
    document.querySelector(".onMyVolume").style.width = volumebar_tmp * 100 + "%";
}*/

    // Time Line Of Song
    x.addEventListener("timeupdate", function() {
    seekslider = document.getElementById("seekslider");
    if (seekslider.value <= 30) {
    var seekslider_updated = parseInt( seekslider.value );
    seekslider_updated = seekslider_updated  + 0.5 ;
    document.querySelector(".onTimeLineBar").style.width = seekslider_updated + "%";
}
    else if (seekslider.value >= 70) {
    var seekslider_updated = parseInt( seekslider.value );
    seekslider_updated = seekslider_updated  - 0.5 ;
    document.querySelector(".onTimeLineBar").style.width = seekslider_updated + "%";
}
    else {
    document.querySelector(".onTimeLineBar").style.width = seekslider.value + "%";
}
});

    // Set Corrent Time of Player
    function setCurTime(setCurTime_tmp) {
    x.currentTime = x.currentTime + setCurTime_tmp;
}

    // Set Play Speed
    function setPlaySpeed(setPlaySpeed_tmp) {
    x.playbackRate = setPlaySpeed_tmp;
    document.getElementById("speedPlay").innerHTML = setPlaySpeed_tmp + "x";
}

let volume = document.querySelector("#volume-control");
    volume.addEventListener("change", function(e) {
    x.volume = e.currentTarget.value / 100;
});

function likeitPost (likedPosttmp) {
    var likeContent, likeCounttmp, likeCountNumbertmp;
    likeCounttmp = document.getElementById("likeCounter").textContent;
    likeCountNumbertmp = parseInt( likeCounttmp );
    likeContent = document.getElementById("like");

    if ( likedPosttmp == 1 ) {
        likeContent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>';
        likeCountNumbertmp++ ;
        likeContent.setAttribute("onclick", "likeitPost(0)");
        document.getElementById("likeCounter").innerHTML = likeCountNumbertmp ;
    }
    else {
        document.getElementById("like").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-heart" viewBox="0 0 16 16"><path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>' ;
        likeCountNumbertmp-- ;
        document.getElementById("likeCounter").innerHTML = likeCountNumbertmp;
        document.getElementById("like").setAttribute("onclick", "likeitPost(1)");
    }
}

function saveToFav(saveToFav_tmp) {

    if ( saveToFav_tmp == 1 ) {
        document.getElementById("saveFav").setAttribute("onclick", "saveToFav(0)");
        document.querySelector(".bi-music-note-list").style.fill = "red";
    }
    else {
        document.getElementById("saveFav").setAttribute("onclick", "saveToFav(1)");
        document.querySelector(".bi-music-note-list").style.fill = "#fff";
    }
}



    var vid, playbtn, seekslider, curtimetext, durtimetext;
    function intializePlayer(){
    // Set object references
    vid = document.getElementById("myAudio");
    playbtn = document.getElementById("playpausebtn");
    seekslider = document.getElementById("seekslider");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    // Add event listeners
    playbtn.addEventListener("click",playPause,false);
    seekslider.addEventListener("change",vidSeek,false);
    vid.addEventListener("timeupdate",seektimeupdate,false);
}
    window.onload = intializePlayer;
    function playPause(){
        if(vid.paused){
        vid.play();
        playbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16"><path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/></svg>';
    } else {
        vid.pause();
        playbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"><path d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>';
    }
}

    function vidSeek(){
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}

    function seektimeupdate(){
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if(cursecs < 10){ cursecs = "0"+cursecs; }
    if(dursecs < 10){ dursecs = "0"+dursecs; }
    if(curmins < 10){ curmins = "0"+curmins; }
    if(durmins < 10){ durmins = "0"+durmins; }
    curtimetext.innerHTML = curmins+":"+cursecs;
    durtimetext.innerHTML = durmins+":"+dursecs;
}


    function loopStatus_Now(loopStatus_Now_tmp) {
    if (loopStatus_Now_tmp == 1) {
    x.loop = true;
    document.getElementById("loopset").setAttribute("onclick", "loopStatus_Now(0)");
    document.getElementById("loopset").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="on bi bi-arrow-counterclockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/></svg>';
}
    else {
    x.loop = false;
    document.getElementById("loopset").setAttribute("onclick", "loopStatus_Now(1)");
    document.getElementById("loopset").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="off bi bi-arrow-counterclockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/></svg>';
}
}

    function showShareBox (showShareBox_tmp) {
    if (showShareBox_tmp == 1) {
    document.getElementById("shadow-background-share").style.display = "flex";
        document.getElementById("shadow-background-share").style.opacity = "1";
    document.getElementById("open-social-media").style.top = "25%";
    document.getElementById("open-social-media").style.opacity = "1";
}
    else {
    document.getElementById("open-social-media").style.top = "-125%";
    document.getElementById("open-social-media").style.opacity = "0";
    document.getElementById("shadow-background-share").style.display = "none";
        document.getElementById("shadow-background-share").style.opacity = "0";
}

}
 function copyIframeText() {
     /* Get the text field */
     var copyText = document.querySelector(".iframeCode");

     /* Select the text field */
     copyText.select();
     copyText.setSelectionRange(0, 99999); /* For mobile devices */

     /* Copy the text inside the text field */
     document.execCommand("copy");
     
 }

 function showCommentBox (showCommentBox_tmp) {
     if (showCommentBox_tmp == 1) {
         document.getElementById("shadow-background-comment").style.display = "flex";
         document.getElementById("shadow-background-comment").style.opacity = "1";
         document.getElementById("commentLayer").style.top = "10%";
         document.getElementById("commentLayer").style.opacity = "1";
     } else {
         document.getElementById("commentLayer").style.top = "-100%";
         document.getElementById("commentLayer").style.opacity = "0";
         document.getElementById("shadow-background-comment").style.display = "none";
         document.getElementById("shadow-background-comment").style.opacity = "0";
     }
 }/*
 document.body.onkeyup = function(e){
     var isTyping_1 = document.getElementById("commentLayer").style.opacity;
     var isTyping_2 = document.getElementById("open-social-media").style.opacity;

   if(e.keyCode == 76 && isTyping_1 == 0 && isTyping_2 == 0){
         if (x.loop == true) {
             loopStatus_Now(0);
         }
         else {
             loopStatus_Now(1);
         }
     }
 }*/