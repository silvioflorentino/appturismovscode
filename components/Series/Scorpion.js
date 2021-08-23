import * as React from 'react';
import {View, Text,StyleSheet, TouchableOpacity, Image, Dimensions,ScrollView, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Separador = () => <View style={estilo.separador}/>;

export default function Matrix(){

  return(

<View style={estilo.container}>
<ScrollView>
 <ImageBackground resizeMode={'contain'} style={estilo.img} source={{uri:'https://image.tmdb.org/t/p/original/mUBOpIZClH4pO32SIpCwKAyKU9y.jpg',}}>
          <Text style={estilo.titulo}>S05 | E20</Text>
        </ImageBackground>
<View style={estilo.container2}>
<Text style={estilo.legenda}>
<MaterialCommunityIcons name="calendar-range"/> 21 de maio de 2021 <MaterialCommunityIcons name="eye-outline"/> Não assistido  <MaterialCommunityIcons name="checkbox-marked-circle" size={40} color={'#fff'}/>
</Text>
<Separador />
<Text style={estilo.info}>
Onde Assistir
</Text>
<TouchableOpacity style={estilo.botao}>
 <Text style={estilo.textobotao}>   <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={30}/>  DISNEY+   </Text>
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
        Scorpion acompanha Walter O'Brien (Elyes Gabel), um especialista em ciência da computação recrutado pelo agente Cabe Gallo (Robert Patrick) junto com outros prodígios da informática para participar de um projeto secreto do governo federal americano. O projeto Scorpion foi criado com a intenção de resolver complexos problemas de segurança nacional. Durante sua primeira missão, eles conhecem Paige (Katherine McPhee), uma garçonete cujo filho é uma criança superdotada.
      </Text>

<Separador />
<Text style={estilo.info}>
Elenco
</Text>
<View style={estilo.img1} >
<View style={estilo.img2} >
<Image style={estilo.imgPequena} source={{uri:'https://br.web.img2.acsta.net/c_310_420/pictures/210/147/21014758_20130624114221022.jpg'}} />
<Text style={estilo.atores}>ELYES GABEL</Text>
</View>
<View style={estilo.img2} >
<Image style={estilo.imgPequena} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/18/10/30/20/43/2180106.jpg'}} />
<Text style={estilo.atores}>JADYN WONG</Text>
</View>
<View style={estilo.img2} >
<Image style={estilo.imgPequena} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/19/01/12/01/09/2292292.jpg'}} />
<Text style={estilo.atores}>KATHARINE MCPHEE</Text>
</View>
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
marginTop: 50
  },
  imgPequena:{
width: 100,
height: 100,

  },
  legenda:{
color: '#ffffff',

  },
  botao:{
backgroundColor: '#1E90FF',
borderRadius: 20,
padding: 10,
margin: 20,
marginHorizontal: 20,
  },
  textobotao:{
color: '#ffffff',
textAlign: 'center',
fontSize: 20

  },
  info:{
color: '#ffffff',
marginVertical: 20,
  },
  texto:{
color: '#ffffff',
fontSize: 15,
textAlign: 'justify',
  },
  atores:{
color: '#ffffff',
marginRight:0
  },
  separador:{
    marginVertical: 25,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  img1:{
   flexDirection: 'row',
  marginBottom:20
  },
  img2:{
    width:105,
    margin:6,
    marginLeft:4,
    alignItems:'center',
    textAlign:'center',
  },
  estrelas:{
    marginVertical: 25,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 5,
    marginLeft: 5,
    color: '#ffffff',
  },
});
