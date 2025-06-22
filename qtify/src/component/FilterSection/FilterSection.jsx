import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import styles from "./FilterSection.module.css";
import Album from "../card/Album";

function FilterSection({ title, songsData, genresData, loading, error }) {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    if (songsData) {
      if (selectedGenre === "all") {
        setFilteredSongs(songsData);
      } else {
        const filtered = songsData.filter(
          (song) => song.genre?.key === selectedGenre
        );
        setFilteredSongs(filtered);
      }
    }
  }, [songsData, selectedGenre]);

  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const renderSongCard = (songData) => {
    return <Album albumData={songData} />;
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <Box className={styles.tabsContainer}>
        <Tabs
          value={selectedGenre}
          onChange={handleGenreChange}
          className={styles.tabs}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--color-primary)",
              height: "3px",
              borderRadius: "2px",
            },
          }}
        >
          <Tab label="All" value="all" className={styles.tab} />
          {genresData?.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
              className={styles.tab}
            />
          ))}
        </Tabs>
      </Box>
      {loading && <p className={styles.loadingText}>Loading songs...</p>}
      {error && <p className={styles.errorText}>{error}</p>}
      {!loading && !error && filteredSongs.length > 0 && (
        <Carousel data={filteredSongs} renderComponent={renderSongCard} />
      )}
      {!loading && !error && filteredSongs.length === 0 && (
        <p className={styles.noSongsText}>No songs found for this genre.</p>
      )}
    </div>
  );
}

export default FilterSection;
