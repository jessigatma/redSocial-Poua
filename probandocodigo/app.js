// Initialize Firebase
var config = {
    apiKey: "AIzaSyBv4z2_UHScB0OyMO3WtdoAJAMGGkIGCd8",
    authDomain: "social-network-mangocoders.firebaseapp.com",
    databaseURL: "https://social-network-mangocoders.firebaseio.com",
    projectId: "social-network-mangocoders",
    storageBucket: "social-network-mangocoders.appspot.com",
    messagingSenderId: "392739589853"
    };
firebase.initializeApp(config);

//---------------- window.history -------------------------

let tabs = document.querySelectorAll("[data-tab-for]");

function showRegister(){

    tabs[1].classList.remove('hide');
    tabs[1].classList.add('active');
 
    tabs[0].classList.remove('active');
    tabs[0].classList.add('hide');

    location.hash='#register';
}
document.getElementById("createAccount").addEventListener("click",showRegister,false);

// ------------------------ LOGIN, SIGNUP, CLOSE SESSION----------------

function registrar(){
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
      
}

function ingreso(){
    const email2 = document.getElementById('email2').value;
    const contrasena2 = document.getElementById('contrasena2').value;

    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        alert('Tu usuario o contraseña es incorrecto');
        // ...
      });
      
}

function observador(){

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
         //console.log('existe usuario activo');
         aparece(); //aparece esta función cuando está activo el usuario
          const displayName = user.displayName;
          const email = user.email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const isAnonymous = user.isAnonymous;
          const uid = user.uid;
          const providerData = user.providerData;
          handleSignedInUser(firebaseUser);
                   // ...
        } else {
          // User is signed out.
          // ...
         // console.log('no existe usuario activo')
         handleSignedOutUser();
        }
      });
}
observador();

function aparece(){

    tabs[2].classList.remove('hide'); //remueve el hide de mi class para el content
    tabs[2].classList.add('active'); 
 
    tabs[0].classList.remove('active'); // remuevo el active de mi class del register para que no esté junto al contenido
    tabs[0].classList.add('hide');

    const contenido =  document.getElementById('contenido');
    contenido.innerHTML = ` <p>Bienvenido</p>
    <button onclick="cerrar();">Cerrar Sesión</button>`;
    location.hash='#content';
} 

function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('saliendo...');
    })
    .catch(function(error){
        console.log(error);
    })
}

function handleSignedInUser(firebaseUser) {
    location.hash = "#register";
}

function handleSignedOutUser() {
    location.hash = "#login";
}


