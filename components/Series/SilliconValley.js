import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Separador = () => <View style={estilo.separador} />;

export default function SilliconValley() {
  return (
    <View style={estilo.container}>
      <ScrollView>
        <ImageBackground
          resizeMode={'contain'}
          style={estilo.img}
          source={{
            uri:
              'https://br.web.img3.acsta.net/r_1920_1080/pictures/18/03/29/15/28/2555433.jpg',
          }}>
          <Text style={estilo.titulo}>Sillicon Valley</Text>
          <Text style={estilo.legenda} >S05 | E20 </Text>
        </ImageBackground>

        <View style={estilo.container2}>
          <Text style={estilo.legenda}>
            <MaterialCommunityIcons name="calendar-range" /> 2014 - 2019         <MaterialCommunityIcons name="eye-outline" /> Não assistido{' '}
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={40}
              color={'#fff'}
            />
          </Text>
          <Separador />
          <Text style={estilo.info}>Onde Assistir</Text>
          <TouchableOpacity style={estilo.botao}>
            <Text style={estilo.textobotao}>
              {' '}
              <MaterialCommunityIcons
                name="arrow-right-drop-circle-outline"
                size={30}
              />{' '}
              Disney+{' '}
            </Text>
          </TouchableOpacity>

          <Separador />
          <Text style={estilo.info}>Informações da Série</Text>

          <Text style={estilo.estrelas}>
            <MaterialCommunityIcons name="star" size={30} color={'#FFD700'} />
            <MaterialCommunityIcons name="star" size={30} color={'#FFD700'} />
            <MaterialCommunityIcons name="star" size={30} color={'#FFD700'} />
            <MaterialCommunityIcons name="star" size={30} color={'#FFFFFF'} />
            <MaterialCommunityIcons name="star" size={30} color={'#FFFFFF'} />
          </Text>

          <Text style={estilo.texto}>
         Richard (Thomas Middleditch), Big Head (Josh Brener), Gilfoyle (Martin Starr) e Dinesh (Kumail Nanjiani) são programadores tão inteligentes quanto introvertidos. Eles trabalham na companhia Hooli, no Vale do Silício, e vivem sob a "custódia" de Erlich, um milionário que os deixa morarem em sua casa de graça - desde que ele ganhe 10% dos lucros dos projetos dos garotos.
Após a falha de um investimento do capitalista Peter Gregory (Christopher Evan Welch), Richard parece destinado a permanecer em seu trabalho medíocre na companhia, fundada pelo megalomaníaco Gavin Belson (Matt Ross). Quando Mônica (Amanda Crew), chefe de operações de Gregory, e Jared (Zach Woods), executivo, percebem o valor do algorítmo criado por Richard, uma disputa de ofertas surge entre Belson e Gregory, e Richard fica no meio.
          </Text>

          <Separador />
          <Text style={estilo.info}>Elenco</Text>
          <View style={estilo.imgTodos}>
            <Image
              style={estilo.imgPequena}
              source={{
                uri:
                  'https://br.web.img3.acsta.net/c_310_420/pictures/19/01/14/21/19/3769649.jpg',
              }}
            />

            <Image
              style={estilo.imgPequena}
              source={{
                uri:
                  'https://br.web.img2.acsta.net/c_310_420/pictures/18/03/23/14/22/3392188.jpg',
              }}
            />
            <Image
              style={estilo.imgPequena}
              source={{
                uri:
                  'https://br.web.img3.acsta.net/c_310_420/pictures/19/04/05/20/21/1354243.jpg',
              }}
            />
          </View>
          <View style={estilo.atoresTodos}>
            <Text style={estilo.atores}>Thomas S. M.</Text>
            <Text style={estilo.atores}>Todd J. M.</Text>
            <Text style={estilo.atores}>Joshua M. B.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
  },
  container2: {
    padding: 10,
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
  imgTodos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  atoresTodos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  botao: {
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    padding: 10,
    margin: 20,
    marginHorizontal: 20,
  },
  textobotao: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  },
  info: {
    color: '#ffffff',
    marginVertical: 20,
  },
  texto: {
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'justify',
  },
  atores: {
    color: '#ffffff',
  },
  separador: {
    marginVertical: 25,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  estrelas: {
    marginBottom: 25,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 150,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#000000',
  },
});
