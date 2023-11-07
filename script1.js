console.log("welcome to spotify");
let songindex=0;
let audioElement =new Audio('cover_songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mastersong =document.getElementById('mastersong');
let myprogressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"What a Beautiful Name It Is", filePath:"cover_songs/1.mp3",coverPath:"covers_images/1_what_a_beauti.jpeg"},
    {songName:"Here I am to worship", filePath:"cover_songs/2.mp3",coverPath:"covers_images/2_hereIamto.jpg"},
    {songName:"you are my strength", filePath:"cover_songs/3.mp3",coverPath:"covers_images/3_youaremy.jpeg"},
    {songName:"Bless The lord", filePath:"cover_songs/4.mp3",coverPath:"covers_images/4_blessthe.jpeg"},
    {songName:"I Love you", filePath:"cover_songs/5.mp3",coverPath:"covers_images/5_iloveyou.jpeg"},
    {songName:"danyawad ke sath", filePath:" cover_songs/6.mp3",coverPath:"covers_images/6_danyawadkesath.jpeg"},
    {songName:"deevinchave", filePath:"cover_songs/7.mp3",coverPath:"covers_images/7_deevinchave.jpeg"},
    {songName:"naa jeevitha kalamantha", filePath:" cover_songs/8.mp3",coverPath:"covers_images/8_naajeevitha.jpeg"},
    {songName:"sthuthala meeda ", filePath:" cover_songs/9.mp3",coverPath:"covers_images/9_stuthalameeda.jpeg"},
    {songName:"chattan", filePath:"cover_songs/10.mp3",coverPath:"covers_images/10_chattan.jpeg"},

];

songItems.forEach((element,i )=> {

   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    
});

//listen to events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

        const clickedSong = document.querySelector(`.songItemPlay[id="${songindex}"]`);
        if (clickedSong) {
            clickedSong.classList.remove('fa-play-circle');
            clickedSong.classList.add('fa-pause-circle');
        }
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        const currentlyPlayingSong = document.querySelector('.songItemPlay.fa-pause-circle');

        if (currentlyPlayingSong) {
            currentlyPlayingSong.classList.remove('fa-pause-circle');
            currentlyPlayingSong.classList.add('fa-play-circle');
        }
        

    }
})
audioElement.addEventListener('timeupdate',()=>{


    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`cover_songs/${songindex+1}.mp3`;
        mastersong.innerText =songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex +=1;

    }
    audioElement.src=`cover_songs/${songindex+1}.mp3`;
    mastersong.innerText =songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;

    }
   
    audioElement.src=`cover_songs/${songindex+1}.mp3`;
    mastersong.innerText =songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})