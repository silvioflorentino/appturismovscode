import * as React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default function Home(){
  return(
<View style={estilo.container}>
<Text style={estilo.logoTexto}>Stream {'\n'} Senac</Text>
<View>
<Image style={estilo.img}source={{uri:'https://th.bing.com/th/id/OIP.orlwO9QI-W4T__-YxgLmKgHaDt?pid=ImgDet&rs=1'}}/>
</View>
</View>
  );
}

const estilo = StyleSheet.create({
  img:{
    width: 150,
    height: 130,
    borderRadius: 660
  },
  container:{
flex:1,
backgroundColor:'#363636',
alignItems: 'center',
justifyContent: 'center'
  },
  logoTexto:{
fontSize: 30,
marginVertical: 40,
color:'#ffffff'
  }
})