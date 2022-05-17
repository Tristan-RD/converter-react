import axios from "axios";

const API_URL = 'https://api.exchangerate.host';
const API_URL_SYMBOLS = `${API_URL}/symbols`;
const API_URL_CONVERT = `${API_URL}/convert`;
const CONVERT_FROM = 'EUR';

/**
 * Get the list of currencies
 * 
 * @returns {{ code:string, description: string}[]}
 */
export async function getCurrenciesList() {
    try {
        const response = await axios.get(API_URL_SYMBOLS);

        return response.data;
    } catch (error) {
        throw error;
    }
  }

/**
 * Convert a currency (from, to)
 *
 * @param {string} to
 * @param {string} from
 * @returns {Object}
 */
 export async function getConvertedCurrency(to, from = CONVERT_FROM) {
    const url = `${API_URL_CONVERT}?from=${from}&to=${to}`;
  
    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
      throw error;
    }
}