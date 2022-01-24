function userNameValidation(username){
    if(username.toLowerCase() == 'null') return false;
    if(username.length < 3 || username.length > 20) return false;
    if(!/[a-zA-Z_][0-9a-zA-Z_]*/.test(username)) return false;
    return true;
}

function emailValidation(email){
    if(email.toLowerCase() == 'null') return false;
    if(email.length < 3 || email.length > 96) return false;
    if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) return false;
    return true;
}

function passwordValidation(password){
    if(password.length < 8 || password.length > 256) return false;
    return true;
}

function validateUserForm(form){
    if(!userNameValidation(form.username)) return 'Invalid username';
    if(!emailValidation(form.email)) return 'Invalid email';
    if(!passwordValidation(form.password)) return 'Invalid password';

    return 'Valid form';
}

module.exports = {validateUserForm, emailValidation}