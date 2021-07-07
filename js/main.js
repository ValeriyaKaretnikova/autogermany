window.addEventListener('load', function(e){
    console.log(e);
    document.querySelector('#nav-icon').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('show-nav');
        document.querySelector('#nav-icon').classList.toggle('open');
        document.body.classList.toggle('lock');
    });
})