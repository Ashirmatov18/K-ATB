import React, { useEffect, useState } from "react";
import styles from "../../../styles/newsDetails.module.css";
import MainLayout from "../ui/MainLayout";
import axios from "axios";

export default function NewsDetail() {
  const [state, setState] = useState([]);

  const getId = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/news/`);
    return data;
  };
  getId();

  useEffect(() => {
    getId().then(setState);
  }, []);

  return (
    <div>
      <div className={styles.main_pic}></div>
      <MainLayout>
        <div
          style={{ paddingTop: "150px", paddingBottom: "100px" }}
          className={styles.kyrgyzstan}
        >
          <div>
            <span>Explore our world with us</span>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
