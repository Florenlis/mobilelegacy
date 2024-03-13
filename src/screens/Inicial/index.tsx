import React from "react";
import { ImageBackground, Image, View } from "react-native"
import { styles } from "../../screens/Inicial/styles";
import { styleContainer } from "../../styles/globalstyle";
import { Ipagina } from "../../../App"
import { Botao } from "../../components/Botao"

export function Inicial({ setpageI }: Ipagina) {
   const Rw = require('../../assets/hogwarts.png')
   const sg = require('../../assets/harry.png')
    return (
      <ImageBackground source={Rw} style={styleContainer.container}>
         <View style={styles.legacy}>
            <Image source={sg}></Image>
         </View>
      <View style={styles.ball}>    
      <Botao onPress={() => setpageI(1)} />
      <Botao onPress={() => setpageI(2)} />
      <Botao onPress={() => setpageI(3)} />
      <Botao onPress={() => setpageI(4)} />
</View>
 </ImageBackground>

    )
}