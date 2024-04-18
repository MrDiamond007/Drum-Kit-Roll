window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function if no audio element found
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.forEach(key => {
    key.addEventListener('click', function() {
        const keyCode = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`div[data-key="${keyCode}"]`);
        audio.currentTime = 0; // Rewind to the start
        audio.play();
        key.classList.add('playing');
    });

    key.addEventListener('mouseover', function() {
        const keyCode = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`div[data-key="${keyCode}"]`);
        audio.currentTime = 0; // Rewind to the start
        audio.play();
        key.classList.add('playing');
    });
});
