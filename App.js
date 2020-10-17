import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import mainMenu from './src/mainMenu';
import tourList from './src/tourList';
import tourPhotos from './src/tourPhotos';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name="MainPage" component={mainMenu} />
          <Stack.Screen name="TourList" component={tourList} />
          <Stack.Screen name="TourPhotos" component={tourPhotos} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
