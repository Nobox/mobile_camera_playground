function hasGetUserMedia() {
    return !!(navigator.hasGetUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

function snapshot() {
    if (localMediaStream) {
        ctx.drawImage(video, 0, 0);
        document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
}

function sizeCanvas() {
    setTimeout(function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        img.height = video.videoHeight;
        img.width = video.videoWidth;
    }, 100);
}

function changeFilter(e) {
    var el = e.target;
    el.className = '';
    var effect = filters[idx++ % filters.length];
    if (effect) {
        el.classList.add(effect);
    }
}

var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var localMediaStream = null;
var filterButton = document.querySelector('#filter-button');
var screenshotStopButton = document.querySelector('#capture-stop-button');
var idx = 0;
var filters = [
    'grayscale',
    'sepia',
    'blur',
    'brightness',
    'contrast',
    'hue-rotate', 'hue-rotate2', 'hue-rotate3',
    'saturate',
    'invert',
    ''
];

var errorCallback = function(e) {
    // errors...
};

if(hasGetUserMedia()) {
    // We have getUserMedia()
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    navigator.getUserMedia({ video: true, audio: false }, function(localMediaStream) {
        video.src = window.URL.createObjectURL(localMediaStream);

        video.onloadedmetadata = function(e) {
            // do something on loaded meta data
        };


        video.addEventListener('click', changeFilter, false);

        screenshotStopButton.addEventListener('click', function(e) {
            video.pause();
            localMediaStream.stop(); // Doesn't do anything in Chrome.
        }, false);

    }, errorCallback);

} else {
    alert('getUserMedia() is not supported in yo\' browser');
}
