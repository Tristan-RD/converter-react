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

  // à l'initialisation, on va chercher le taux de conversion
  useEffect(() => {
    async function initCurrencyResult() {
      await convertToCurrency(currencyData);
    }

    initCurrencyResult();
  }, []);

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

  // Fonction récupérant la valeur de la conversion entre l'euro et la devise demandée
  // Transforme l'objet retourné par la réponse en l'associant avec l'objet de la devise
  // afin de faciliter le travail à la vue pour l'affichage
  async function convertToCurrency(currency) {
    try {
      const { result } = await getConvertedCurrency(currency.code);

      setCurrencyData({
        ...currency,
        result,
      });
    } catch (error) {
      setError(error);
    }
  }

  return {
    error,
    currenciesData,
    currencyData,
    getCurrencies,
    convertToCurrency,
  };
};
