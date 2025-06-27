import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <label className={styles.label}>
      Filter contacts by name
      <input
        type="text"
        className={styles.input}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
