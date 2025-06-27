import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
