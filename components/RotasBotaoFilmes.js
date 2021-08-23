import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Filme from './Filmes';
import SteveJobs from './Filmes/SteveJobs';
import ARedeSocial from './Filmes/ARedeSocial';
import Matrix from './Filmes/Matrix';
import PiratasDaInformatica from './Filmes/PiratasDaInformatica';
import PrivacidadeHackeada from './Filmes/PrivacidadeHackeada';

const Stack = createStackNavigator();

export default function RotasBotaoFilmes(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="Filmes" component={Filme} />
        <Stack.Screen name="SteveJobs" component={SteveJobs} options={{title:'Steve Jobs'}}/>
        <Stack.Screen name="ARedeSocial" component={ARedeSocial} options={{title:'A Rede Social'}}/>
        <Stack.Screen name="Matrix" component={Matrix} />
        <Stack.Screen name="PiratasDaInformatica" component={PiratasDaInformatica} options={{title:'Piratas da Informática'}}/>
        <Stack.Screen name="PrivacidadeHackeada" component={PrivacidadeHackeada} options={{title:'Privacidade Hackeada'}} />
    </Stack.Navigator>
  );
}