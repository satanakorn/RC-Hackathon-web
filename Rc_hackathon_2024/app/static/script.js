const toggler = document.querySelector("#sidebar-btn");

toggler.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("collapsed");
})

// Login Section

const profileElement = document.getElementById('profile');

const userIcon = document.getElementById('user-icon');
const loginButton = document.getElementById('login-icon');
const loginUsername = document.getElementById('username');


const changeIcon=()=> {
    if (profileElement.classList.contains('login')) {
        userIcon.style.display = "block";
        loginButton.style.display = "none";
    }
    else { 
        userIcon.style.display = "none";
        loginButton.style.display = "block";
    }
}

const checkLogin=()=> {
    if (localStorage.getItem("rc_hackathon_id") && profileElement.className == "profile") {
        console.log("Added")
        loginUsername.innerHTML = `${localStorage.getItem('rc_hackathon_name')}`
        profileElement.classList.add('login')
        changeIcon();
    }
}

changeIcon();
checkLogin();

// Join Button

const join = document.getElementById("join-button")

join.addEventListener('click', ()=> {
    if (localStorage.getItem("rc_hackathon_id")) {
        window.location.href = './pages/list.html';
    }
    else {
        window.location.href = './pages/login.html';
    }
})

