import Image from "next/image";
import React from "react";
// import ReactPlayer from "react-player/youtube";
import styles from "../../../styles/VideoKg.module.css";
import dynamic from "next/dynamic";

export default function VideoKg() {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  return (
    <div>
      {/* <div className={styles.video}>
        <span>Кыргызстан</span> */}
      <div>
        <span className={styles.text_video}>Кыргызстан</span>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=gr6I7SQB3aM"
          className={styles.video_player}
          width="100%"
          playing={true}
        />
      </div>
    </div>
    // </div>
  );
}
