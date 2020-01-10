window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) return;
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    });

    key.addEventListener('transitionend', function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    });
});
