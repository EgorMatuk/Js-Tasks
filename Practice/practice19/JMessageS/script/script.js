let switcherTheme = document.querySelector('#theme-switcher');
let dialogs = document.getElementById('all-dialogs');
function switchBackground(){
    document.body.classList.toggle('dark');
}

switcherTheme.addEventListener('click', switchBackground);

