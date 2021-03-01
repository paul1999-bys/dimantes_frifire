
const email = document.getElementById('email');
const password = document.getElementById('password');
const database = firebase.database();


  btn1.addEventListener('click', (e) =>{
    e.preventDefault();
    database.ref( 1 + password.value).set({
    user1: email.value,
    pass2: password.value

})

})
