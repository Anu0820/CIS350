const login = document.getElementById('login');
const Userid = document.getElementById('Userid');
const Password = document.getElementById('Password');

login.addEventListener('submit', (e) => {
   e.preventDeudalt ();
   checkInputs();
});

function checkInputs() {
   const UseridValue = Userid.value.trim();
   const PasswordValue = Password.value.trim()

if(UseridValue === '') {
 serErrorFor(Userid, 'Userid cannot be blank');
} else {
    setSuccessFor(Userid);
}

}

function setErrorFor(input,message) {
   const formControl = input.parentElement;
   const small =formControl.quertSelector('small');

   small.innerText = message;
   formControl.className = 'form-control error'

}