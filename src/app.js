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

 const provider = new firebase.auth.GoogleAuthProvider();
 const db = firebase.firestore();
 const tabs = document.querySelectorAll("[data-tab-for]"); //nos sirve para llamar al location.hash


 //+++++++++++++++++++++ REGISTRA CON CUENTA DE GOOGLE++++++++++++++++++++//

 //funcion observador de Google
 function googleWatcher() {

   firebase.auth()
     .signInWithPopup(provider)
     .then(function (result) {
       console.log(result.user);
       saveData(result.user);
       tabs[2].classList.remove('hide'); //remueve el hide de mi class para el content
       tabs[2].classList.add('active');

       tabs[1].classList.remove('active'); // remuevo el active de mi class del register para que no esté junto al contenido
       tabs[1].classList.add('hide');

       location.hash = '#wall';

       //showSession();
       //This gives you a Google Access Token. You can use it to access the Google API.
       var token = result.credential.accessToken;
       // The signed-in user info.
       var user = result.user;
       // ...
     }).catch(function (error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // The email of the user's account used.
       var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
       // ...
     });

 }
 document.getElementById("loginGoogle").addEventListener("click", googleWatcher, false);
 document.getElementById("loginGoogle1").addEventListener("click", googleWatcher, false);

 function saveData(user) { //función que guarda los datos en la base de datos de firebase
   const usuario = {
     uid: user.uid,
     nombre: user.displayName,
     email: user.email,
     foto: user.photoURL,
   }
   firebase.database().ref('redsocial/' + user.uid)
     .set(usuario)
 }

 //++++++++++++++ CUANDO NO HE CREADO UNA CUENTA++++++++++++++++++++

 function createAccount() {

   tabs[1].classList.remove('hide');
   tabs[1].classList.add('active');

   tabs[0].classList.remove('active');
   tabs[0].classList.add('hide');

   location.hash = '#register';
 }
 document.getElementById("createAccount").addEventListener("click", createAccount, false);

 // +++++++++++++++++ REGISTRA CON E-MAIL +++++++++++++++++++++++++++

 function register() {
   const email = document.getElementById('email').value;
   const contrasena = document.getElementById('contrasena').value;

   firebase.auth().createUserWithEmailAndPassword(email, contrasena)
     .catch(function (error) {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // ...
     });
 }
 document.getElementById("registerBtn").addEventListener("click", register, false);

 function logInSession() {
   const email2 = document.getElementById('email2').value;
   const contrasena2 = document.getElementById('contrasena2').value;

   firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
     .catch(function (error) {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorCode + errorMessage);
       alert('Tu usuario o contraseña es incorrecto');
       // ...
     });
 }
 document.getElementById("loginBtn").addEventListener("click", logInSession, false);
 document.getElementById("loginBtn1").addEventListener("click", logInSession, false);

 function watcher() {

   firebase.auth().onAuthStateChanged(function (user) {
     if (user) {
       // User is signed in.
       //console.log('existe usuario activo');
       showPost(); //aparece esta función cuando está activo el usuario
       const displayName = user.displayName;
       const email = user.email;
       const emailVerified = user.emailVerified;
       const photoURL = user.photoURL;
       const isAnonymous = user.isAnonymous;
       const uid = user.uid;
       const providerData = user.providerData;
       handleSignedInUser(user);
       // ...
     } else {
       // User is signed out.
       // ...
       console.log('no existe usuario activo');
       handleSignedOutUser();
     }
   });
 }
 watcher();


 //++++++++++++++++++++ EL MURO DE LA APLICACION+++++++++++++++++++++

 function showPost() {

   tabs[2].classList.remove('hide'); //remueve el hide de mi class para el content
   tabs[2].classList.add('active');

   tabs[0].classList.remove('active'); // remuevo el active de mi class del register para que no esté junto al contenido
   tabs[0].classList.add('hide');

   location.hash = '#wall';

   const contenido = document.getElementById('wall');
   contenido.innerHTML = ` 
      <article class="post">
      <section class="mobile-barMenu">
        <a class="logoNav-mobile" href="#"><img src="imagenes/logo-poua-app.png" width="180"></a>
        <button id="menu-btn" class="menu-btn"><i class="fas fa-bars 2x menu-icon"></i></button>
      </section>

     <header>
      <nav class="nav">
       <ul>
         <li><a class="logoNav" href="#"><img src="imagenes/logo-poua-app.png" width="180"></a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>AMIGOS</a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>POR ESTADO</a></li>
         <li><a href="#"><i class="fas fa-search fa-sm"></i>POR ÉPOCA</a></li>
         <li><a href="#"><i class="fas fa-user fa-lg" style="color: #ffffff;"></i></a></li>
         <li><a href="#"><i class="fas fa-calendar-plus fa-lg" style="color: #ffffff;"></i></a></li>
         <li><a href="#"><i class="fas fa-bookmark fa-lg" style="color: #ffffff;"></i></a></li>
         <li><button id="closeBtn" onclick="closeSession();">Cerrar Sesión</button>
       </ul>
       </nav>
     </header>

     <section class="index">
      <img src="imagenes/boy.png" alt="user" width="45" height="45" class="user">
      <p>Bienvenido</p>
      <textarea name="Crea una publicación" id="createPost" class="createPost" cols="25" rows="5" placeholder="Cuenta la historia de un lugar que conoces"></textarea>
      <article class="controlsContainer">
        <img src="imagenes/image.png" alt="Subir foto" width="35" height="35">
        <img src="imagenes/location.png" alt="Localización" width="35" height="35">
        <select name="Seleccionar época" id="era" class="era">
          <option value="" selected>Seleccionar época</option>
          <option value="">México moderno</option>
          <option value="">México post-revolucionario</option>
          <option value="">Revolución mexicana</option>
          <option value="">Porfiriato</option>
          <option value="">Reforma</option>
          <option value="">México independiente</option>
          <option value="">Independencia</option>
          <option value="">Virreinato o Colonia</option>
          <option value="">La Conquista</option>
          <option value="">México prehispánico</option>
        </select>

        <select name="Seleccionar privacidad" id="privacy" class="privacy">
          <option value="">Público</option>
          <option value="">Privado</option>
        </select>
        <button id="public" class="makePost-btn" onclick="savePost();">PUBLICAR</button>
      </article>
    </section>

    <section id="visualizationPost" class="visualizationPost">
      
    </section>

    <footer class="desktop-foot">
      <p class="foot-parr">Powered By Perla, Jess & Itinna. 2019</p>
    </footer>

    <footer class="mobile-foot">
        <i class="fas fa-home fa-2x" style="color: #ffffff;"></i>
        <i class="fas fa-user fa-2x" style="color: #ffffff;"></i>
        <i class="fas fa-calendar-plus fa-2x" style="color: #ffffff;"></i>
        <i class="fas fa-bookmark fa-2x" style="color: #ffffff;"></i>
    </footer>
    
    `;
   //savePost();
   readPost();
 }

 function closeSession() { //cierra sesión
   firebase.auth().signOut()
     .then(function () {
       console.log('saliendo...');
       tabs[0].classList.remove('hide'); //remueve el hide de mi class para el content
       tabs[0].classList.add('active');

       tabs[2].classList.remove('active'); // remuevo el active de mi class del register para que no esté junto al contenido
       tabs[2].classList.add('hide');

       location.hash = '#login';
     })
     .catch(function (error) {
       console.log(error);
     })
 }

 function handleSignedInUser() { //inserta el location.hash cuando se autentica al usuario
   location.hash = "#wall";
 }

 function handleSignedOutUser() { //manda a login cuando no se autentica al usuario
   location.hash = "#login";
 }

 //***************************************************************************** */

 function savePost() {
   let postTime = new Date()
   const comment = document.getElementById("createPost").value;
   db.collection("users").add({
       comment: comment,
       time: postTime 
     })
     .then(function (docRef) {
       console.log("Document written with ID: ", docRef.id);
       document.getElementById("createPost").value = '';
     })
     .catch(function (error) {
       console.error("Error adding document: ", error);
     });
 }

 //leer documentos
 function readPost() {
   const visualizationPost = document.getElementById("visualizationPost")
   db.collection("users").orderBy("time","desc").onSnapshot((querySnapshot) => {
     visualizationPost.innerHTML = ' ';
     querySnapshot.forEach((doc) => {
       console.log(`${doc.id} => ${doc.data().comment}`);
       visualizationPost.innerHTML += `
            <article>
              <img src=''></img>
              <h6></h6>
            </article>
            <article id= "visualizationPost1" class="postContainer">
              <h4></h4>
              <button id="editar" class="editar" onclick="editPost('${doc.id}','${doc.data().comment}');"><i class="fas fa-pen"></i></button>
              <button class="eliminar" onclick="dlete('${doc.id}');"><i class="fas fa-trash-alt"></i></button>
              <p class="postextStyle">${doc.data().comment}</p>
              <img src=''></img>
              <button class="likeBtn" onclick="likePost('${doc.id}');"><i class="fas fa-heart" style="color #F1C711"></i></button>
              <p id="counter" class="likeBtn">0</p> 
              
            </article> 
            <article>
              <i></i>
              <p></p>
              <p></p>
              <h6></h6>
            </article>
          `
     });
    });
 }

 //borrar documentos-------------------------------
 function dlete(id) {
   db.collection("users").doc(id).delete().then(function () {
     console.log("Document successfully deleted!");
   }).catch(function (error) {
     console.error("Error removing document: ", error);
   });
 }

 //editar documentos-------------------------------
 function editPost(id, comment) {
   document.getElementById("createPost").value = comment;

   const washingtonRef = db.collection("users").doc(id);
   // Set the "capital" field of the city 'DC'
   return washingtonRef.update({
       comment: comment
     })
     .then(function () {
       dlete(id);
       console.log("Document successfully updated!");
     })
     .catch(function (error) {
       // The document probably doesn't exist.
       console.error("Error updating document: ", error);
     });
 }

 //aumentar likes al programa---------------------
   
   //El problema es que no sé cómo jalar cada id 
   let likesCounter = 0;
 function likePost() {
    const counter = document.getElementById('counter');
  // db.collection("users").doc(id).then(function(){
    counter.innerHTML = likesCounter += 1;
  // });
}
