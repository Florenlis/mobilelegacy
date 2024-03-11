import React from "react";
import { ImageBackground, Image, View } from "react-native"
import { styles } from "../../screens/Tres/styles";
import { styleContainer } from "../../styles/globalstyle";
import { Ipagina } from "../../../App"
import { Botao } from "../../components/Botao"

export function Quatro({ setpageI }: Ipagina) {
   const Rw = require('../../assets/harry.png')
    return (
      <ImageBackground source={Rw} style={styleContainer.container}>
      <View style={styles.butao}>    
      <Botao onPress={() => setpageI(1)} />
      <Botao onPress={() => setpageI(2)} />
      <Botao onPress={() => setpageI(3)} />
      <Botao onPress={() => setpageI(4)} />
</View>
 </ImageBackground>

    )
}
