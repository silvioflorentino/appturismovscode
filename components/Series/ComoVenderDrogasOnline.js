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

export default function ComoVenderDrogasOnline() {
  return (
    
    <View style={estilo.container}>
    <ScrollView>

    <ImageBackground style={estilo.img} source={{uri:'https://uploads.metropoles.com/wp-content/uploads/2020/07/28163202/como-vender-drogas-online.jpg'}}>
<Text style={estilo.titulo}>Como Vender Drogas Online (Rápido)</Text>
</ImageBackground>

    <View style={estilo.container2}>
<Text style={estilo.legenda}>
<MaterialCommunityIcons name="calendar-month-outline" size={16}/>  31 de maio de 2019     <MaterialCommunityIcons name="eye-outline"/> Não assistido        <MaterialCommunityIcons name="checkbox-marked-circle" size={40} color={'#fff'}/>
</Text>

    <Separador/>

    <Text style={estilo.info}>Onde Assistir</Text>

    <TouchableOpacity style={estilo.botao}>
    <Text style={estilo.textobotao}><MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={20}/> Netflix </Text>
    </TouchableOpacity>

    <Separador/>

      <Text style={estilo.info}><MaterialCommunityIcons name="alert-circle-outline"/> Informações da série</Text>

<Text style={estilo.estrela}>
      <MaterialCommunityIcons name="star" size={30} color={'gold'}/>
      <MaterialCommunityIcons name="star" size={30} color={'gold'}/>
      <MaterialCommunityIcons name="star" size={30} color={'gold'}/>
      <MaterialCommunityIcons name="star" size={30} color={'gold'}/>
      <MaterialCommunityIcons name="star" size={30} color={'white'}/>
</Text>


      <Text style={estilo.texto}>
   é uma série de televisão de comédia dramática sobre amadurecimento alemã cocriada por Philipp Käßbohrer e Matthias Murmann. A primeira temporada, composta por seis episódios, foi lançada em 31 de maio de 2019, na Netflix.
      </Text>

  <Separador/>

      <Text style={estilo.info}>Elenco </Text>
      <View style={estilo.imgElenco}>
      <Image style={estilo.imgPequena} source={{uri:'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTvMpGmi1WRsVXR-vwq3R_FzQERV_Rti4psjqJXh2sHnzd5sC3RhBX2PMgLafx1'}} />
      <Image style={estilo.imgPequena} source={{uri:'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRxUhVU9fI--yGmJWvQ7i9buxuizMXSMAjghPNsl_jeBd79FNAaezdzgz_oS6_A'}} />
      <Image style={estilo.imgPequena} source={{uri:'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSbVv40wnvQBQPhamz9G2bcsNYYyAvKM_72LA9MU3kyUM3cdGgVzhaCUjpDuWZX'}} />
      </View>

      <View style={estilo.nomeElenco}>
      <Text style={estilo.elenco}>Maximilian Mundt</Text>
      <Text style={estilo.elenco}>Anna L Klenke</Text>
      <Text style={estilo.elenco}>Danilo Kamperidis</Text>
      </View>
      </View>
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
  },
  container2: {
    padding: 10,
  },
  imgElenco: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nomeElenco: {
    flexDirection: 'row',
    marginHorizontal: -5,
  },
  elenco:{
    color:'white',
    margin: 5,
  },
  img: {
    width: largura,
    height: 200,
  },
    imgPequena: {
    width: 100,
    height: 100,
  },
  legenda: {
    color: '#ffffff',
  },
  botao: {
    margin: 20,
    padding: 10,
    textAlign: 'center',
    marginHorizontal: 60,
    borderRadius: 20,
    backgroundColor: '#0A65CE',
  },
  textobotao:{
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18
  },
  estrela: {
    marginVertical: 10,
  },
  info: {
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 18
  },
  texto: {
    color: '#ffffff',
    fontSize: 15,
    textAlign: "justify",
  },
  separador: {
    marginVertical: 25,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
   titulo:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginTop: 150,
    paddingHorizontal:20
  }
});