import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player/youtube";
import styles from "../../../styles/VideoKg.module.css";

export default function VideoKg() {
  return (
    <div>
      <div className={styles.video}>
        <span>Кыргызстан</span>
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=gr6I7SQB3aM"
          width="100%"
          playing={true}
          className="video_player"
        /> */}
      </div>
    </div>
  );
}
