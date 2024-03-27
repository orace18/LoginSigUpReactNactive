import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


const BottomTabs= () => {
  return (
    <Tab.Navigator initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}>
     <Tab.Screen
        name=""
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomTabs;