import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,  Keyboard } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {

  const [cidade, setCidade] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const[sunrise, setSunrise] = useState("");
  const[sunset, setSunset] = useState("");
  const[fellsLike, setFellsLike] = useState("");
  const[image, setImage] = useState("");



  const capturaCidade = (cidade) => {
    setCidade(cidade);
  }
  
  const endPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  const oneCall = "https://api.openweathermap.org/data/2.5/onecall";
  
  const apiKey = "19ed30394407d9b9c5453b6813297540";

  const obtemPrevisoes = () => {
    
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => { 
      
      setLatitude(dados.coord.lat)
      setLongitude(dados.coord.lon)

      Keyboard.dismiss()

    });

  };
  


  const obterPrevisao = (latitude, longitude) => {

    const target = oneCall + "?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=" + apiKey;
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {

      setSunrise(dados.current.sunrise)
      setSunset(dados.current.sunset)
      setFellsLike(dados.current.feels_like)
      setImage(dados.current.weather[0].icon)

      
    })
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.entrada}>
        <TextInput 
          style={estilos.nomeCidade}
          placeholder="Digite o nome da Cidade"
          value={cidade}
          onChangeText={capturaCidade}
        />
        <Button
          title="Ok"
          onPress={obtemPrevisoes}
        />
        <Button
        title=""
          onPress={obterPrevisao(latitude, longitude)}
        />
      </View>
      <View style={estilos.previsao}>
      <PrevisaoItem 
        amanhecer ={sunrise}
        anoitecer={sunset}
        sensacao={fellsLike} 
        imagem ={image}
      />

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    padding:40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
  },
  nomeCidade:{
    padding:10,
    borderBottomColor:'#BB96F3',
    borderBottomWidth:2,
    textAlign:'left',
    flexGrow:0.9
  },
  entrada:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  previsao:{
    marginTop:50
  }
});
