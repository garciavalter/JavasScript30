const checkboxes = document.querySelectorAll('.inbox input[type = checkbox]');
console.log(checkboxes);
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
});

let lastChecked;

function handleCheck(e) {
    let handler = true;
    
    if (e.shiftKey && this.checked){
        console.log(lastChecked);
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
        handler = true;
    }
    if (e.shiftKey && !this.checked){
        console.log('unchecking');
        let checking = false 
        checkboxes.forEach(checkbox => {
            if (checkbox == this) {
                checking = true; 
               }
            if (checkbox == lastChecked.nextSibling) {
                checking = false;
            } 
            if (checking) {
                checkbox.checked = false;
            }            
        });
    
        handler = false;
    }

    handler ? lastChecked = this : lastChecked = undefined;
    console.log(e);
}
