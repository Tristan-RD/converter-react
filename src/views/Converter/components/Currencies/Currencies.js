import CurrenciesItem from './CurrenciesItem';

function Currencies({ currencies, setCurrency }) {

  // MVVM remplace les instructions ci-dessous
    // Model → axios
    // ViewModel → variables d'état : déclaration + update

  // const [currenciesData, setCurrenciesData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(API_URL_SYMBOLS)
  //     .then(({ data }) => {
  //       setCurrenciesData(Object.values(data.symbols));
  //     })
  //     .catch((error) => console.error(error));
  // }, []); // seulement au 1er rendu

  return (
    <div className='currencies'>
      <h2>Currencies</h2>

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
