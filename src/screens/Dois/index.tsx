import React from "react";
import { ImageBackground, Image, View } from "react-native"
import { styles } from "../../screens/Dois/styles";
import { styleContainer } from "../../styles/globalstyle";
import { Ipagina } from "../../../App"
import { Botao } from "../../components/Botao"

export function Dois({ setpageI }: Ipagina) {
   const Fd = require('../../assets/fundoslidedois.png')
   const Fg = require('../../assets/grifinoria.png')
    return (
      <ImageBackground source={Fd} style={styleContainer.container}>
          <View style={styles.legacy}>
            <Image source={Fg}></Image>
         </View>
      <View style={styles.butao}>    
      <Botao onPress={() => setpageI(1)} />
      <Botao onPress={() => setpageI(2)} />
      <Botao onPress={() => setpageI(3)} />
      <Botao onPress={() => setpageI(4)} />
</View>
 </ImageBackground>

    )
}
