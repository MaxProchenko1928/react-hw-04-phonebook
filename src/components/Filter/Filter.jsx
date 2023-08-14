import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <>
      <label className={s.label}>
        Find contacts by name:
        <input
          className={s.input}
          type="text"
          name="filter"
          onChange={setFilter}
          value={filter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};
export default Filter;
