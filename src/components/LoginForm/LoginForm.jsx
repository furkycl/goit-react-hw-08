import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { logIn } from "../../redux/auth/operations";

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
    <form onSubmit={formik.handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
