import React from 'react';
import Home from './src/Home';
import Analytics from './src/Analytics';
import ToDo from './src/ToDo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function NavigationComponent() {
    return (
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen
          name="Home" component={Home}
          options={{ tabBarLabel: 'Home',
            tabBarIcon: ({color ='#001f3f'}) => (
              <FontAwesome5 name={'home'} color={color}  size={25}  light />
            ),
          }}
        />
        <Tab.Screen name="Analytics" component={Analytics}
        options={{tabBarLabel: 'Analytics',
          tabBarIcon: ({ color ='#001f3f' }) => (
            <FontAwesome5 name={'chart-pie'} color={color}  size={25}  light />
          ),
        }}
        />
         <Tab.Screen name="To-Do" component={ToDo}
        options={{tabBarLabel: 'To-Do',
          tabBarIcon: ({ color ='#001f3f' }) => (
            <FontAwesome5 name={'list'} color={color}  size={25}  light />
          ),
        }}
        />
      </Tab.Navigator>
      </NavigationContainer>
      );
}