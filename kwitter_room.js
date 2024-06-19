var firebaseConfig = {
    apiKey: "AIzaSyDAJE29TDm3YllKCKu32fJ3x5L29azFLFk",
    authDomain: "projectkwi.firebaseapp.com",
    projectId: "projectkwi",
    storageBucket: "projectkwi.appspot.com",
    messagingSenderId: "643119211377",
    appId: "1:643119211377:web:f901c38805eb7fd4b48cd0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +  user_name + "!";
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }