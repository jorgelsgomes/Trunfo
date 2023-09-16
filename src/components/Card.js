import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      arrayCards,
    } = this.props;
    return (
      <div className="card">
        <div className="topoCard">
          <h3 data-testid="name-card">{ cardName }</h3>
          <h5 data-testid="rare-card">{cardRare}</h5>
          <img
            width="100px"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        {cardTrunfo && <h4 data-testid="trunfo-card">Super Trunfo</h4>}
        <h6 data-testid="description-card">{cardDescription}</h6>
        <div className="atributos">
          <h5 data-testid="attr1-card">
            Power
            {' '}
            {cardAttr1}
            {' '}
          </h5>
          <h5 data-testid="attr2-card">
            {' '}
            Ataque Rapido
            {' '}
            {cardAttr2}
            {' '}
          </h5>
          <h5 data-testid="attr3-card">
            {' '}
            Ataque Especial
            {' '}
            {cardAttr3}
          </h5>
        </div>
        <p>
          {arrayCards}
        </p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  arrayCards: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
