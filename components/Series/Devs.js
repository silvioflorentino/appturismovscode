import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Separador = () => <View style={estilo.separador}/>;



export default function Devs(){

  return(
    
    <View style={estilo.container}>

      <ScrollView>

        <ImageBackground resizeMode={"contain"} style={estilo.img} source={{uri:'https://musicadeseries.com/wp-content/uploads/2020/04/musicas-de-devs-fx-hulu.jpg'}}>
    
        </ImageBackground>

        <View style={estilo.container2}>
      
         <Text style={estilo.legenda}>
            <MaterialCommunityIcons name="calendar-range" /> 01 de Janeiro de
            2020 <MaterialCommunityIcons name="eye-outline" /> Não assistido{' '}
            <MaterialCommunityIcons
              name="checkbox-marked-circle"
              size={40}
              color={'#fff'}
            />
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
          Informações da Série
        </Text>
        <Text>
          <MaterialCommunityIcons name="star" size={15} color={'#FFD700'}/>
          <MaterialCommunityIcons name="star" size={15} color={'#FFD700'}/>
          <MaterialCommunityIcons name="star" size={15} color={'#FFD700'}/>
          <MaterialCommunityIcons name="star" size={15} color={'#FFF'}/>
          <MaterialCommunityIcons name="star" size={15} color={'#FFF'}/>
        </Text>

        <Text style={estilo.texto}>
          Lily Chan (Sonoya Mizuno) é uma engenheira de computação que inicia uma investigação da divisão secreta da companhia em que trabalha. Ela acredita que a empresa está por trás do assassinato de seu namorado. O principal alvo da averiguação é Forest (Nick Offerman), o CEO da corporação que é obcecado pela tal divisão secreta.
        </Text>


        <Separador/>

        <Text style={estilo.info}>
          Elenco
        </Text>
          
          <View style={estilo.imagenspequenas}>
            <Image style={estilo.imgpequeno} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/18/08/07/15/06/0277754.jpg'}}/>
            <Image style={estilo.imgpequeno} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/19/03/22/20/53/3155267.jpg'}}/>
            <Image style={estilo.imgpequeno} source={{uri:'https://br.web.img3.acsta.net/c_310_420/pictures/15/06/16/23/28/598446.jpg'}}/>
            
          </View>
          
        <View style={estilo.elencoatores}>
          <Text style={estilo.elencoatores}>Sonoya Mizuno</Text>
          <Text style={estilo.elencoatores}>Nick Offerman</Text>
          <Text style={estilo.elencoatores}>Zach Grenier  </Text>
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