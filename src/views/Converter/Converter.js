import Header from './components/Header/Header.js';
import Result from './components/Result/Result.js';
import Currencies from './components/Currencies/Currencies.js';
import { useEffect, useState } from 'react';
import Toggler from '../../components/Toggler/Toggler.js';

import useConverterViewModel from './ConverterViewModel.js';


function Converter() {

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  }

  const {    
    error,
    currenciesData,
    currencyData,
    getCurrencies,
    convertToCurrency,
  } = useConverterViewModel();

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
        <Header />

        <main className='main'>
          <Toggler isOpen={open} toggle={handleClick}/>

          {/* on utilise " vue conditionelle " en JSX */}
          {/* condition && on fait qq chose */}
          {open && (
          <Currencies
            currencies={currenciesData}
            setCurrency={convertToCurrency}
          />)}

          <Result currency={currencyData}/>
        </main>
      </div>
  );
}

export default Converter;
