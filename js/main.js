

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

    new Splide( '#splideServices', {
        type   : 'loop',
        autoplay: true,
        // perPage: 2,
        gap: "1rem",
        fixedWidth: '170px',
        arrows: false,
        pagination: false,
        interval: 3500,
        speed: 3500,
        easing: 'linear'

    } ).mount();

    // Instagram Feed
    const userFeed = new Instafeed({
        get: 'user',
        target: "instafeed-container",
        resolution: 'low_resolution',
        limit: 15,
        template: '<div class="item"><a href="{{link}}" target="_blank"><img alt="{{caption}}"src="{{image}}" /></a></div>',
        accessToken: 'IGQVJYRFc0cTdJdm9iemJIS0REOWszNmphdnRYMVNXa0ZArbGxDcnZAmTUlGcC1POGtySGNzM2x0TGoxTXZA0WWZA0X0dXN0lmSkduREZAtd1loYW5ISERna3dWSGhnQWdQR3ZAvWDh0M2tod1oyQVQxUTFuQwZDZD'
    });

    userFeed.run();

    const instaPosts = document.querySelector('#instafeed-container');
    
    instaPosts.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(e.target.parentElement);
    });

    // Testimonials
    new Splide( '#testimonialsSplide', {
        type   : 'loop',
        autoplay: true,
        perPage: 3,
        // gap: "1rem",
        arrows: false,
        fixedHeight: '30rem',

        
        breakpoints: {
            960: {
                perPage: 2,
                fixedHeight: '30rem',
            },
            700: {
                perPage: 1,
                fixedHeight: '26rem'
            },
            540: {
                perPage: 1,
                fixedHeight: '28rem'
            },
            420: {
                perPage: 1,
                fixedHeight: '30rem'

            }
        }

    } ).mount();


})
    


      
    
    
    
