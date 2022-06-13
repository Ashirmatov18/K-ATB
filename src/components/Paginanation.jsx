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
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getDataInfo = (title, id) => {
    let tempData = [title, id];
    setTempData((item) => [1, ...tempData]);

    return setModal(true);
  };

  // const filterResult = (f) => {
  //   const result = data.filter((curDate) => {
  //     console.log(curDate.id);
  //     return curDate.id == f;
  //   });
  //   setCurrentItems(result);
  // };

  return (
    <>
      {/* <button onClick={() => filterResult("1")}>1</button>
      <button onClick={() => filterResult("2")}>2</button>
      <button>3</button> */}
      {!!data?.length &&
        currentItems.map(
          ({
            id,
            description,
            image,
            title,
            last_name,
            email,
            phone_number,
          }) => (
            <div className={styles.persons} key={id}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className={styles.first_per}
              ></div>
              <div className={styles.person_info}>
                <h2
                  style={{ color: "#2F2F2F", fontSize: "24px" }}
                  onClick={() => getDataInfo({ title }, { id })}
                >
                  {title} {last_name}
                </h2>
                <span className={styles.line}>{description}</span>

                <LineHeight
                  style={{ marginTop: "20px", marginBottom: "20px" }}
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
      {modal === true ? <Modal title={tempData[1]} id={tempData[2]} /> : ""}

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
