class TheProvider {
  constructor(lat, long) {
    this.long = long;
    this.lat = lat;
  }

  /**
   * Gets the weather for a given city
   */
  static getWeather(lat, long) {
    this.findCity(lat, long).then(async (city) => {
      try {
        const res = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f64a9c52f126b4fc3d45c2b05742a8e3`
        );
        const json = await res.json();
        const { weather } = json;
        console.log(`The weather of ${city} is ${weather[0]?.description}`);
      } catch (err) {
        console.error('err', err);
      }
    });
  }
  /**
   * Gets the weather for a given city
   */
  static async getLocalCurrency(city) {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f64a9c52f126b4fc3d45c2b05742a8e3`
      );
      const json = await res.json();
      const {
        sys: { country },
        weather,
      } = json;
      const resSecondCall = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${country}`
      );
      const jsonSecondCall = await resSecondCall.json();
      const { currencies } = jsonSecondCall;
      console.log(
        `The local currency of ${city} is ${currencies[0]?.code} and the weather is ${weather[0]?.description}`
      );
    } catch (err) {
      console.error('err', err);
    }
  }
  /**
   * Given Longtitude and latitude, this function returns a city
   */
  static async findCity(lat, long) {
    try {
      const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=f5d7e19b5da2409595c1b224955ce291`
      );
      const json = await res.json();
      const { results } = json;
      console.log(results[0]?.components.city);
      return results[0]?.components.city;
    } catch (err) {
      console.error('err', err);
    }
  }
}

export default TheProvider