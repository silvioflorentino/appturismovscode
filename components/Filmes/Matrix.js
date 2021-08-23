import * as React from 'react';
import {View, Text,StyleSheet, TouchableOpacity, Image, Dimensions,ScrollView, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Separador = () => <View style={estilo.separador}/>;

export default function Matrix(){

  return(

<View style={estilo.container}>
<ScrollView>
<Image resizeMode={"contain"} style={estilo.img} source={{uri:'https://financerewind.com/wp-content/uploads/2020/07/The-Matrix-4-01.jpg'}} />
<View style={estilo.container2}>
<Text style={estilo.legenda}>
<MaterialCommunityIcons name="calendar-range"/> 21 de maio de 2021 <MaterialCommunityIcons name="eye-outline"/> Não assistido  <MaterialCommunityIcons name="checkbox-marked-circle" size={40} color={'#fff'}/>
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
        Foi anunciada a data de lançamento de “Matrix 4”, o novo filme da franquia de ficção científica.
      </Text>
      <Text style={estilo.texto}>
        O longa deve chegar aos cinemas no dia 21 de maio de 2021!
      </Text>
      <Text style={estilo.texto}>
        “Matrix 4” vai ser estrelado pelo ator Keanu Reeves, que volta a interpretar o papel do personagem Neo.
      </Text>
      <Text style={estilo.texto}>
        Vale lembrar que o primeiro filme de Matrix estreou em 1999, portanto, nesse ano, o longa completa 20 anos de lançamento!
      </Text>

<Separador />
<Text style={estilo.info}>
Elenco
</Text>
<View style={estilo.img1} >
<View style={estilo.img2} >
<Image style={estilo.imgPequena} source={{uri:'https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg'}} />
<Text style={estilo.atores}>KEANU REEVES</Text>
</View>
<View style={estilo.img2} >
<Image style={estilo.imgPequena} source={{uri:'https://br.web.img2.acsta.net/c_310_420/pictures/15/11/18/14/21/140336.jpg'}} />
<Text style={estilo.atores}>CARRIE-ANNE MOSS</Text>
</View>
<View style={estilo.img2} >
<Image style={estilo.imgPequena} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/19/02/20/23/50/2980438.jpg'}} />
<Text style={estilo.atores}>YAHYA ABDUL-MATEEN II</Text>
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
height: 240,

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
   // alignItems:'center',
    textAlign:'center',
  },
  estrelas:{
    marginVertical: 25,
  }
});
