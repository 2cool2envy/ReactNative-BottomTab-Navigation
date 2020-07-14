import React, { Component } from 'react';
import { View,Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



class ToDo extends Component {
  render() {
    return (
        <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome5 name={'running'} color={'#0074D9'} size={100} light />
        <Text> I am To-Do page</Text>
      </View>
    );
  }
}

export default ToDo;