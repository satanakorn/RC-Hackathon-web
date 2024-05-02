const toggler = document.querySelector("#sidebar-btn");

toggler.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("collapsed");
})

const form = document.getElementById('form');
const email = document.getElementById('email-form');
const password = document.getElementById('password-form');
const modal = document.getElementById('myModal');
let emailCheck = false
let passwordCheck = false

form.addEventListener('submit' , function(e) {
    e.preventDefault();
    checkInput([email,password]);
    // เอาไว้เช็ค Password
    if (!validateEmail(email.value.trim())) {
        emailCheck = showerror(email,'อีเมลไม่ถูกต้อง');
    }
    else {
        emailCheck = showsuccess(email);
    }
    passwordCheck = checkPassword(password);
    loginSuccess();
})

function loginSuccess() {
    if (emailCheck && passwordCheck) {
        localStorage.setItem("rc_hackathon_email" , email.value)
        localStorage.setItem("rc_hackathon_id", password.value)
        settingName()
        modal.style.display = 'block';

        setTimeout(function () {
            // Replace 'nextPage.html' with the actual URL of the next page
            window.location.href = '../templates/index.html';
          }, 3000);
        }

}

function settingName() {
    const studentName = email.value
    let nameArray = []
    for (const character of studentName) {
        if (character != ".") {
            nameArray.push(character)
        }
        else if (character == ".") {
            break
        }
    }
    nameArray[0] = nameArray[0].charAt(0).toUpperCase()
    const realName = nameArray.join('')
    localStorage.setItem("rc_hackathon_name",realName)
}

function checkInput(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value.trim() === '') {
            showerror(input,`กรุณาป้อน ${getInputCase(input)}`);
        }
        else {
            showsuccess(input);
        }
    })
}

function checkPassword(input) {
    if (input.value.length != 11) {
        showerror(input,`${getInputCase(input)} ต้องมี 11 ตัวเลข`)
        return false
    } else {
        showsuccess(input);
        return true
    }
}

function showerror(input,message) {
    const formControl = input.parentElement;
    formControl.className=`form-outline mb-4 error`;
    const small = formControl.querySelector('small');
    small.innerText = message;
    return false
}

function showsuccess(input) {
    const formControl = input.parentElement;
    formControl.className=`form-outline mb-4 success`;
    return true
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

function getInputCase(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function enterCheck() {
}
