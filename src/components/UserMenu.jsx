import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors.js";
import { logOut } from "../redux/auth/operations.js";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <p className={styles.greeting}>Welcome, {user.name}</p>
      <button className={styles.logoutBtn} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
