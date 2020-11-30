import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles/styles';
import meteo from './src/api/meteo';
import LocalizedWeather from './src/components/LocalizedWeather';
import SearchField from './src/components/SearchField';
import FindWeather from './src/components/FindWeather';

export default function App() {
  // states
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
 
  // functions
  try {
    const fetchWeatherApi = async () => {
      const response = await meteo.get('/paris');
      const weatherData = {
        city: response.data.city_info.name,
        date: response.data.current_condition.date,
        icon: response.data.current_condition.icon_big,
        temperature: response.data.current_condition.tmp,
        condition: response.data.current_condition.condition
      }
      setResult(weatherData);
      console.log(weatherData);
    };
    useEffect(() => {
      fetchWeatherApi();
    }, []);
  } catch(err) {
      console.log(err);
      setErrorMessage('connection problem');
  }
  
  if (!result) {
    return null;
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <LocalizedWeather />
      <SearchField 
        searchText={searchText} 
        setSearchText={setSearchText}
      />
      <FindWeather result={result} />
    </SafeAreaView>
  );
}

