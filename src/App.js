import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      arrayCards: [],
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
    };
  }

  btnValidation = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    if (!cardName || !cardImage || !cardDescription || !cardRare) {
      return true;
    }
    const somMaxima = 210;
    if (+cardAttr1 + +cardAttr2 + +cardAttr3 > somMaxima) {
      return true;
    }
    const valorMaximo = 90;
    if (cardAttr1 > valorMaximo || cardAttr2 > valorMaximo || cardAttr3 > valorMaximo) {
      return true;
    }
    const valorMinimo = 0;
    return cardAttr1 < valorMinimo
    || cardAttr2 < valorMinimo || cardAttr3 < valorMinimo;
  };

  CardTrunfoValidation = () => {
    const {
      arrayCards,
    } = this.state;

    return arrayCards.some((card) => card.cardTrunfo);
  };

  trunfoFilterValidation = () => {
    const { trunfoFilter } = this.state;
    return trunfoFilter;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  addCardInDeck = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      arrayCards,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const CardObject = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState({

      arrayCards: [...arrayCards, CardObject],
      // reset do formulario
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
    });
  };

  cardDelet = (cardName) => {
    const {
      arrayCards,
    } = this.state;

    const cards = arrayCards.filter((card) => card.cardName !== cardName);
    this.setState({
      arrayCards: cards,
    });
  };

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
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ this.btnValidation() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.addCardInDeck }
          arrayCards={ arrayCards }
          hasTrunfo={ this.CardTrunfoValidation() }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h1>TODAS AS CARTAS</h1>
        <Filter
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
          onFilterInputChange={ this.onInputChange }
          checkedValidation={ this.trunfoFilterValidation() }
        />
        <div className="listaCard">
          {
            arrayCards
              .filter((card) => {
                if (trunfoFilter) {
                  return card.cardTrunfo === true;
                }
                return true;
              })
              .filter((card) => card.cardName.trim()
                .toLowerCase().includes(nameFilter.trim().toLowerCase()))
              .filter((card) => {
                if (rareFilter === 'todas') {
                  return true;
                }
                return card.cardRare === rareFilter;
              })
              .map((card) => (
                <>
                  <Card
                    key={ card.cardName }
                    cardName={ card.cardName }
                    cardDescription={ card.cardDescription }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardImage={ card.cardImage }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <button
                    data-testid="delete-button"
                    onClick={ () => { this.cardDelet(card.cardName); } }
                  >
                    Excluir

                  </button>

                </>
              ))
          }
        </div>
      </div>
    );
  }
}

export default App;
