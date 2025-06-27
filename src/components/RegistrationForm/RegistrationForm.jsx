import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
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
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </label>
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
