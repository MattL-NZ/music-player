import React, { useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import data from "./util";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); // Default song
  const [isPlaying, setIsPlaying] = useState(false); // Default song
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
