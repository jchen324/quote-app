import axios from "axios";

const BASE_URL = "https://zenquotes.io/api";
const API_KEY = process.env.REACT_APP_API_KEY;;

export async function getTodayQuote() {
  let config = {
    header: {
      "Content-type": "application/json",
      "X-Theysaidso-Api-Secret": "YOUR API HERE",
    }
  }
  const response = await axios.get(`https://quotes.rest/qod?category=inspire`, config);
  return {
    quote: response.data["contents"]["quotes"][0].quote,
    author: response.data["contents"]["quotes"][0].author,
  };
}

export async function getRandomQuote() {
  let config = {
    header: {
      "Content-type": "application/json",
      "X-Theysaidso-Api-Secret": "YOUR API HERE",
    }
  }
  const response = await axios.get(`https://quotes.rest/qod?category=inspire`, config);
  // const response = await axios.get(`${BASE_URL}/random/${API_KEY}`);
  return {
    quote: response.data["contents"]["quotes"][0].quote,
    author: response.data["contents"]["quotes"][0].author,
  };
}
