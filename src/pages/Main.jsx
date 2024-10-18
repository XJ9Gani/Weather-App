import { useEffect, useState } from "react";
import { getWeatherData } from "../consts/const";
import citiesData from "../city.list.json/city.list.json";
import { Container, Form, ListGroup } from "react-bootstrap";

export default function Main() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filteredCities = citiesData.filter((city) =>
        city.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setSearchResults(filteredCities.slice(0, 10));
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  const handleCitySelect = async (cityId) => {
    try {
      const weatherData = await getWeatherData(cityId);
      setWeatherInfo(weatherData);
    } catch (error) {
      console.error("Ошибка при запросе погоды:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Form.Control
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Введите название города"
      />

      <ListGroup className="mt-3">
        {searchResults.map((city) => (
          <ListGroup.Item
            key={city.id}
            onClick={() => handleCitySelect(city.id)}
            style={{ cursor: "pointer" }}
          >
            {city.name}, {city.country}
          </ListGroup.Item>
        ))}
      </ListGroup>

      {weatherInfo && (
        <div className="mt-4">
          <h2>
            {weatherInfo.name}, {weatherInfo.sys.country}
          </h2>
          <p>Температура: {weatherInfo.main.temp}°C</p>
          <p>Погода: {weatherInfo.weather[0].description}</p>
          <p>Влажность: {weatherInfo.main.humidity}%</p>
          <p>Скорость ветра: {weatherInfo.wind.speed} м/с</p>
        </div>
      )}
    </Container>
  );
}
