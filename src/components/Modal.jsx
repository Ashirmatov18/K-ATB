import React, { useState, useEffect } from "react";
import styles from "../../styles/cars.module.css";
import { Left, Right } from "./Main/MainIcons";
import { Exit } from "./Navbar/NavbarIcons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  // bottom: "100%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  paddingTop: "50px ",
  marginTop: "50px",
  overflow: "scroll",
  height: "80%",
  textAlign: "center",
};

export default function ModalWindow(props) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const startPos = { x: 25, y: 25 };

  return (
    // <div>
    //   <div className={styles.modal}>
    //     <div className={styles.main}>
    //       <div className={styles.controllers}>
    //         <div>
    //           <Left className={styles.next_prev} />
    //           <Right />
    //         </div>
    //         <div>
    //           {" "}
    //           <Exit onClick={props.hide} style={{ cursor: "pointer" }} />
    //         </div>
    //       </div>
    //       <div className={styles.info_bt}>
    //         <div
    //           style={{ fontSize: "55px" }}
    //           className={styles.title_bt}
    //           ref={props.domNode}
    //         >
    //           <h1>
    //             {props.title.title} {props.last_name.last_name}
    //           </h1>
    //         </div>
    //         <div className={styles.img_by}>
    //           <img src={props.image.image} alt="" />
    //         </div>
    //         <div className={styles.desc_trans}>
    //           <p>ИНФОРМАЦИЯ : </p>
    //           <div className={styles.info_few}>
    //             <pre>{props.translations.translations.ru.description}</pre>
    //           </div>
    //         </div>
    //         <div className={styles.contact_info}>
    //           <div>КОНТАКТЫ : </div>
    //           <div>{props.email.email}</div>
    //           <div>{props.phone_number.phone_number}</div>
    //         </div>
    //       </div>

    //       <div className={styles.flex_row}></div>
    //     </div>
    //   </div>
    // </div>
    <Modal
      open={open}
      disableScrollLock={false}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className={styles.box}>
        <Typography id="modal-modal-title" variant="h3" component="h2">
          {props.title.title} {props.last_name.last_name}
        </Typography>
        <div className={styles.img_by}>
          <img src={props.image.image} alt="" />
        </div>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className={styles.contact_info}>
            <div>КОНТАКТЫ : </div>
            <div>{props.email.email}</div>
            <div>{props.phone_number.phone_number}</div>
          </div>
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className={styles.desc_trans}>
            <p>ИНФОРМАЦИЯ : </p>
            <div className={styles.info_few}>
              <pre>{props.translations.translations.ru.description}</pre>
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
}

{
  /* <img src={wordData.value} className={styles.main_carousel} /> */
}

{
  /* {imgs.map((data, i) => (
                <div className={styles.thumbnail} key={i}>
                  <img
                    className={styles.mini_carousel}
                    src={data.value}
                    onClick={() => handleClick(i)}
                    height="70"
                    width="100"
                  />
                </div>
              ))} */
}
