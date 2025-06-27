import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { register } from "../../redux/auth/operations";

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
    <form onSubmit={formik.handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
