let counter = 0;
window.localStorage.clear();


function getInfo(){
    const email = document.getElementById('signup-input').value
    counter += 1;
    window.localStorage.setItem(`Email ${counter}`, email);
    console.log('Email received')
}