import * as React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  Dimensions, 
  ScrollView, 
  ImageBackground 
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Separador = () => <View style={estilo.separador}/>;

export default function PiratasDaInformatica(){

  return(

<View style={estilo.container}>
<ScrollView>

<ImageBackground style={estilo.img} source={{uri:'http://3.bp.blogspot.com/-65axBKyrl3c/T7zavSDZlkI/AAAAAAAAAek/WOByNJIgFQs/s1600/piratas-do-vale-do-silico.jpg'}}>
<Text style={estilo.titulo}>Piratas Do Vale do Silício</Text>
</ImageBackground>

<View style={estilo.container2}>
<Text style={estilo.legenda}>
<MaterialCommunityIcons name="calendar-month-outline" size={16}/>  20 de junho de 1999     <MaterialCommunityIcons name="eye-outline"/> Não assistido        <MaterialCommunityIcons name="checkbox-marked-circle" size={40} color={'#fff'}/>
</Text>

<Separador />

<Text style={estilo.info}>
Onde Assistir
</Text>

<TouchableOpacity style={estilo.botao}>
 <Text style={estilo.textobotao}>   <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={30}/>   Microsoft Movies & TV </Text>
</TouchableOpacity>

<Separador />
<Text style={estilo.info}>
Informações do Filme

</Text>

<Text style={estilo.estrelas}>
  <MaterialCommunityIcons name="star" size={30} color={'#FFD700'}/>
  <MaterialCommunityIcons name="star" size={30} color={'#FFD700'}/>
  <MaterialCommunityIcons name="star" size={30} color={'#FFD700'}/>
  <MaterialCommunityIcons name="star" size={30} color={'#FFD700'}/>
  <MaterialCommunityIcons name="star" size={30} color={'#FFFFFF'}/>
</Text>

<Text style={estilo.texto}>
Até o surgimento de Steve Jobs e Bill Gates, a informática era algo distante, que não fazia parte do universo das pessoas comuns. Os dois, ainda estudantes, lideraram uma revolução que integrou os computadores ao nosso dia a dia.
</Text>

<Separador />
<Text style={estilo.info}>
Elenco
</Text>
<View style={estilo.imgTodos} >
<Image style={estilo.imgPequena} source={{uri:'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ7B_5qcY5f160UFLkaKPIQVxfuRLZtfar1IpFzF9OFeflhvKMt50KEG5CE8BRX'}} />

<Image style={estilo.imgPequena} source={{uri:'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTAxGnSTzfljCn9peZcgUU_DhHNasIZoiUCs8m-TfyrJqAzqFtGllYYxHtp0d_R'}} />
<Image style={estilo.imgPequena} source={{uri:'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ_rYSiOhf4hNxpHusmKxL5NZ6K_I4TgvkCP3UIpcKjs_GS26fb3UydDrAhrBpM'}} />
</View>
<View style={estilo.atoresTodos} >
<Text style={estilo.atores}>Noah Wyle</Text>
<Text style={estilo.atores}>Anthony M Hall</Text>
<Text style={estilo.atores}>John DiMaggio</Text>
</View>

</View>
</ScrollView>
</View>

  );
}
const largura = Dimensions.get("screen").width;



const estilo = StyleSheet.create({
  container:{
flex:1,    
backgroundColor: '#363636',
  },
    container2:{
    padding: 10,
  },
  img:{
    width: largura,
    height: 200,
  },
  imgPequena:{
    width: 100,
    height: 100,
  },
    legenda:{
    color: '#ffffff',
  },
  imgTodos:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  atoresTodos:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  botao:{
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    padding: 10,
    margin: 20,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  textobotao:{
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  },
  info:{
    color: '#ffffff',
    marginVertical: 20,
    fontSize: 18
  },
  texto:{
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'justify',
  },
  atores:{
color: '#ffffff',

  },
  separador:{
    marginVertical: 25,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  estrelas:{
    marginVertical: 25,
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginTop: 150,
    paddingHorizontal:20
  }
});
