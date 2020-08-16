import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from "./firebase";

function App() {

  const [reels, setreels] = useState([])

  useEffect(() => {
    db.collection("reels").onSnapshot(snapshot =>
      setreels(snapshot.docs.map(doc => doc.data())
      ))

  }, [])

  return (
    <div className="app">
        <div className="app__top">
          <img
            className="app__logo"
            src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png"
            alt="Insta logos"
          />
          <h1>Reels</h1>
        </div>
        <div className="app__videos">
          {reels.map(({url, shares,channel,likes,avatarSrc,song}) => (
            <VideoCard
            channel = {channel}
            avatarSrc = {avatarSrc}
            song ={ song}
            url ={url}
            likes ={likes}
            shares ={shares}
         />
          ))}
        </div>
    </div>
  );
}

export default App;
