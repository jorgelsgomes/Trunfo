import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <h1>
          Crie sua Baralho
        </h1>
        <label>
          Nome
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
          {' '}
        </label>
        <label>
          Descrição
          <textarea
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          {' '}
        </label>

        <label>
          Power
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          {' '}
        </label>
        <label>
          Ataque Rapido
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          {' '}
        </label>

        <label>
          Ataque Especial
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
          {' '}
        </label>
        <br />
        <label>
          Imagem
          <input
            placeholder="link"
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
          {' '}
        </label>
        <label>
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="Normal">Normal</option>
            <option value="Raro">Raro</option>
            <option value="Muito Raro">Muito raro</option>
          </select>
        </label>
        {' '}
        <label>
          Super Trybe Tryunfo
          {
            hasTrunfo
              ? (
                <p data-testid="trunfo-input">
                  Você já tem um Super Trunfo em seu baralho
                </p>
              )
              : (
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              )
          }
          {' '}
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
