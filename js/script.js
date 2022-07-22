const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

// Functions...
function checkInputs() {
  // Pegando os valores dos inputs...
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // VERIFICANDO O USERNAME...
  if (usernameValue === '') {
    // Mostrar M. de erro...
    // Add classe de erro...
    setErrorFor(username, 'Username não pode ser usado');
  } else {
    // Add classe secess...
    setSuccessFor(username);
  }
  // VERIFICANDO O E-MAIL...
  if (emailValue === '') {
    // Mostrar M. de erro...
    // Add classe de erro...
    setErrorFor(email, 'E-mail não pode ser usado');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'E-mail não é valido');
  } else {
    setSuccessFor(email);
  }

  // VERIFICANDO O PASSWORD...
  if (passwordValue === '') {
    setErrorFor(password, 'Senha Invalida!');
  } else {
    setSuccessFor(password);
  }
  // VERIFICANDO O PASSWORD2...
  if (password2Value === '') {
    setErrorFor(password2, 'Senha Invalida!');
  } else if (passwordValue !== password2Value){
    setErrorFor(password2, 'Senhas não iguais!');
  }else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  // .form-control...
  const formControl = input.parentElement; 
  const small = formControl.querySelector('small');

  // add mensagem de erro...
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control sucess';
}

// Verificando se o email é um email...
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}