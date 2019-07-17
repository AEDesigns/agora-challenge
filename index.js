function isChecked(){
    if (document.getElementsByClassName('newsletter').checked){
        alert('Thank you for subscribing');
    } else {
        alert('Check the checkbox before proceeding');
    }
}