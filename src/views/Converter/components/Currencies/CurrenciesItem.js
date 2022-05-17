import React from 'react';

function CurrenciesItem({ currency, setCurrency }) {
  return (
    <li
      className='currency'
      onClick={() => {
        setCurrency({
          ...currency,
        });
      }}
    >
      {currency.description}
    </li>
  );
}

export default CurrenciesItem;
