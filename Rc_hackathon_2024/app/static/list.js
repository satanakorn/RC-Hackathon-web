const toggler = document.querySelector("#sidebar-btn");

toggler.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("collapsed");
})

// Login Section

const modal = document.getElementById('myModal');

const checkLogin=()=> {
    if (!localStorage.getItem("rc_hackathon_id")) {

    }
}

// Loading the status of quizs!

const allItem = document.querySelectorAll(".button-status");

function checkStatus() {

    // Let the element not passed at first and then modify it later.
    for (const buttonElement of allItem) {
        notPassed(buttonElement)
    }

    // RC-quiz localStorage should be [4,5,3,2]
    if (localStorage.getItem('rc_quiz')) {
        const passed_quiz = localStorage.getItem('rc_quiz')
        for (const number of passed_quiz) {
            Passed(allItem[number-1])
        }
    }

}

function notPassed(buttonEl) {
    buttonEl.classList.add("btn-danger")
    buttonEl.classList.remove("btn-success")
    buttonEl.textContent = `Status : ยังไม่ผ่าน`
}

function Passed(buttonEl) {
    buttonEl.classList.remove("btn-danger")
    buttonEl.classList.add("btn-success")
    buttonEl.textContent = `Status : ผ่านแล้ว`
}

checkLogin()

checkStatus()