const passwordBox = document.getElementById('password');
const copyButton = document.getElementById('copy');
const length = 12;
const upper = "ABCDEGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "@#$&?";
const allChars = upper + lower + number + special;

function createPassword() {
    let password = '';
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

copyButton.addEventListener('click', () => {
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
