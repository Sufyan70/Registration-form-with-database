// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, set, ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ZQqAsQVcuiA6uHy9JH12i9a2dEEsu0M",
  authDomain: "real-time-data-base-e1e9c.firebaseapp.com",
  databaseURL: "https://real-time-data-base-e1e9c-default-rtdb.firebaseio.com",
  projectId: "real-time-data-base-e1e9c",
  storageBucket: "real-time-data-base-e1e9c.appspot.com",
  messagingSenderId: "107978563172",
  appId: "1:107978563172:web:eeeb4a957ff951b30bc971",
  measurementId: "G-ZE0ZG1SW2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var Qualificaton = document.getElementById("Qualificaton");
var nic = document.getElementById("nic");
var emailAddress = document.getElementById("emailAddress");
var phoneNumber = document.getElementById("phoneNumber");
var Cource = document.getElementById("Cource");
var Password = document.getElementById("Password");
// errors msg variables:
var firstNameError = document.getElementById("firstNameError");
var LastNameError = document.getElementById("LastNameError");
var QualificationError = document.getElementById("QualificationError");
var nicError = document.getElementById("nicError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var courceError = document.getElementById("courceError");
var passError = document.getElementById("passError");
var passErrorLength = document.getElementById("passErrorLength");
var parent = document.getElementById("parent");

window.Add = function () {
  var obj = {
    Firstname: firstName.value,
    Lastname: lastName.value,
    qualif: Qualificaton.value,
    NIC: nic.value,
    email: emailAddress.value,
    phone: phoneNumber.value,
    cource: Cource.value,
    pass: Password.value,
  };
  function firstNameValidation() {
    if (firstName.value === "") {
      firstNameError.style.display = "block";
      return false;
    } else {
      // console.log(obj);
      // parent.innerHTML = obj.Firstname;
      firstNameError.style.display = "none";
      return true;
    }
  }
  function lastnameValidation() {
    if (lastName.value === "") {
      LastNameError.style.display = "block";
      return false;
    } else {
      // console.log(obj);
      // parent.innerHTML = obj.Lastname;
      LastNameError.style.display = "none";
      return true;
    }
  }
  function QualificationValidation() {
    if (Qualificaton.value === "") {
      QualificationError.style.display = "block";
      return false;
    } else {
      // console.log(obj);
      // parent.innerHTML = obj.qualif;
      QualificationError.style.display = "none";
      return true;
    }
  }
  function NicValidation() {
    if (nic.value === "") {
      nicError.style.display = "block";
      return false;
    } else {
      // console.log(obj);
      // parent.innerHTML = obj.NIC;
      nicError.style.display = "none";
      return true;
    }
  }
  function emailValidation() {
    // var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAddress.value === "") {
      emailError.style.display = "block";
      return false;
    }
    else {
      // console.log(obj);
      // parent.innerHTML = obj.email;
      emailError.style.display = "none";
      return true;
    }
  }
  function phoneValidation() {
    if (phoneNumber.value === "") {
      phoneError.style.display = "block";
      return false;
    } else {
      // console.log(obj);
      // parent.innerHTML = obj.phone;
      phoneError.style.display = "none";
      return true;
    }
  }
  function courceValidation() {
    if (Cource.value === "") {
      courceError.style.display = "block";
      return false;
    } else {
      // console.log(obj);
      // parent.innerHTML = obj.cource;
      courceError.style.display = "none";
      return true;
    }
  }
  function passValidation() {
    if (Password.value === "") {
      passError.style.display = "block";
      return false;
    } else if (Password.value.length < 8) {
      passError.style.display = "none";
      passErrorLength.style.display = "block";
      return true;
    } else {
      // console.log(obj);
      // parent.innerHTML = obj.pass;
      passErrorLength.style.display = "none";
      return true;
    }
  }
  
  firstNameValidation();
  lastnameValidation();
  QualificationValidation();
  NicValidation();
  emailValidation();
  phoneValidation();
  courceValidation();
  passValidation();
  
  obj.identify = Math.random().toString().slice(2);
  let reference = ref(database, `Data/${obj.identify}/`);
  set(reference, obj);
}

function getData(){
  let reference = ref(database,"Data/");
  let arr = [];
  onChildAdded(reference,function(data){
    arr.push(data.val());
    console.log(arr);
    // parent.innerHTML = "";
    for(var i = 0; i < arr.length; i++){
      parent.innerHTML += `<li>${arr[i].data}</li>`
    }
  })
}
getData();
