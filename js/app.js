window.addEventListener('load', function (e) {
    // Blog
    // var firebaseConfig = {
    //     apiKey: "AIzaSyCCWAV8nUbacWsPC8pDW2iKB8CSnUphcC0",
    //     authDomain: "autogermany.firebaseapp.com",
    //     projectId: "autogermany",
    //     storageBucket: "autogermany.appspot.com",
    //     messagingSenderId: "149762891722",
    //     appId: "1:149762891722:web:cc18021e7fae8c83723933",
    //     measurementId: "G-YCLSQMLZCE"
    // };

    // firebase.initializeApp(firebaseConfig);

    let postsCollection = document.querySelector("#postsCollection");

    const db = firebase.firestore();

    function createPost(title, time, content, source, id) {
        let template = `
        <div class='post' data-key='key${id}'>
            <h2>${title}</h2>
            <small>${time}</small>
            <div class='postBody'>
                <img src=${source} alt="post picture">
                <div class="postContent">
                ${content}
                </div>
            </div>
            <button class="btnMore" id=${id}>${'Read More'}</button>   
        </div>
        `
        let post = document.createRange().createContextualFragment(template);

        postsCollection.appendChild(post);

        document.querySelectorAll('.post .btnMore').forEach((post) => {
            post.addEventListener('click', readMore);
        })
    }

    //Get Posts
    function getPosts() {
        db.collection("posts").orderBy('createdAt', 'desc').get().then(snapshot => {
            snapshot.docs.forEach(docs => {
               
                createPost(
                    docs.data().postName,
                    docs.data().createdAt,
                    docs.data().postContent,
                    docs.data().image,
                    docs.id
                )
            });
        }).catch(error => {
            console.log(error);
        })
    }

    getPosts();

    function readMore(e) {
        const element = e.currentTarget.parentElement;
        var dots = element.querySelector(".dots");
        var moreText = element.querySelector(".more");
        var btnText = element.querySelector('.btnMore');

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    // Toggle Navigation
    document.querySelector('.nav-icon').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('show-nav');
        document.querySelector('.nav-icon').classList.toggle('open');
        document.body.classList.toggle('lock');
    });

    const menuLinks = document.querySelectorAll('.menu-links li a');
    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (document.querySelector('nav').classList.contains('show-nav')) {
                document.querySelector('nav').classList.remove('show-nav');
                document.querySelector('.nav-icon').classList.remove('open');
                document.body.classList.remove('lock');
            }
        })
    })

    // Sticky 
    document.addEventListener('scroll', () => {

        if (window.scrollY > 20) {
            document.querySelector('header').classList.add('scrolling');
        }
        else {
            document.querySelector('header').classList.remove('scrolling');
        }
    });


    //Banner Carousel

    let images = ['blog-banner.jpg', 'audi-yellow.jpg', 'mercedes-w.jpg', 'bmw-red.jpg', 'audi-light.jpg', 'mercedes-int.jpg'];
    let currentImg = 0;

    // add a variable to track the context of the interval 
    let slideshowInterval;

    //call the setInterval function to begin the slideshow 
    slideshowInterval = setInterval(function () {
        currentImg += 1;
        if (currentImg == images.length) {
            currentImg = 0;
        }
        updateSlide(currentImg)
    }, 3000);

    document.querySelector('.blog-banner').style.backgroundImage = "linear-gradient(rgba(8, 9, 10, 0.8), rgba(8, 9, 10, 0.8)),url(../img/blog/" + images[0] + ')';

    function updateSlide(index) {
        // display the new current image
        document.querySelector('.blog-banner').style.backgroundImage = "linear-gradient(rgba(8, 9, 10, 0.8), rgba(8, 9, 10, 0.8)),url(../img/blog/" + images[index] + ')';

    }
})




