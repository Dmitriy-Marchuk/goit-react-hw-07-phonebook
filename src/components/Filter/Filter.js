import { useDispatch, useSelector } from 'react-redux';
import './_filter.scss';
import { change } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

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
        value={filter}
        onChange={e => dispatch(change(e.target.value))}
      />
    </>
  );
};

export default Filter;
