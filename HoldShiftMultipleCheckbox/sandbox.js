const checkboxes = document.querySelectorAll('.inbox input[type = checkbox]');
console.log(checkboxes);
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
});

let lastChecked;

function handleCheck(e) {
    if (e.shiftKey && this.checked){
        let count = 0 
        checkboxes.forEach(checkbox => {
            if (checkbox == lastChecked) {
                count = 1; 
               }
            if (checkbox == this) {
                count = 0;
            } 
            if (count > 0) {
                checkbox.checked = true;
            }            
        });
    }
    if (e.shiftKey && !this.checked){
        let count = 0 
        checkboxes.forEach(checkbox => {
            if (checkbox == lastChecked) {
                count = 1; 
               }
            if (checkbox == this) {
                count = 0;
            } 
            if (count > 0) {
                checkbox.checked = false;
            }            
        });
    }
    


    lastChecked = this;
    console.log(e);
}
