import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';

import weather from '../api/weather';
import { WEATHER_API_KEY } from '../api/apikey'
import { styles } from '../../styles/styles';
import WeatherCard from './WeatherCard';

export default function LocalizedWeather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [unitsSysytem, setunitsSysytem] = useState('metric')


  useEffect(() => {
    (async () => {
      // search data of my position via expo location
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      // Api call
      const response = await weather.get(`/weather?lat=${latitude}&lon=${longitude}&units=${unitsSysytem}&appid=${WEATHER_API_KEY}`);
      setCurrentWeather(response.data);
      
    })();
  }, []);

  const date = () => {
    const currentDate = new Date();
    return (`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`);
  }

  console.log(currentWeather);

  const displayWeatherData = () => {
    if(currentWeather) {
      const iconURL = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`
      return(
        <WeatherCard 
          city={currentWeather.name} 
          date={date()} 
          icon={iconURL} 
          temperature={parseInt(currentWeather.main.temp)} 
          condition={currentWeather.weather[0].description}
        />
      )
    } else {
      return <Text> { errorMsg } </Text>;
    }
  }
  
 
  return (
    <View style={styles.localizedWeatherContainer}>
      <Text> { displayWeatherData() } </Text>
    </View>
  )
}
