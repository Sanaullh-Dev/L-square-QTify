import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Section from "./component/Section/Section";
import { fetchTopAlbums } from "./helpers/api";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopAlbums = async () => {
      try {
        setLoading(true);
        const albumsData = await fetchTopAlbums();
        setTopAlbums(albumsData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch albums");
        console.error("Error loading albums:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTopAlbums();
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
    </div>
  );
}

export default App;
