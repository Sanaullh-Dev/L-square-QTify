import React from "react";
import { Chip } from "@mui/material";
import styles from "./Album.module.css";

function Album({ albumData }) {
  const album = albumData || {
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
    title: "New Bollywood",
    follows: 100,
    slug: "new-bollywood",
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={album.image}
            alt={album.title}
            className={styles.albumImage}
          />
        </div>
        <div className={styles.albumInfo}>
          <Chip
            label={`${album.follows} Follows`}
            className={styles.chip}
            size="small"
          />
        </div>
      </div>
      <h3 className={styles.albumName}>{album.title}</h3>
    </div>
  );
}

export default Album;
