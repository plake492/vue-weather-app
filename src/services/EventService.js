import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`
});

export default {
  getCurrentWeather(x) {
    return apiClient.get(
      `weather?q=${x}&appid=77bcd7a808e45268113d6c1714cf54bc&units=imperial`
    );
  }
};
