<div id="audio-player" class="fixed bottom-0 left-0 w-full bg-gray-800 shadow-xl z-30 transition-all">
    <div class="max-w-3xl mx-auto flex items-center justify-between px-4 py-3 gap-3">
        <div class="flex items-center gap-3">
            <img id="player-cover" src="assets/default_cover.png" alt="Cover" class="w-14 h-14 rounded-lg object-cover bg-gray-700">
            <div>
                <div id="player-title" class="font-bold text-base text-white truncate">Song Title</div>
                <div id="player-artist" class="text-gray-400 text-sm truncate">Artist</div>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <button id="player-prev" class="text-gray-400 hover:text-blue-400"><i class="fas fa-backward"></i></button>
            <button id="player-play" class="text-white bg-blue-600 hover:bg-blue-700 rounded-full w-10 h-10 flex justify-center items-center text-lg"><i class="fas fa-play"></i></button>
            <button id="player-next" class="text-gray-400 hover:text-blue-400"><i class="fas fa-forward"></i></button>
        </div>
        <div class="flex-1 mx-3">
            <input id="player-progress" type="range" min="0" max="100" value="0" class="w-full accent-blue-600">
        </div>
        <div class="w-16 text-right text-xs text-gray-300"><span id="player-current">0:00</span> / <span id="player-duration">0:00</span></div>
        <audio id="player-audio" preload="auto"></audio>
    </div>
</div>
<script src="js/player.js"></script>
