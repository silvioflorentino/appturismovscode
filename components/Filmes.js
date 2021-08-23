import * as React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';

export default function Filmes(props){
  return(
<View style={estilo.container}>
<Text style={estilo.titulo}> Senac Filmes </Text>
<ScrollView>
<View style={estilo.grupo3}>

    <TouchableOpacity style={estilo.touch} onPress={()=>{props.navigation.navigate('SteveJobs')}} >
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/16/01/21/19/20/543740.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch} onPress={()=>{props.navigation.navigate('ARedeSocial')}}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/32/90/19874370.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch} onPress={()=>{props.navigation.navigate('PiratasDaInformatica')}}>
  <Image style={estilo.imgBotao} resizeMode={'contain'}  source={{uri:'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/85/31/19962213.jpg'}}/>
    </TouchableOpacity>
</View>


<View style={estilo.grupo3}>

    <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img3.acsta.net/pictures/20/01/28/22/54/2304385.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch} onPress={()=>{props.navigation.navigate('PrivacidadeHackeada')}}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img3.acsta.net/pictures/19/07/16/09/30/5358083.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'}  source={{uri:'https://br.web.img2.acsta.net/c_310_420/pictures/21/06/22/22/19/1495362.jpg'}}/>
    </TouchableOpacity>
</View>


<View style={estilo.grupo3}>

    <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img2.acsta.net/c_310_420/pictures/21/07/12/19/46/5943552.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch} onPress={()=>{props.navigation.navigate('Matrix')}}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img2.acsta.net/r_1920_1080/medias/nmedia/18/91/08/82/20128877.JPG'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'}  source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/17/10/23/19/55/0260439.jpg'}}/>
    </TouchableOpacity>
</View>


<View style={estilo.grupo3}>

    <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/20/07/02/22/38/2826809.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/18/12/26/12/09/2834480.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkCQt3BNR9ae0kXTtSG-sT8XpnPAu8gVRrg&usqp=CAU'}}/>
    </TouchableOpacity>
</View>


<View style={estilo.grupo3}>

    <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/21/04/14/19/06/3385237.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/21/07/07/00/23/1802515.jpg'}}/>
    </TouchableOpacity>

       <TouchableOpacity style={estilo.touch}>
  <Image style={estilo.imgBotao} resizeMode={'contain'}  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3xHZTrcZJwy5329VtEkP3tJn4L4EJih6XQ&usqp=CAU'}}/>
    </TouchableOpacity>
</View>

</ScrollView>

</View>
  );
}

const estilo = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems: 'center',
backgroundColor: '#363636',
},
grupo3:{
flexDirection: 'row',
justifyContent: 'space-between',
marginHorizontal: 15,
},
imgBotao:{
  width: 100,
  height: 150
},
touch:{
  justifyContent: 'space-between',
  marginHorizontal: 1
},
titulo:{
  marginTop: 35,
  marginBottom: 15,
  textAlign: 'center',
  fontSize: 30,
  color:'#ffffff'
}
});