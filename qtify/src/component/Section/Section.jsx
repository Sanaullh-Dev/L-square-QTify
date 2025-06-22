import React, { useState } from "react";
import { Button } from "@mui/material";
import Album from "../card/Album";
import styles from "./Section.module.css";

function Section({ title, data, loading, error }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Button
          variant="outlined"
          onClick={handleCollapseToggle}
          className={styles.collapseButton}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>

      {loading && <p className={styles.loadingText}>Loading...</p>}
      {error && <p className={styles.errorText}>{error}</p>}
      
      {!isCollapsed && !loading && !error && (
        <div className={styles.grid}>
          {data.map((album) => (
            <Album key={album.id} albumData={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
