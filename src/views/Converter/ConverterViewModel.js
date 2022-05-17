import { useState, useEffect } from 'react';

import { getCurrenciesList, getConvertedCurrency } from '../../models/CurrenciesModel';

export default function useConverterViewModel() {
  // On enregistre via le state les informations recueillies et transformées
  // elles seront directement utilisées par la vue
    // cas d'erreur
  const [error, setError] = useState(null);
    // tableau des devises
  const [currenciesData, setCurrenciesData] = useState([]);
    // devise sélectionnée
  const [currencyData, setCurrencyData] = useState({
    code: 'ZAR',
    description: 'South African Rand',
    result: 16.779419,
  });
    // recherche d'une devise
  const [query, setQuery] = useState('');
    // montant à convertir
  const [amount, setAmount] = useState(1);

  // à l'initialisation, on va chercher le taux de conversion
  // ainsi qu'à chaque mise à jour de ma variable d'état `amount`
  useEffect(() => {
    async function initCurrencyResult() {
      await convertToCurrency(currencyData);
    }

    initCurrencyResult();
  }, [amount]);

  // Fonction récupérant la liste des devises
  // Transforme l'objet brut reçu par l'API en tableau utilisable par la vue
  async function getCurrencies() {
    try {
      const { symbols } = await getCurrenciesList();

      setCurrenciesData(Object.values(symbols));
    } catch (err) {
      setError(err);
    }
  }

  // Fonction qui récupère la valeur saisie par l'utilisateur
  // et qui filtre la liste des devises en fonction de cette recherche
  async function searchCurrencies(event) {
    // on modifie l'état actuel de `query` avec la saisie de l'utilisateur
    // → on contrôle notre champ
    const { value } = event.target;
    setQuery(value);

    try {
      // si l'utilsateur a renseigné une recherche
      if (value.trim().length > 0) {
        // on récupère toutes les devises
        const { symbols } = await getCurrenciesList();
        const symbolsArray = Object.values(symbols);

        // on filtre les devises en fonction de la recherche
        // → est-ce-que la description de la devis contient ma recherche ?
        const filteredSymbols = symbolsArray.filter(({ description }) => (
          description.toLowerCase().includes(value.trim().toLowerCase())
        ));

        // on met à jour la liste des devises
        // → la variable d'état `currenciesData` est modifiée ce qui provoque
        // un re-render du composant `<Currencies />`
        setCurrenciesData(filteredSymbols);
      }
    } catch (err) {
      setError(err);
    }
  }

  // Fonction récupérant la valeur de la conversion entre l'euro et la devise demandée
  // Transforme l'objet retourné par la réponse en l'associant avec l'objet de la devise
  // afin de faciliter le travail à la vue pour l'affichage
  async function convertToCurrency(currency) {
    try {
      const { result } = await getConvertedCurrency(amount, currency.code);

      setCurrencyData({
        ...currency,
        result,
      });
    } catch (error) {
      setError(error);
    }
  }

  // Fonction pour contrôler la variable d'état `amount`
  function changeAmount(event) {
    // si la saisie correspond à un nombre
    // (virgule acceptée sous Chrome, point sous Firefox)
    if (parseFloat(event.target.value)) {
      setAmount(parseFloat(event.target.value));
    }
  }

  return {
    error,
    currenciesData,
    currencyData,
    query,
    amount,
    getCurrencies,
    convertToCurrency,
    searchCurrencies,
    changeAmount,
  };
};
