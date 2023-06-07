
import Routes from './src/routes'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );

}

export default App;