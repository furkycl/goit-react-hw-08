import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { logIn } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(logIn(values));
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
