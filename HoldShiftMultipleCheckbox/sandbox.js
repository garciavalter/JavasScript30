const checkboxes = document.querySelectorAll('.inbox input[type = checkbox]');
console.log(checkboxes);
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
});

let lastChecked;

function handleCheck(e) {
    if (e.shiftKey && this.checked){
        let status = false
        checkboxes.forEach(checkbox => {
            if (checkbox == lastChecked) {
                status = !status; 
                }
            if (checkbox == this) {
                status = !status;
            } else {
                checkbox.checked = status;
            }            
        })
    }

    
    lastChecked = this;
    console.log(e);
}
