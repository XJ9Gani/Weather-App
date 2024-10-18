import axiosAPI from "../API/axios-api";

const apiKey = "8b1c8a76c32f11a1083b0fc7a36c5882";

export const getWeatherData = async (cityId) => {
  try {
    const response = await axiosAPI.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных о погоде:", error);
    throw error;
  }
};
