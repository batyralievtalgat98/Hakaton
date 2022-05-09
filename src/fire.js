import firebase from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBkUTs1sm3Qe6JF4BKGW2rlQyrJav3Qpxg",
  authDomain: "wine-shop-9d6f5.firebaseapp.com",
  projectId: "wine-shop-9d6f5",
  storageBucket: "wine-shop-9d6f5.appspot.com",
  messagingSenderId: "50541437222",
  appId: "1:50541437222:web:dcd80caa2a09b15f09a1e7"
};

const fire = firebase.initializeApp(firebaseConfig)


export default fire;