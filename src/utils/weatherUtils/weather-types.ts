import clear from 'assets/clear.jpg';
import thunderstorm from 'assets/thunderstorm.jpg';
import drizzle from 'assets/drizzle.jpg';
import rain from 'assets/rain.jpg';
import snow from 'assets/snow.png';
import clouds from 'assets/clouds.jpg';

export const weatherType = {
  Clear: {color: "#15b2d3", image: clear, key: "clear"},
  Thunderstorm: {color: "#15b2d3", image: thunderstorm, key: "thunderstorm"},
  Drizzle: {color: "#d8dbdc", image: drizzle, key: "drizzle"},
  Rain: {color: "#9099a1", image: rain, key: "rain"},
  Snow: {color: "#fffafa", image: snow, key: "snow"},
  Clouds: {color: "#92BAD2", image: clouds, key: "clouds"},
  Undefined: {color: "#92BAD2", image: clouds, key: "clouds"},
}
