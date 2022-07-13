import React, { useEffect, useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import styles from "../../styles/ordercars.module.css";
import {
  Email,
  Facebook,
  Insta,
  LineHeight,
  Mobile,
  Search,
  Whats,
} from "./OrderCars/OrderCarsSvg";
import { useClickOutside } from "./hooks/useClickOutside";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ModalWindow from "./Modal";

export default function GuidesPag(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  // console.log(data, "ss");

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  const [tempData, setTempData] = useState([]);

  const [modal, setModal] = useState(false);

  const getDataInfo = (
    title,
    id,
    image,
    translations,
    email,
    phone_number,
    last_name
  ) => {
    let tempData = [
      title,
      id,
      image,
      translations,
      email,
      phone_number,
      last_name,
    ];
    setTempData((item) => [1, ...tempData]);

    return setModal(true);
  };

  let domNode = useClickOutside(() => {
    setModal(null);
  });

  return (
    <>
      {!!data?.length &&
        currentItems
          .filter((val) => {
            if (props.searchItem === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(props.searchItem.toLowerCase())
            ) {
              return val;
            }
          })
          .map(
            ({
              id,
              image,
              title,
              last_name,
              email,
              phone_number,
              translations,
              whatsapp,
              facebook,
              instagram,
            }) => (
              <div className={styles.persons} key={id} data-aos="fade-down">
                <div
                  onClick={() =>
                    getDataInfo(
                      { title },
                      { id },
                      { image },
                      { translations },
                      { email },
                      { phone_number },
                      { last_name }
                    )
                  }
                  className={styles.first_per}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div
                  className={styles.person_info}
                  onClick={() =>
                    getDataInfo(
                      { title },
                      { id },
                      { image },
                      { translations },
                      { email },
                      { phone_number },
                      { last_name }
                    )
                  }
                >
                  <h2 style={{ color: "#2F2F2F", fontSize: "24px" }}>
                    {title} {last_name}
                  </h2>
                  <div className={styles.desc_info}>
                    <span className={styles.line}>
                      {" "}
                      {translations.ru.description}
                    </span>
                  </div>

                  <LineHeight
                    style={{ marginTop: "10px", marginBottom: "15px" }}
                    className={styles.line_pers}
                  />
                  <div className={styles.per_social}>
                    <div className={styles.per_mobile}>
                      <Mobile />
                      <span
                        style={{
                          marginLeft: "10px",
                          color: "#A4A8B4",
                          fontSize: "17px",
                        }}
                      >
                        {phone_number}
                      </span>
                    </div>
                    <div>
                      {/* <Link href={`${facebook}`}>
                        <Facebook className={styles.social_media} />
                      </Link>
                      <Link href={`${instagram}`}>
                        <Insta className={styles.social_media} />
                      </Link>

                      <Link href={`${whatsapp}`}>
                        <Whats className={styles.whatsapp} />
                      </Link> */}
                    </div>
                  </div>
                  {email ? (
                    <div className={styles.email}>
                      <Email />
                      <span
                        style={{
                          marginLeft: "10px",
                          color: "#A4A8B4",
                          fontSize: "17px",
                        }}
                      >
                        {email}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )
          )}

      {modal === true ? (
        <ModalWindow
          title={tempData[1]}
          id={tempData[2]}
          image={tempData[3]}
          translations={tempData[4]}
          email={tempData[5]}
          phone_number={tempData[6]}
          last_name={tempData[7]}
          hide={() => setModal(false)}
          domNode={domNode}
        />
      ) : (
        ""
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        className="paginate"
        containerClassName="main_paginate"
        activeClassName="active"
        nextClassName="next"
        previousClassName="prev"
        disabledClassName="prev_next_disabled"
        activeLinkClassName="prev_next_active"
      />
    </>
  );
}
