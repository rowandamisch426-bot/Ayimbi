let audio = document.getElementById('player-audio');
let playBtn = document.getElementById('player-play');
let prevBtn = document.getElementById('player-prev');
let nextBtn = document.getElementById('player-next');
let progress = document.getElementById('player-progress');
let current = document.getElementById('player-current');
let duration = document.getElementById('player-duration');
let cover = document.getElementById('player-cover');
let title = document.getElementById('player-title');
let artist = document.getElementById('player-artist');

let playlist = [];
let playlistIndex = 0;

function loadSong(song) {
    audio.src = song.url;
    cover.src = song.cover || 'assets/default_cover.png';
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.load();
}

function playSong() { audio.play(); playBtn.innerHTML = '<i class="fas fa-pause"></i>'; }
function pauseSong() { audio.pause(); playBtn.innerHTML = '<i class="fas fa-play"></i>'; }
function togglePlay() { audio.paused ? playSong() : pauseSong(); }

playBtn.onclick = togglePlay;
audio.onplay = () => playBtn.innerHTML = '<i class="fas fa-pause"></i>';
audio.onpause = () => playBtn.innerHTML = '<i class="fas fa-play"></i>';

audio.ontimeupdate = () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent || 0;
    current.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
};
progress.oninput = () => { audio.currentTime = (progress.value / 100) * audio.duration; };

function formatTime(time) {
    if (isNaN(time)) return "0:00";
    let m = Math.floor(time / 60);
    let s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2,'0')}`;
}

prevBtn.onclick = () => { if (playlist.length) playAt(playlistIndex - 1); };
nextBtn.onclick = () => { if (playlist.length) playAt(playlistIndex + 1); };
audio.onended = () => { if (playlist.length) playAt(playlistIndex + 1); };

function setPlaylist(songs, index = 0) {
    playlist = songs;
    playAt(index);
}
function playAt(idx) {
    if (idx < 0 || idx >= playlist.length) return;
    playlistIndex = idx;
    loadSong(playlist[playlistIndex]);
    playSong();
}

window.playSongDirect = function(songObj) {
    setPlaylist([songObj], 0);
};
window.playAlbum = function(songsArr, startIdx = 0) {
    setPlaylist(songsArr, startIdx);
};