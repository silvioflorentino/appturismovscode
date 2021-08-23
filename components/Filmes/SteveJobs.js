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

export default function SteveJobs() {
  return (
    <View style={estilo.container}>
      <ScrollView>
        <ImageBackground
          resizeMode={'contain'}
          style={estilo.img}
          source={{
            uri:
              'https://veja.abril.com.br/wp-content/uploads/2016/05/ashton-kutcher-como-steve-jobs-original.jpeg',
          }}>
          <Text style={estilo.titulo}>SteveJobs</Text>
        </ImageBackground>

        <View style={estilo.container2}>
          <Text style={estilo.legenda}>
            <MaterialCommunityIcons name="calendar-range" /> 09 de outubro de
            2015 <MaterialCommunityIcons name="eye-outline" /> Não assistido{' '}
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
              Microsoft Movies & TV{' '}
            </Text>
          </TouchableOpacity>

          <Separador />
          <Text style={estilo.info}>Informações do Filme</Text>

          <Text style={estilo.estrelas}>
            <MaterialCommunityIcons name="star" size={30} color={'#FFD700'} />
            <MaterialCommunityIcons name="star" size={30} color={'#FFD700'} />
            <MaterialCommunityIcons name="star" size={30} color={'#FFD700'} />
            <MaterialCommunityIcons name="star" size={30} color={'#FFD700'} />
            <MaterialCommunityIcons name="star" size={30} color={'#FFFFFF'} />
          </Text>

          <Text style={estilo.texto}>
            Steve Jobs (estilizado como steve jobs) é um filme estado-unidense
            do género drama biográfico, baseado na vida de Steve Jobs, o
            cofundador da Apple, que protagonizou Michael Fassbender em seu
            papel. O filme foi realizado por Danny Boyle, produzido por Scott
            Rudin, e escrito por Aaron Sorkin, cujo argumento foi adaptado da
            biografia homónima escrita por Walter Isaacson. O filme foi lançado
            nos Estados Unidos em 9 de outubro de 2015, quatro anos após a morte
            de Steve Jobs. Em Portugal foi lançado a 12 de novembro de 2015, e
            no Brasil em 21 de janeiro de 2016. O trailer oficial foi lançado em
            1 de julho de 2015.
          </Text>

          <Separador />
          <Text style={estilo.info}>Elenco</Text>
          <View style={estilo.imgTodos}>
            <Image
              style={estilo.imgPequena}
              source={{
                uri:
                  'https://br.web.img3.acsta.net/c_162_216/medias/nmedia/18/92/22/33/20187349.jpg',
              }}
            />

            <Image
              style={estilo.imgPequena}
              source={{
                uri:
                  'https://br.web.img3.acsta.net/c_162_216/pictures/18/07/18/21/18/1204522.jpg',
              }}
            />
            <Image
              style={estilo.imgPequena}
              source={{
                uri:
                  'https://br.web.img3.acsta.net/c_162_216/pictures/18/07/27/23/05/4805454.jpg',
              }}
            />
          </View>
          <View style={estilo.atoresTodos}>
            <Text style={estilo.atores}>Michael F.</Text>
            <Text style={estilo.atores}>Kate Winslet</Text>
            <Text style={estilo.atores}>Seth Rogen</Text>
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
