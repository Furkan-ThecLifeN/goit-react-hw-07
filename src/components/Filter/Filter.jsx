import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import './Filter.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="wrapper">
      <label className="label">
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className="input"
        />
      </label>
    </div>
  );
}
