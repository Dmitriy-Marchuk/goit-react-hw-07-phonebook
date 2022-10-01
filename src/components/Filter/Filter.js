import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import './_filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <label htmlFor="filterInput" className="filter__label">
        Find contacts by name
      </label>
      <input
        className="filter__input"
        id="filterInput"
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
