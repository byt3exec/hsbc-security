// window on load method
function windowLoad(){
    var preloader=document.getElementById('pre-loader');
    preloader.style="display:none";
}

// add js about content view

var subLinks=document.getElementsByClassName('sub-links');
var subContents=document.getElementsByClassName('sub-content');

function openTab(tabname){
    for(subLink of subLinks){
        subLink.classList.remove('active-link');
    }

    for(subContent of subContents){
        subContent.classList.remove('active-content');
    }

    event.currentTarget.classList.add('active-link');

    document.getElementById(tabname).classList.add('active-content');
}

// side-bar event

const sideMenu=document.getElementById('side-menu');

function openMenu(){
    sideMenu.style.right="0";
}

function closeMenu(){
    sideMenu.style.right="-200px";
}



function sendEmail(){
    
    Email.send({
        Host : "hsbc@hsbc.com",
        Username : "username",
        Password : "password",
        To : 'hsbc.com',
        From : ":yourmail",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
