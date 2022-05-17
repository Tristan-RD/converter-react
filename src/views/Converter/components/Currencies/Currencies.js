import CurrenciesItem from './CurrenciesItem';
import CurrenciesSearch from './CurrenciesSearch';

function Currencies({ currencies, setCurrency, query, setQuery }) {
  return (
    <div className='currencies'>
      <CurrenciesSearch
        query={query}
        setQuery={setQuery}
      />

      <ul>
        {currencies.map((currency) => (
          <CurrenciesItem
            key={currency.code}
            currency={currency}
            setCurrency={setCurrency}
          />
        ))}
      </ul>
    </div>
  );
};

export default Currencies;
