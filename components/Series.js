import * as React from 'react';
import {View, Text, StyleSheet,ScrollView,Image,TouchableOpacity, Dimensions,FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const largura = Dimensions.get("screen").width;

export default function Serie(props){
  return(
<View style={estilo.container}>

<Text style={estilo.titulo}> Senac Series </Text>

<FlatList 
data={dados}
keyExtractor = {(item) => item.uid.toString()}
renderItem={({item}) =>
<View style={estilo.bloco}>
  <View>
  <Image style={estilo.img} resizeMode={"contain"} source={{uri:item.img}}/>
  </View>

  <View>
  <TouchableOpacity style={estilo.botao} onPress={()=>{props.navigation.navigate(item.serie)}} >
  <Text style={estilo.textoBloco}> {item.nome} > </Text>
  </TouchableOpacity>
  <Text style={estilo.textoBloco}> {item.info}</Text>
  <Text style={estilo.textoBloco}>{item.tituloinfo}</Text>
  </View>

  <View style={{marginLeft:20, justifyContent:'center'}}>
  <MaterialCommunityIcons name="checkbox-marked-circle" color={'#ffffff'} size={30}/>
  </View>

</View>
}/>
</View>
  );
}

const dados =[
  {uid: 1, nome:'Silicon Valley',info:'S06 | E01',tituloinfo:'O caminho do sucesso',img:'https://m.media-amazon.com/images/I/81sYbD4xK+L._AC_SX466_.jpg',serie:'SilliconValley'},
{uid: 2,nome:'Silicon Valley',info:'S06 | E01',tituloinfo:'O caminho do sucesso',img:'https://m.media-amazon.com/images/I/81sYbD4xK+L._AC_SX466_.jpg',serie:'SilliconValley'},
{uid: 3,nome:'MrRobot',info:'S01 | E17',tituloinfo:'Contra o sistema',img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7iBQ4BVTVF5444sUyYZaoA3RT4wNVGW61p1uI6Gg1O8HtKd5T',serie:'MrRobot'},
{uid: 4,nome:'MrRobot',info:'S01 | E17',tituloinfo:'Contra o sistema',img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7iBQ4BVTVF5444sUyYZaoA3RT4wNVGW61p1uI6Gg1O8HtKd5T',serie:'MrRobot'},
{uid: 5,nome:'Como Vender Drogas \n Online (Rápido) ',info:'S01 | E05',tituloinfo:'Ou tudo ou nada',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5_Ih1hkfpLQ0-0vjAh_NyZEV_Il7JJjxZQ&s',serie:'ComoVenderDrogasOnline'},
{uid: 6,nome:'Como Vender Drogas \n Online (Rápido) ',info:'S01 | E05',tituloinfo:'Ou tudo ou nada',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5_Ih1hkfpLQ0-0vjAh_NyZEV_Il7JJjxZQ&s',serie:'ComoVenderDrogasOnline'},
];

const estilo = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor: '#363636',
  },
  bloco:{
width: 330,
height: 100,
marginVertical: 3,
marginHorizontal: 10,
backgroundColor: '#808080',
borderRadius: 5,
flexDirection: 'row',
  },
img:{
  width:80,
  height: 100,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius:5
},
textoBloco:{
  color:'#ffffff',
  marginHorizontal: 20,
  textAlign: 'center'
},
botao:{
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: '#ffffff',
  borderRadius: 10,
  marginLeft: 20,
  marginVertical: 13,
},
titulo:{
  marginTop: 35,
  marginBottom: 15,
  textAlign: 'center',
  fontSize: 30,
  color:'#ffffff'
}
});
