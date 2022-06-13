import React, { useEffect, useState } from "react";
import styles from "../../../styles/Main.module.css";
import MainLayout from "../ui/MainLayout";
import { ReadMore } from "./MainIcons";
import SimpleSlider from "./SimpleSlider";
import MainVideo from "./MainVideo";
import { Link } from "@mui/material";
export default function Main() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div className={styles.mount}>
        <MainLayout>
          <div className={styles.information}>
            {/* style={{ transform: `translateY(${offsetY * 0.2}px)` }} */}
            <div>
              <h1>
                Explore our <br /> world with us
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Auctor proin tristique proin feugiat est ornare montes,
              </span>
            </div>
            <div
              className={styles.button_click}
              // style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            >
              <button>Click me</button>
            </div>
          </div>
          <div className={styles.sli}>
            <SimpleSlider />
          </div>
        </MainLayout>
      </div>
      <MainLayout>
        <div className={styles.about}>
          <div>
            <h1 className={styles.about_us}>О НАС</h1>
            <div>
              <h1 className={styles.explore}>
                Explore our world with <br />
                us
              </h1>
              <div className={styles.about_info}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Auctor proin <br /> tristique proin feugiat est ornare
                  montes, arcu, ut. Mauris nam tellus
                </span>
              </div>
              <Link href="/about" style={{ textDecoration: "none" }}>
                <div className={styles.read_more}>
                  <span>Read more</span>
                  <div
                    className={styles.pic_vid}
                    styles={{ paddingTop: "10px" }}
                  >
                    <ReadMore />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.about_second}>
            <div>
              <MainVideo />
            </div>
            <div className={styles.first_img}></div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
