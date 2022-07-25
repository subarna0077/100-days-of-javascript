const wrapper = document.querySelector('.wrapper'),
musicImg = wrapper.querySelector('.img-area img'),
musicName = wrapper.querySelector('.song-details .song-title'),
mainAudio = wrapper.querySelector('#main-audio'),
musicArtist = wrapper.querySelector('.song-details .singer'),
playPauseBtn = wrapper.querySelector('.play-pause'),
prevBtn = wrapper.querySelector('#left'),
nextBtn = wrapper.querySelector('#right'),
progressBar = wrapper.querySelector('.progress-bar'),
progressArea = wrapper.querySelector('.progress-area')

;

let musicIndex = 2;

window.addEventListener('load',()=>{
    loadMusic(musicIndex);
})

function loadMusic(indexNum){

    musicName.innerText = allMusic[indexNum - 1].name;
    musicArtist.innerText = allMusic[indexNum -1].artist;
    musicImg.src =`images/${allMusic[indexNum -1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNum -1].img}.mp3`;   
}
// play Music function
const icon = '<i id="pause_music" class="fa-solid fa-pause materials-icon"></i>';

function playMusic (){
    wrapper.classList.add("paused");
    playPauseBtn.insertAdjacentHTML('beforeend', icon);
    playPauseBtn.querySelector('i').classList.remove('fa-play');
    
    mainAudio.play();
}

function pauseMusic(){
    wrapper.classList.remove('paused');
    playPauseBtn.querySelector('i').classList.remove('fa-pause');
    playPauseBtn.querySelector('i').classList.add('fa-play');
    mainAudio.pause();
}

function nextMusic(){
    // we'll just increment the index by 1
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1: musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function prevMusic(){
    musicIndex --;
    musicIndex < 1 ? musicIndex = allMusic.length  : musicIndex = musicIndex;
     loadMusic(musicIndex)
    playMusic();
}



 playPauseBtn.addEventListener('click',()=>{
    const isMusicPaused = wrapper.classList.contains('paused');
    // if musicPaused is true then call MusicPause else call playMusic
    isMusicPaused ? pauseMusic(): playMusic();
 });

nextBtn.addEventListener('click',()=>{
    nextMusic();
})

prevBtn.addEventListener('click',()=>{
    prevMusic();
 
})
mainAudio.addEventListener("timeupdate",e=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime/ duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector('.current'),
    musicDuration = wrapper.querySelector('.duration');

    mainAudio.addEventListener("loadeddata",()=>{
        // update song total duration
        console.log(e)
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        ;

        musicDuration.innerText = `${totalMin}:${totalSec}`;

        // update playing song total time
      

    });
    let currentMin = Math.floor(currentTime / 60),
    currentSec = Math.floor(currentTime % 60) ;
    if(currentSec < 10){
        currentSec = `0${currentSec}`;
    }
       musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
    });

progressArea.addEventListener('click',(e)=>{
    let progressWidthVal = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration  = mainAudio.duration;
    mainAudio.currentTime = (clickedOffSetX/ progressWidthVal) * songDuration;
});



// updating progress bar width with music time

// repeat shuffle song according to the icon
const repeatBtn = document.querySelector('.loop_music');
repeatBtn.addEventListener('click',()=>{

})
