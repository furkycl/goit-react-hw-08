import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { useFormik } from "formik";

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
        Number
        <input
          type="tel"
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
