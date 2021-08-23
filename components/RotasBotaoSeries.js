import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ComoVenderDrogasOnline from './Series/ComoVenderDrogasOnline';
import Devs from './Series/Devs';
import MrRobot from './Series/MrRobot';
import Scorpion from './Series/Scorpion';
import SilliconValley from './Series/SilliconValley';
import Serie from './Series'

const Stack = createStackNavigator();

export default function RotasBotaoSeries(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Serie" component={Serie}  options={{headerShown: false}}  />
      <Stack.Screen name="ComoVenderDrogasOnline" component={ComoVenderDrogasOnline} options={{title:'Como Vender Drogas Online'}} />
      <Stack.Screen name="Devs" component={Devs} options={{title:'Devs'}} />
      <Stack.Screen name="MrRobot" component={MrRobot} options={{title:'Mr Robot'}} />
      <Stack.Screen name="Scorpion" component={Scorpion} options={{title:'Scorpion'}} />
      <Stack.Screen name="SilliconValley" component={SilliconValley} options={{title:'Sillicon Valley'}} />
    </Stack.Navigator>
  );
}