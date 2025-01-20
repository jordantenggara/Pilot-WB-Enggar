let mybutton = document.getElementById("Top");

window.onscroll = function(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.onclick = function(){
    document.documentElement.scrollTop = 0;
};

function theme(){
    const body = document.body;

    if (body.classList.contains('dark-theme')){
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else{
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
    }
}