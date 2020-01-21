const checkboxes = document.querySelectorAll('.inbox input[type = checkbox]');
console.log(checkboxes);
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
});

let lastChecked;

function handleCheck(e) {
    if (e.shiftKey && this.checked){
        console.log('checking');
        let checking = false 
        checkboxes.forEach(checkbox => {
            if (checkbox == lastChecked) {
                checking = true; 
               }
            if (checkbox == this) {
                checking = false;
            } 
            if (checking) {
                checkbox.checked = true;
            }            
        });
    }
    if (e.shiftKey && !this.checked){
        console.log('unchecking');
        let checking = false 
        checkboxes.forEach(checkbox => {
            if (checkbox == this) {
                checking = true; 
               }
            if (checkbox == lastChecked) {
                checking = false;
            } 
            if (checking) {
                checkbox.checked = false;
            }            
        });
    }

    lastChecked = this;
    console.log(e);
}
