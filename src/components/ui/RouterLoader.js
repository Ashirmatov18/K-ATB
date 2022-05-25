import { Modal } from "@mui/material";
import { useState } from "react";
import Router from "next/router";
import styles from "../../../styles/ui/_routerLoader.module.scss";

const RouterLoader = ({ open }) => {
  const [routeLoading, setRouterLoading] = useState(false);

  Router.onRouteChangeStart = () => setRouterLoading(true);
  Router.onRouteChangeComplete = () => setRouterLoading(false);
  return (
    <Modal open={open || routeLoading}>
      <div className={styles.mainWrapper}>
        <div className={styles.ldsRing}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </Modal>
  );
};

export default RouterLoader;
