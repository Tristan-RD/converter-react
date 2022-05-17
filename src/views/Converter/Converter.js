import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Currencies from './components/Currencies/Currencies';
import Result from './components/Result/Result';
import Toggler from '../../components/ui/Toggler/Toggler';

import useConverterViewModel from './ConverterViewModel';

// const Converter = () => {};

function Converter() {

  const [open, toggleOpen] = useState(true);

  const handleClick = () => {
    toggleOpen(!open);
  };

  const {
    error,
    currenciesData,
    currencyData,
    query,
    amount,
    getCurrencies,
    convertToCurrency,
    searchCurrencies,
    changeAmount,
  } = useConverterViewModel();

  // au chargement du composant, on récupère les devises
  useEffect(() => {
    getCurrencies();
  }, []);  // se déclenche UNE seule fois, à l'initialisation du composant

  // on gère les erreurs
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]); // se déclenche si la valeur de 'error' change

  return (
    <div className='converter'>
      <Header amount={amount} setAmount={changeAmount} />

      <main className='main'>
        <Toggler toggle={handleClick} isOpen={open} />

        {/* on utilise la « vue conditionnelle » en JSX */}
        {/* condition && on fait qq chose */}
        {open && (
          <Currencies
            currencies={currenciesData}
            setCurrency={convertToCurrency}
            query={query}
            setQuery={searchCurrencies}
          />
        )}

        <Result currency={currencyData} />
      </main>
    </div>
  );

}

export default Converter;
