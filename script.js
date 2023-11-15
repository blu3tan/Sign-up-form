
const pwd = document.getElementById('password');
const pwdcheck = document.getElementById('password-check');
const check = document.getElementById('check');

pwdcheck.addEventListener('input', () => {
    compare();
});

pwd.addEventListener('input', () => {
    comparePwdAfter();
});

function compare() {
    if (!pwdcheck.value) {
        check.innerHTML = ' ';
        check.classList.remove('compare');
    }
    else if (pwd.value !== pwdcheck.value) {
        check.classList.add('compare');
        check.innerHTML = 'Please enter the same password';
    }
    else {
        check.innerHTML = ' ';
        check.classList.remove('compare');
    }
};

// This function fix the case when users corrects the password-check field before the password fits the given pattern

function comparePwdAfter() {
    if (pwd.value !== pwdcheck.value) {
        check.innerHTML = ' ';
        check.classList.remove('compare');
    }
}