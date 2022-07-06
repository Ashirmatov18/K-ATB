import React, { useEffect, useState } from "react";
import styles from "../../styles/newsDetails.module.css";
import MainLayout from "../../src/components/ui/MainLayout";
import axios from "axios";
import Navbar from "../../src/components/Navbar/Navbar";
import Footer from "../../src/components/Footer/Footer";
const NewsDetails = ({ news }) => {
  console.log(news);
  return (
    <div>
      <Navbar />
      <div className={styles.main_pic}></div>
      <MainLayout>
        <div
          style={{ paddingTop: "150px", paddingBottom: "100px" }}
          className={styles.kyrgyzstan}
        >
          <div>
            <span>{news.translations.ru.title}</span>
            <div>
              <p>{news.translations.ru.description}</p>
            </div>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`https://admin.tabiyat.kg/api/v1/news/${id}`);
  const data = await res.json();

  return {
    props: { news: data }, // will be passed to the page component as props
  };
}

// getServerSideProps();

export default NewsDetails;
