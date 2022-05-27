const firebaseConfig = {
  apiKey: "AIzaSyAG6ZOOYEKL46pOSYl8XwBvajcoBY3_bso",
  authDomain: "kwitterproject-8aa81.firebaseapp.com",
  databaseURL: "https://kwitterproject-8aa81-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-8aa81",
  storageBucket: "kwitterproject-8aa81.appspot.com",
  messagingSenderId: "257268451210",
  appId: "1:257268451210:web:470976ab6fa16208ce2a73"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome "+username+"!";

  function addRoom() {
    room_name = document.getElementById("inputroom").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)'># "+ Room_names+" </div>";
//End code
});});}
getData();

function redirectToRoomName(name) {
  console.log(name)
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}