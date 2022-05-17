function Result({ currency }) {

  // MVVM remplace les instructions ci-dessous
    // Model → axios
    // ViewModel → variables d'état : déclaration + update
  // const [currencyData, setCurrencyData] = useState({ ...currency });

  // useEffect(() => {
  //   console.log('useEffect');
  //   async function fetchData() {
  //     const url = `${API_URL_CONVERT}?from=${CONVERT_FROM}&to=${code}`;

  //     try {
  //       // const apiResponse = await fetch(url);
  //       // const { result } = await apiResponse.json();
  //       const apiResponse = await axios.get(url);
  //       const { result } = await apiResponse.data;

  //       setCurrencyData({
  //         ...currency,
  //         rate: result,
  //       });

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchData();
  // }, [currency]); // on appelle notre API seulement si `currency` est modifiée

  return(
    <div className='result'>
      {/* currencyData.rate? : si tu ne connais pas currencyData.rate alors tu écris '–' */}
      {/* si tu connais tu continues l'instruction et tu affiches `currencyData.rate.toFixed(2)` */}
      <strong>{currency.result?.toFixed(2) ?? '–'}</strong>

      <span>{currency.description}</span>
    </div>
 );

};

export default Result;
