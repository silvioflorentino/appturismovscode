import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Separador = () => <View style={estilo.separador}/>;



export default function AReedeSocial(){

  return(
    
    <View style={estilo.container}>

      <ScrollView>

        <ImageBackground resizeMode={"contain"} style={estilo.img} source={{uri:'http://csonlineunitau.com.br/v14/wp-content/uploads/2019/04/foto-capa-a-rede-social12.jpg'}}>
        <Text style={estilo.titulo}>
        A Rede Social
        </Text>
        </ImageBackground>

        <View style={estilo.container2}>
      
        <Text style={estilo.legenda}>
        <MaterialCommunityIcons name="calendar-range"/>  03 de Dezembro de 2010  
        <MaterialCommunityIcons name="eye-outline"/>  Não assistido  
        <MaterialCommunityIcons name="checkbox-marked-circle" size={25} color={'#fff'}/>
        </Text>


        <Separador/>

        <Text style={estilo.info}>
          Onde Assistir
        </Text> 
        
          <TouchableOpacity style={estilo.botao}>
            <Text style={estilo.textobotao}> 
            <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={20}/>   Microsoft Movies & TV 
            </Text>
          </TouchableOpacity>
        
         <Separador/>

        <Text style={estilo.info}>
          Informações do Filme
        </Text>
        <Text>
          <MaterialCommunityIcons name="star" size={15} color={'#FFD700'}/>
          <MaterialCommunityIcons name="star" size={15} color={'#FFD700'}/>
          <MaterialCommunityIcons name="star" size={15} color={'#FFD700'}/>
          <MaterialCommunityIcons name="star" size={15} color={'#FFD700'}/>
          <MaterialCommunityIcons name="star" size={15} color={'#FFF'}/>
        </Text>

        <Text style={estilo.texto}>
          Em uma noite de outono em 2003, Mark Zuckerberg (Jesse Eisenberg), analista de sistemas graduado em Harvard, se senta em seu computador e começa a trabalhar em uma nova ideia. Apenas seis anos e 500 milhões de amigos mais tarde, Zuckerberg se torna o mais jovem bilionário da história com o sucesso da rede social Facebook. O sucesso, no entanto, o leva a complicações em sua vida social e profissional.
        </Text>


        <Separador/>

        <Text style={estilo.info}>
          Elenco
        </Text>
          
          <View style={estilo.imagenspequenas}>
            <Image style={estilo.imgpequeno} source={{uri:'https://br.web.img3.acsta.net/c_162_216/pictures/19/09/12/03/30/1919270.jpg'}}/>
            <Image style={estilo.imgpequeno} source={{uri:'https://br.web.img3.acsta.net/c_162_216/pictures/19/02/14/22/35/2237467.jpg'}}/>
            <Image style={estilo.imgpequeno} source={{uri:'https://br.web.img3.acsta.net/c_162_216/pictures/16/09/05/17/16/068414.jpg'}}/>
            <Image source={{uri:'https://br.web.img3.acsta.net/c_162_216/pictures/16/05/12/10/21/490556.jpg'}}/>
          </View>
          
        <View style={estilo.elencoatores}>
          <Text style={estilo.elencoatores}>Jesse Eisenberg</Text>
          <Text style={estilo.elencoatores}>Max Minghella</Text>
          <Text style={estilo.elencoatores}>Andrew Garfield</Text>
        </View>  
        
        </View>
      </ScrollView>
    </View>
    


  );
}

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#363636',
    padding: 5,
    
  },

  titulo:{
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 200,
    backgroundColor: '#7d7c7d',
  },

  container2:{
     padding: 10, 
  },

  img:{
    width: largura,
    height: 300,

  },

  legenda:{
    color: '#ffffff',
  },

  botao:{
    color: '#ffffff',
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    
    

  },

  textobotao:{
    color: 'white',
    fontSize: 18,
  },

  info:{
    marginBottom: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  texto:{
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'justify',
    margin: 15,
  },

  separador:{
    marginVertical: 25,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  imagenspequenas:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    
  },

  imgpequeno:{
    
    alignSelf: 'center',
    marginTop: 10,
    width: 100,
    height: 100,
  },

  elencoatores:{

    justifyContent: 'space-between',
    color: 'white',
    flexDirection: 'row',
  }


});