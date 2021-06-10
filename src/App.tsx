import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Card } from "./components/index";
// import writeData from "./data";

type Data = {
  title: string,
  version: string,
  desc: string,
  img: string,
  url: string,
  click: number,
}

function App() {
  const [data, setData] = useState<Data[]>([]);

  // writeData();
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
    (async () => {
      const db = firebase.firestore();
      const appData = db.collection("data").doc("bv47K7fcuX8iEmZ0c7eI");
      await appData.get().then((doc) => {
        setData(doc.get("list"));
      });
    })();
  }, [])

  const handleClick = (idx: number) => {
    data[idx].click++;
    setData(data);
    const newData = {
      list: data,
    };
    console.log(newData);
    (async () => {
      const db = firebase.firestore();
      await db.collection("data").doc("bv47K7fcuX8iEmZ0c7eI").set(newData);
    })();
  }

  return (
    <div className="pt-6">
      <header className="bg-white font-bold mb-10 px-8 sticky shadow-md top-0">
        <h1 className="mb-3 text-5xl">App Collection</h1>
        <p className="text-lg text-gray-400 pb-4">Why Don't You Waste Your Time ?</p>
      </header>
      <section className="px-8">
        {data.map((data,idx) => (
          <Card data={data} handleClick={handleClick} idx={idx} key={idx} />
        ))}
      </section>
    </div>
  );
}

export default App;