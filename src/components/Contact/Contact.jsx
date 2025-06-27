import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
