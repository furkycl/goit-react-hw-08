import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors.js";
import { logOut } from "../redux/auth/operations.js";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
