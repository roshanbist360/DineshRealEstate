 
 // mobie menu controls
 function openMobileMenu(){
    document.getElementById('mbmn').style.width="260px";
    document.getElementById('main-wrap').style.display="block";

    var element = document.getElementById("mbmn");
    element.classList.add("overlay");
};      
function closeMobileMenu(){
    document.getElementById('mbmn').style.width="0px";
    document.getElementById('main-wrap').style.display="none";
      
    var element = document.getElementById("mbmn");
    element.classList.remove("overlay");        	 
};


// sign-In-Register Controls
function showSignInForm(){
    document.getElementById('sign-in-wrapper').style.display="block";
};

function closeSignInForm(){
    document.getElementById('sign-in-wrapper').style.display="none";
};

function openRegisterForm(){
    document.getElementById('sign-in-wrapper').style.display="none";
    document.getElementById('register-wrapper').style.display="block";
    event.preventDefault();
};

function closeRegisterForm(){
    document.getElementById('register-wrapper').style.display="none";
    document.getElementById('sign-in-wrapper').style.display="block";
    event.preventDefault();
};
//for closing register form oncick at red close at top of form
function closeRegisterForm1(){
    document.getElementById('register-wrapper').style.display="none";
};