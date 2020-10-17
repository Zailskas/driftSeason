import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class mainMenu extends Component {
  render() {
    return (
      <View>
        <Text>Home page</Text>
        <Button
          title="Start"
          onPress={() =>
            this.props.navigation.navigate('TourList', {text: 'TourList'})
          }
        />
      </View>
    );
  }
}
export default mainMenu;
