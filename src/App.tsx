import { useEffect } from 'react';
import firebase from 'firebase';
import { Card } from "./components/index";
import data from './data';

type Data = {
  title: string,
  version: string,
  desc: string,
  img: string,
  link: string,
}

function App() {
  useEffect(() => {
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
  }, [])

  return (
    <div className="pt-4 px-8">
      <header className="font-bold mb-8 sticky">
        <h1 className="mb-3 text-5xl">App Collection</h1>
        <p className="text-lg text-gray-400 tracking-wide">Why Don't You Waste Your Time ?</p>
      </header>
      <Card data={data.list[0]} />
      {/* {data.list.map((data,idx) => (
        <Card key={idx} data={data} />
      ))} */}
    </div>
  );
}

export default App;
