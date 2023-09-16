import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      nameFilter,
      rareFilter,
      onFilterInputChange,
      trunfoFilter,
      checkedValidation,
    } = this.props;

    return (
      <>
        <label>
          Filtro
          <input
            disabled={ checkedValidation }
            name="nameFilter"
            data-testid="name-filter"
            type="text"
            value={ nameFilter }
            onChange={ onFilterInputChange }
          />
        </label>
        <label>
          Raridade
          <select
            disabled={ checkedValidation }
            name="rareFilter"
            data-testid="rare-filter"
            value={ rareFilter }
            onChange={ onFilterInputChange }
            defaultValue="todas"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onFilterInputChange }
          />
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onFilterInputChange: PropTypes.func.isRequired,
  checkedValidation: PropTypes.bool.isRequired,
};
export default Filter;
