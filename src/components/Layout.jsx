import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
