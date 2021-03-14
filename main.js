function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}

function onFailure(error) {
    console.log(error);
}

function renderButton() {
    gapi.signin2.render('g-signin2', {
        'scope': 'profile email',
        'width': 300,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}

function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();

    // get user's name
    let element = document.getElementById('profile__name')
    element.innerText = profile.getName();

    // get user's image
    let image = document.getElementById('profile__image');
    image.setAttribute('src', profile.getImageUrl());

    // get user's email
    let email = document.getElementById('profile__email');
    email.innerText = profile.getEmail();

}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

    HideProfileDisplayButton();
}

function redirect() {
    document.location.href = 'http://localhost:5500/google.html';
}

function back() {
    document.location.href = 'http://localhost:5500';
}

function displayProfileHideButton(){
    let profile = document.getElementById('profile');
    profile.style.display = "block";
    
    let button = document.getElementById('g-signin2');
    button.style.display = "none";
}

function HideProfileDisplayButton(){
    let profile = document.getElementById('profile');
    profile.style.display = "none";

    let button = document.getElementById('g-signin2');
    button.style.display = "block";
}


