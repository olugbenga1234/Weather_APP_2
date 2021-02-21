// your api key
const key = "c8f183c2cc9e99c73a7268f044d0e507";

// request and return functions
const requestCity = async (city) => {
  const baseURL = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&appid=${key}`;

  //make fetch data
  const response = await fetch(baseURL + query);

  //Returned data
  const data = await response.json();
  return data;
 
}
