import firebase from 'firebase';

const data = {
  list: [
    {
      title: "Word Chain Talker",
      version: "1.0",
      desc: "Chain our words and bond our hearts.",
      img: "https://storage.googleapis.com/appcollection-f9fae.appspot.com/images/wordchaintalker.jpg",
      url: "https://wordchaingame-3e0fc.web.app/",
      click: 9,
    },
    {
      title: "Hori Roll",
      version: "1.1.3",
      desc: "Roll hori as far away as possible !",
      img: "https://storage.googleapis.com/appcollection-f9fae.appspot.com/images/horiroll.jpg",
      url: "https://horiroll.web.app/",
      click: 5,
    },
    {
      titke: "Twitter Clone",
      version: "1.0",
      desc: "Talk to yourself!",
      img: "https://storage.googleapis.com/appcollection-f9fae.appspot.com/images/twitterclone.jpg",
      url: "https://deltoid3.github.io/twitterclone/",
      click: 6,
    }
  ]
}

const writeData = () => {
  if(!firebase.apps.length) {
    firebase.initializeApp({
    apiKey: "AIzaSyDvSR970rhBkEDVnLF3zV9ILmNMNzL5Lz4",
    authDomain: "appcollection-f9fae.firebaseapp.com",
    projectId: "appcollection-f9fae",
    storageBucket: "appcollection-f9fae.appspot.com",
    messagingSenderId: "731448280403",
    appId: "1:731448280403:web:7b07c37cccf5790bbe0da6",
    measurementId: "G-4SR59JR8MN"
  });
  }

  (async () => {
    const db = firebase.firestore();
    await db.collection("data").doc("bv47K7fcuX8iEmZ0c7eI").set(data);
  })();
}

export default writeData;