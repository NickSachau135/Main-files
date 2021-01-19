document.getElementById('submit').onclick = function () {submit()};

function submit() {
    let profile = {};
    profile["Username"] = document.getElementById('user').value;
    profile["Password"] = document.getElementById('pass').value;
    profile["PhoneNumber"] = document.getElementById('number').value;
    profile["Email"] = document.getElementById('email').value;
    console.log(profile);

    document.getElementById('user').value = "";
    document.getElementById('pass').value = "";
    document.getElementById('number').value = "";
    document.getElementById('email').value = "";
}