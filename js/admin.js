window.addEventListener('load', function(e){
    //Toggle Navigation
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

    
    //Authentification
    const auth = firebase.auth();
    const db = firebase.firestore();

    auth.onAuthStateChanged(user => {
        document.querySelector('.error').classList.add('hide');
        if (user) {
            document.querySelector('.createPost').classList.remove('hide');
            document.querySelector('.authentification').classList.add('hide');
            
        } else {
            document.querySelector('.createPost').classList.add('hide');
            document.querySelector('.authentification').classList.remove('hide');
            
        }
    })
    // Picture

    const uploader = document.querySelector('#uploader');
    let fileUrl = null;

    document.querySelector('#pictureBtn').addEventListener('change', async(e) => {
        //Get file
        const file = e.target.files[0];

        //Create a storage ref
        const storageRef = firebase.storage().ref('post1/' + file.name);

        //Upload file
        const task = await storageRef.put(file)

        //File URL
        fileUrl = await storageRef.getDownloadURL();
        // console.log(fileUrl);
        
        // //Update progress bar
        // task.on('state_changed', 

        // function progress(snapshot) {
        //     const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     uploader.value = percentage;
        // },

        // function error(err) {
        //     console.log(err.message);
        // },

        // function complete() {})
    })
    //Create Post
    
    const createPost = document.querySelector('#createPostForm');
    createPost.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let content = '<p>' + createPost['summary'].value + '</p><span class="dots">...</span><span class="more">' + '<p>' + createPost['content'].value + '</p></span>';
        
        db.collection('posts').add({
            author: createPost['author'].value,
            createdAt: createPost['date'].value,
            postContent: content,
            postName: createPost['title'].value,
            image: fileUrl
        }).then(() => {
            createPost.reset();
        }).catch(error => {
            console.log(error.message);
        })
    })
    
    //Login
    const loginForm =  document.querySelector('#loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('.error').classList.add('hide');
        //get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
                // document.querySelector('.authentification').classList.add('hide');
        }).catch(error => {
            document.querySelector('.error').classList.remove('hide');
        })
    })

    //Logout
    const logout = document.querySelector('#logOutLink a');
    const login = document.querySelector('#logInLink a');

    logout.addEventListener('click', (e)=> {
        e.preventDefault();
        removeCurrentMenuItem();
        logout.parentElement.classList.add('current-menu-item');
        auth.signOut();
        document.querySelector('.authentification').classList.remove('hide');
        document.querySelector('.error').classList.add('hide');
        loginForm.reset();
    });

    //Current menu Items
    login.addEventListener('click', (e)=> {
        e.preventDefault();
        removeCurrentMenuItem();
        login.parentElement.classList.add('current-menu-item');
        document.querySelector('.error').classList.add('hide');

    })

    function removeCurrentMenuItem() {
        const links = document.querySelectorAll('.menu-links li');
        links.forEach((link) => {
            if (link.classList.contains('current-menu-item')){
                link.classList.remove('current-menu-item');
            }
        })
    }
})  