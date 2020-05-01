import React from 'react';
import { 
    View,
    StyleSheet,
    Image,
    Text
        } from 'react-native';

import Cartao from './Cartao';



const PrevisaoItem = (props) => {
    
    return(
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
            <Image 
                style={estilos.imagem}
                source={{ uri: "https://openweathermap.org/img/wn/" + props.imagem + ".png" }}
            />
                <View>
                    <View style={estilos.primeiraLinha}>
                        <Text >Nascer do Sol: {new Date(props.amanhecer * 1000).toLocaleTimeString()}</Text>
                    </View>
                    <View style={estilos.segundaLinha}>
                        <Text style={estilos.valor}> Pôr do Sol: {new Date(props.anoitecer * 1000).toLocaleTimeString()}</Text>
                    </View>
                    <View style={estilos.segundaLinha}>
                        <Text style={estilos.valor}>Sensação Térmica: {props.sensacao + "\u00B0"}</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    );
};

const estilos = StyleSheet.create({
    cartao:{
        marginBottom: 5
    },
    tela:{
        flexDirection:'row'
    },
    imagem:{
        width: 60,
        height: 60,
        marginRight:20
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2,
    }
})

export default PrevisaoItem;
