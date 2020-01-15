const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    panels.forEach(panel => {
        if(panel == this) {
            this.classList.toggle('open')
        } else {
            panel.classList.remove('open');
        }
    });
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
});
