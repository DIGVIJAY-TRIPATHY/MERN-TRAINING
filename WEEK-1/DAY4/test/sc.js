let pass = '1234';

let user = prompt('give the password');

let isCorrect = false;

do {
  if (user == pass) {
    alert('password is correct');
    isCorrect = true;
    alert('Welcome user');
    break;
  } else {
    alert('password is not correct');
    user = prompt('give password');
  }
} while (!isCorrect);