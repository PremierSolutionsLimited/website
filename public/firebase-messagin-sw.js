// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyDsG17OENjc4mJj6FaqGQDYatrfGdPFUeQ",
    authDomain: "psl-had.firebaseapp.com",
    projectId: "psl-had",
    storageBucket: "psl-had.appspot.com",
    messagingSenderId: "518553240943",
    appId: "1:518553240943:web:f1f1d288e132af537ad49a",
    measurementId: "G-D0PMK42PKL",
  };

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload?.notification?.title;
  const notificationOptions = {
    body: payload?.notification?.body,
  };

  self?.registration?.showNotification(notificationTitle, notificationOptions);
});
