import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Section from "./component/Section/Section";
import FilterSection from "./component/FilterSection/FilterSection";
import { fetchNewAlbums, fetchTopAlbums, fetchSongs, fetchGenres } from "./helpers/api";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [albumsData, newAlbumsData, songsData, genresData] = await Promise.all([
          fetchTopAlbums(),
          fetchNewAlbums(),
          fetchSongs(),
          fetchGenres()
        ]);
        
        setTopAlbums(albumsData);
        setNewAlbums(newAlbumsData);
        setSongs(songsData);
        setGenres(genresData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data");
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section 
        title="Top Albums"
        data={topAlbums}
        loading={loading}
        error={error}
      />
      <Section 
        title="New Albums"
        data={newAlbums}
        loading={loading}
        error={error}
      />
      {/* horizontal line with primary color */}
      <div className="horizontalLine" />
      <FilterSection 
        title="Songs"
        songsData={songs}
        genresData={genres}
        loading={loading}
        error={error}
      />
      <div className="horizontalLine" />
    </div>
  );
}

export default App;
