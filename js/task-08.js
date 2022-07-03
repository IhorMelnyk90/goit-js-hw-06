const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onButtonLoginFormSubmit);

function onButtonLoginFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (email === '' || password === ''){
        alert("Будь ласка заповніть всі поля авторизації");
    }
    else{
        const formData = {
          email,
          password,
        };
        console.log(formData);
      }
    return loginForm.reset();
};