import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import styles from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.wrapper}>
      {isLoggedIn ? (
        <h2>Welcome back! You can now manage your contacts.</h2>
      ) : (
        <>
          <h1>Welcome to the Contact Book App</h1>
          <p>Please register or log in to access your contacts.</p>
        </>
      )}
    </div>
  );
};

export default Home;
