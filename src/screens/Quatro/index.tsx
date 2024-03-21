import React from "react";
import { ImageBackground, Image, View } from "react-native"
import { styles } from "../../screens/Quatro/styles";
import { styleContainer } from "../../styles/globalstyle";
import { Ipagina } from "../../../App"
import { Botao } from "../../components/Botao"

export function Quatro({ setpageI }: Ipagina) {
   const Fl = require('../../assets/fundoslidequatro.png')
   const Fll = require('../../assets/lufalufa.png')
    return (
      <ImageBackground source={Fl} style={styleContainer.container}>
          <View style={styles.legacy}>
            <Image source={Fll}></Image>
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
