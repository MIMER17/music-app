import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "ON AND ON(NCS)",
      artist: "Cartoon(feat. Daniel Levi)",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Ranjha",
      artist: "B Praak",
      img_src: "./images/Shershaah-2021.jpg",
      src: "./music/02 - Ranjha (128 Kbps).mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Maan Bhariya",
      artist: "B praak",
      img_src: "./images/Shershaah-2021.jpg",
      src: "./music/04 - Mann Bharryaa 2.0 (128 Kbps).mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;