import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Separador = () => <View style={estilo.separador}/>;

export default function MrRobot(){

  return(
    
    <View style={estilo.container}>

      <ScrollView>

        <ImageBackground  style={estilo.img} source={{uri:'https://sm.ign.com/ign_br/screenshot/default/5jsw8skcix141_5p3x.jpg'}}>
        <Text style={estilo.titulo}>
        S01|E15
        </Text>
        </ImageBackground>

    <View style={estilo.container2}>
    <Text style={estilo.legenda}><MaterialCommunityIcons name="calendar-range"/> 24 de junho de 2015        <MaterialCommunityIcons name="eye-outline"/> Não assistido    <MaterialCommunityIcons name="check-circle-outline" size={20}/>
    </Text>
    <Text style={estilo.genero}>Gênero: Drama, Suspense psicológico, Suspense tecnológico</Text>

    <Separador/>

    <Text style={estilo.info}>Onde Assistir</Text>

    <TouchableOpacity style={estilo.botao}>
    <Text style={estilo.textobotao}><MaterialCommunityIcons name="adjust"/> Amazon Prime Video</Text>
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
        Elliot é um jovem programador que trabalha como engenheiro de segurança virtual durante o dia, e como hacker vigilante durante a noite. Elliot se vê em uma encruzilhada quando é recrutado para destruir a firma que ele é pago para proteger.
      </Text>

  <Separador/>

      <Text style={estilo.info}>Elenco </Text>
      <View style={estilo.imgElenco}>
      <Image style={estilo.imgPequena} source={{uri:'https://veja.abril.com.br/wp-content/uploads/2019/07/gettyimages-1147425485.jpg?quality=70&strip=info&resize=680,453'}} />
      <Image style={estilo.imgPequena} source={{uri:'https://static.wikia.nocookie.net/mrrobot/images/c/ca/CChaikin.jpg/revision/latest?cb=20150806144631'}} />
      <Image style={estilo.imgPequena} source={{uri:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcDpZhWd7-d2dA_qX8pqz9mYoJp0D0uDn8LeQRMrLFiI-HLRMs'}} />
      </View>

          <View style={estilo.atoresTodos}>
            <Text style={estilo.atores}>Rami Malek</Text>
            <Text style={estilo.atores}>Carly Chaikin</Text>
            <Text style={estilo.atores}>Christian Slater</Text>
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
    borderRadius: 10,
  },
  legenda: {
    color: '#ffffff',
  },
  imgElenco: {
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
  estrela: {
    marginBottom: 25,
  },
  genero: {
    marginTop: 10,
    color: 'white',
  },
    titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 270,
    marginTop: 170,
    textAlign: 'center',
    color: '#ffffff',
  }
});
