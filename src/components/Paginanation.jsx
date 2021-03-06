import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../../styles/ordercars.module.css";
import Modal from "./Modal";
import {
  Email,
  Facebook,
  Insta,
  LineHeight,
  Mobile,
  Search,
  Whats,
} from "./OrderCars/OrderCarsSvg";

export default function Paginanation(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  // const [searchItem, setSearchItem] = useState("");
  const itemsPerPage = 9;

  console.log(data, "ss");

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  const [tempData, setTempData] = useState([]);

  const [modal, setModal] = useState(false);

  const getDataInfo = (title, id, image) => {
    let tempData = [title, id, image];
    setTempData((item) => [1, ...tempData]);

    return setModal(true);
  };

  return (
    <>
      {/* <div className={styles.main_search}>
        <input
          type="text"
          className={styles.search}
          placeholder="Поиск"
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <Search className={styles.search_icon} />
      </div> */}
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
              description,
              image,
              title,
              last_name,
              email,
              phone_number,
              translations,
            }) => (
              <div
                onClick={() => getDataInfo({ title }, { id }, { image })}
                className={styles.persons}
                key={id}
              >
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className={styles.first_per}
                ></div>
                <div className={styles.person_info}>
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
                    style={{ marginTop: "20px", marginBottom: "20px" }}
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
                      <Facebook className={styles.social_media} />
                      <Insta className={styles.social_media} />
                      <Whats />
                    </div>
                  </div>
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
                </div>
              </div>
            )
          )}

      {/* {modal === true ? (
        <Modal
          title={tempData[1]}
          id={tempData[2]}
          image={tempData[3]}
          hide={() => setModal(false)}
        />
      ) : (
        ""
      )} */}

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

// {!!state?.length &&
//     state.map(
//       ({
//         id,
//         description,
//         image,
//         title,
//         last_name,
//         email,
//         phone_number,
//       }) => (
//         <div className={styles.persons}>
//           {" "}
//           <div
//             style={{ backgroundImage: `url(${image})` }}
//             className={styles.first_per}
//           ></div>
//           <div className={styles.person_info}>
//             <h2 style={{ color: "#2F2F2F", fontSize: "24px" }}>
//               {title} {last_name}
//             </h2>
//             <span className={styles.line}>{description}</span>

//             <LineHeight
//               style={{ marginTop: "20px", marginBottom: "20px" }}
//             />
//             <div className={styles.per_social}>
//               <div className={styles.per_mobile}>
//                 <Mobile />
//                 <span
//                   style={{
//                     marginLeft: "10px",
//                     color: "#A4A8B4",
//                     fontSize: "17px",
//                   }}
//                 >
//                   {phone_number}
//                 </span>
//               </div>
//               <div>
//                 <Facebook className={styles.social_media} />
//                 <Insta className={styles.social_media} />
//                 <Whats />
//               </div>
//             </div>
//             <div className={styles.email}>
//               <Email />
//               <span
//                 style={{
//                   marginLeft: "10px",
//                   color: "#A4A8B4",
//                   fontSize: "17px",
//                 }}
//               >
//                 {email}
//               </span>
//             </div>
//           </div>
//         </div>
//       )
//     )}
