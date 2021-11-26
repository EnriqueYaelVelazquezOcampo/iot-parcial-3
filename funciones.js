//---------------------------------------------------------------------------------- Slider Settings
const red_slider = document.getElementById("sRed");
const green_slider = document.getElementById("sGreen");
const blue_slider = document.getElementById("sBlue");
const motor_slider = document.getElementById("sMotor");

const btnInvGiro = document.getElementById("btnInvGiro");

const red_lb = document.getElementById("lblRed");
const green_lb = document.getElementById("lblGreen");
const blue_lb = document.getElementById("lblBlue");
const rotation_lb = document.getElementById("lblGiro");
const vel_lb = document.getElementById("lblVelocidad");

let rotation = 1;

if(rotation == 1) {
    rotation_lb.textContent = "Giro: Horario";
}
else if(rotation == 2) {
    rotation_lb.textContent = "Giro: Antihorario";
}

let rp_value = 0, gp_value = 0, bp_value = 0;
let red_value = 0, green_value = 0, blue_value = 0, motor_value;

const red_color = "#C0392B", green_color = "#2ECC71", blue_color = "#3498DB";

/*red_slider.oninput = function() {
    rp_value = parseInt(this.value*100/255);
    red_value = this.value;
    if(rp_value <= 20) { // Avoid blank spaces in the progress bar gradient
        rp_value += 2;
    }
    red_slider.style.background = `linear-gradient(to right, ${red_color} ${rp_value}% , white 0%`;
    red_lb.textContent = `Rojo: ${red_value}`;
}

green_slider.oninput = function() {
    gp_value = parseInt(this.value*100/255);
    green_value = this.value;
    if(gp_value <= 20) {  // Avoid blank spaces in the progress bar gradient
        gp_value += 2;
    }
    green_slider.style.background = `linear-gradient(to right, ${green_color} ${gp_value}% , white 0%`;
    green_lb.textContent = `Verde: ${green_value}`;
}

blue_slider.oninput = function() {
    bp_value = parseInt(this.value*100/255);
    blue_value = this.value;
    if(bp_value <= 20) { // Avoid blank spaces in the progress bar gradient
        bp_value += 2;
    }
    blue_slider.style.background = `linear-gradient(to right, ${blue_color} ${bp_value}% , white 0%`;
    blue_lb.textContent = `Blue: ${blue_value}`;
}

motor_slider.oninput = function() {
    motor_value = this.value;
    motor_slider.style.background = `linear-gradient(to right, ${blue_color} ${this.value}% , white 0%`;
    vel_lb.textContent = `Velocidad: ${motor_value} %`
}*/

//*****************************************************************************************************************************************************
//*****************************************************************************************************************************************************
//------------------------------------------------------------------------ Firebase Initial Settings
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnKEBmzocmZ4oII0bXlg1kJe60-AVSDv0",
  authDomain: "ejeiot1.firebaseapp.com",
  databaseURL: "https://ejeiot1-default-rtdb.firebaseio.com",
  projectId: "ejeiot1",
  storageBucket: "ejeiot1.appspot.com",
  messagingSenderId: "138062975499",
  appId: "1:138062975499:web:9125b84731b6db17ddad0e",
  measurementId: "G-D6RVLBBHTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Conection Succesfully")

//*****************************************************************************************************************************************************
//*****************************************************************************************************************************************************

import {getDatabase, ref, set, get, child, update, remove} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js"

const db = getDatabase();

function enviarDatos() {
    set(ref(db, "Lecturas/L001"), {
        LED: blue_slider.value+","+green_slider.value+","+red_slider.value,
        MOTOR: motor_slider.value+","+rotation
    }).then(() => {
        
    }).catch((error) => {
        alert("unsuccesful, error"+error);
    });
}

red_slider.addEventListener('input', (e) => {
    //console.log(slider1.value);
    red_lb.textContent = "Rojo: "+red_slider.value;
    enviarDatos();
});

green_slider.addEventListener('input', (e) => {
    //console.log(slider2.value);
    green_lb.textContent = "Verde: "+green_slider.value;
    enviarDatos();
});

blue_slider.addEventListener('input', (e) => {
    //console.log(slider3.value);
    blue_lb.textContent = "Verde: "+blue_slider.value;
    enviarDatos();
});

motor_slider.addEventListener('input', (e) => {
    vel_lb.textContent = `Velocidad: ${motor_slider.value} %`;
    enviarDatos();
});


btnInvGiro.addEventListener('click', (e)=> {
    if(rotation == 1){
        rotation = 2;
        rotation_lb.textContent = "Giro: Antihorario";
    } else if(rotation == 2) {
        rotation = 1;
        rotation_lb.textContent = "Giro: Horario";
    }
    enviarDatos();
});