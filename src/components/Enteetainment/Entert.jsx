import React, { useEffect, useState } from "react";
import styles from "../../../styles/enter.module.css";
import {
  Email,
  Facebook,
  Insta,
  LineHeight,
  Mobile,
  Search,
  Whats,
} from "../OrderCars/OrderCarsSvg";
import MainLayout from "../ui/MainLayout";
import Footer from "../Footer/Footer";
import Aos from "aos";
import { useRouter } from "next/router";
import "aos/dist/aos.css";
import axios from "axios";
import EnterModal from "../EnterModal";

export default function Entert() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    getInfo().then(setState);
    getDescription().then((data) => setDescription([data]));
  }, []);

  const [modal, setModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const getInfo = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/entertainments/`
    );
    console.log(data);
    return data.entertainments;
  };

  const getDescription = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/entertainments/`
    );
    return data.description[0].translations.ru;
  };

  getInfo();
  const [state, setState] = useState([]);
  const [description, setDescription] = useState([]);

  return (
    <div>
      <div className={styles.main_guides}>
        <div data-aos="fade-down" className={styles.about_title}>
          <span>РАЗВЛЕЧЕНИЯ</span>
        </div>
      </div>

      <MainLayout>
        <div className={styles.kyrgyzstan}>
          <div>
            {!!description?.length &&
              description.map(({ description, title }) => (
                <>
                  <div className={styles.search_explore}>
                    <span>{title}</span>
                  </div>

                  <div data-aos="fade-down">
                    <p style={{ paddingTop: "20px" }}>{description}</p>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div
          onClick={() => setModal(true)}
          className={styles.person_cards}
          // data-aos="fade-up"
        >
          <EnterModal data={state} searchItem={searchItem} />
        </div>
      </MainLayout>
      <Footer style={{ margin: "300px" }} />
    </div>
  );
}
