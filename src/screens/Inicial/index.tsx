import { ImageBackground, Image } from "react-native"
import { styles } from "./styles"

export function Inicial(){
 const Inicial = require('../../assets/hogwarts.png')
 return (
    <ImageBackground style={styles.container} source={Inicial}>
     <Image source={require('../../assets/harry.png')}/>
    </ImageBackground>

 )


}
