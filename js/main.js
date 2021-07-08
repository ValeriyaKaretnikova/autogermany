

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
	//     breakpoints: {
	// 	'1200': {
	// 		perPage: 2,
	// 		gap    : '1rem',
	// 	},
	// 	'640': {
	// 		perPage: 1,
	// 		gap    : '1rem',
	// 	},
	// }

    } ).mount();
    


      
    
    
    
})