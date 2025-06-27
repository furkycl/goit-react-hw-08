import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { useFormik } from "formik";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    onSubmit: ({ name, number }) => {
      const duplicate = contacts.find((c) => c.name === name);
      if (duplicate) {
        alert(`${name} is already in contacts.`);
        return;
      }

      dispatch(addContact({ name, number }));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
