import React, { useState, useEffect } from 'react';
import NavScrollExample from "./components/Navbar";
import Songs from "./components/Songs";
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Make a GET request to your Flask API
    axios.get('https://python-songs-api.onrender.com/')
      .then(response => {
        // Update the state with the fetched data
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Filter songs based on search term
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.album.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      
      <NavScrollExample setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Songs filteredSongs={filteredSongs } />
      
    </div>
  );
}

export default App;
