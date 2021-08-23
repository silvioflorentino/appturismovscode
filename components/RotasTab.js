import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import RotasBotaoFilmes from './RotasBotaoFilmes';
import RotasBotaoSeries from './RotasBotaoSeries';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator 
    initialRouteName="Home" 
    tabBarOptions={{ activeTintColor:"#836FFF",
    tabBarStyle:[{display:"flex"}, null]
  
  }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="RotasBotaoFilmes"
        component={RotasBotaoFilmes}
    
         options={{
           headerShown: false, 
          tabBarLabel: "Filmes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="RotasBotaoSeries"
        component={RotasBotaoSeries}
        options={{
          title: '',
          headerShown: false, 
          tabBarLabel: "Series",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="filmstrip" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
