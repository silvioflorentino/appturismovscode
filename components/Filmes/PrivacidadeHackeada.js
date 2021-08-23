import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Separador = () => <View style={estilo.separador}/>;

export default function PrivacidadeHackeada() {
  return (
    
    <View style={estilo.container}>
    <ScrollView>

    <Image style={estilo.img} source={{uri:'http://nucleopiratininga.org.br/wp-content/uploads/2019/08/privacidade-hackeada.png'}} />

    <View style={estilo.container2}>
    <Text style={estilo.legenda}><MaterialCommunityIcons name="calendar-range"/> 26 de janeiro de 2019        <MaterialCommunityIcons name="eye-outline"/> Não assistido    <MaterialCommunityIcons name="check-circle-outline" size={20}/>
    </Text>

    <Separador/>

    <Text style={estilo.info}>Onde Assistir</Text>

    <TouchableOpacity style={estilo.botao}>
    <Text style={estilo.textobotao}><MaterialCommunityIcons name="adjust"/> Microsoft Movies & TV</Text>
    </TouchableOpacity>

    <Separador/>

      <Text style={estilo.info}><MaterialCommunityIcons name="alert-circle-outline"/> Informações do filme</Text>

<Text style={estilo.estrela}>
      <MaterialCommunityIcons name="star" size={30} color={'gold'}/>
      <MaterialCommunityIcons name="star" size={30} color={'gold'}/>
      <MaterialCommunityIcons name="star" size={30} color={'gold'}/>
      <MaterialCommunityIcons name="star" size={30} color={'gold'}/>
      <MaterialCommunityIcons name="star" size={30} color={'white'}/>
</Text>


      <Text style={estilo.texto}>
        O escândalo da empresa de consultoria Cambridge Analytica e do Facebook
        é recontado através da história de um professor americano. Ao descobrir
        que, junto com 240 milhões de pessoas, suas informações pessoais foram
        hackeadas para criar perfis políticos e influenciar as eleições
        americanas de 2016, ele embarca em uma jornada para levar o caso à
        corte, já que a lei americana não protege suas informações digitais mas
        a lei britânica sim.
      </Text>

  <Separador/>

      <Text style={estilo.info}>Elenco </Text>
      <View style={estilo.imgElenco}>
      <Image style={estilo.imgPequena} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg/1200px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'}} />
      <Image style={estilo.imgPequena} source={{uri:'https://www.criptofacil.com/wp-content/uploads/2020/01/brittany-kaiser-destaca-blockchain-como-ferramenta-privacidade-dados.jpg'}} />
      <Image style={estilo.imgPequena} source={{uri:'https://2018.cybersecforum.eu/media/PRELEGENCI_carroll.png'}} />
      </View>

      <View style={estilo.nomeElenco}>
      <Text style={estilo.corElenco}>Mark Zuckerberg</Text>
      <Text style={estilo.corElenco}>Britanny Kaiser</Text>
      <Text style={estilo.corElenco}>David Caroll</Text>
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
    marginHorizontal: -10,
    flexDirection: 'row',
  },
  corElenco:{
    color:'white',
    margin: 10,
  },
  img: {
    width: largura,
    height: 200,
  },
    imgPequena: {
      width: 100,
      height: 100,
      borderRadius: 10,
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
  },
  estrela: {
    marginVertical: 10,
  },
  info: {
    color: '#ffffff',
    marginBottom: 10,
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
  }
});
