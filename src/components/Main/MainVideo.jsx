import React from "react";
import styles from "../../../styles/mainVideo.module.css";
import dynamic from "next/dynamic";

export default function MainVideo() {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  return (
    <div>
      <div className={styles.video}>
        <ReactPlayer
          playing={false}
          url="https://www.youtube.com/watch?v=Jw-FcDdxSU8"
          className={styles.video_player}
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}
