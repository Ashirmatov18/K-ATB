import React, { useEffect, useState } from "react";
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

  return (
    <>
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
            <div className={styles.persons}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className={styles.first_per}
              ></div>
              <div className={styles.person_info}>
                <h2 style={{ color: "#2F2F2F", fontSize: "24px" }}>
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
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
