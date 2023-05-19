import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */


//////////////////////////////////////////// firebase /////////////////////////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTJexWL-wh-cyQcVGu6q7q1JKPLeg-eN4",
  authDomain: "practicasandroid-2c7b1.firebaseapp.com",
  databaseURL: "https://practicasandroid-2c7b1-default-rtdb.firebaseio.com",
  projectId: "practicasandroid-2c7b1",
  storageBucket: "practicasandroid-2c7b1.appspot.com",
  messagingSenderId: "103162547349",
  appId: "1:103162547349:web:f087a6bb39092d82805f9c"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);


//////////////////////////////////////////// firebase /////////////////////////////////////////////////////////////



import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(appfirebase)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});


