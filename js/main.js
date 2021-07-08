

window.addEventListener('load', function(e){
    // Toggle Navigation
    document.querySelector('.nav-icon').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('show-nav');
        document.querySelector('.nav-icon').classList.toggle('open');
        document.body.classList.toggle('lock');
    });

    // Sticky 
    document.addEventListener('scroll', ()=>{

        if (window.scrollY >20 ) {
            document.querySelector('header').classList.add('scrolling');
    
        }
        else {
            document.querySelector('header').classList.remove('scrolling');
    
        }
    });

    //Glider 
    new Splide( '#splide', {
        type   : 'loop',
        autoplay: true,
        perPage: 1,
        padding: "20rem",
        // gap: "5rem",
	    breakpoints: {
		'1200': {
            padding: "10rem",
		},
		'640': {
            padding: 0
		},
	}

    } ).mount();
    


      
    
    
    
})