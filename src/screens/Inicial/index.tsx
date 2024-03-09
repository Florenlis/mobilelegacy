import { ImageBackground, Image, View } from "react-native"
import { styles } from "./styles"
import { Botao } from "../../components/Botao"
import { IPage } from "../../../App"

export function Inicial({setPage}:IPage){
 const Inicial = require('../../assets/hogwarts.png')
 return (
    <ImageBackground style={styles.container} source={Inicial}>
      <View style={styles.legacy} >
     <Image source={require('../../assets/harry.png')}/>
     </View>
     <View style={styles.butao}>    
              <Botao onPress={() => setPage(1)} />
              <Botao onPress={() => setPage(2)} />
              <Botao onPress={() => setPage(3)} />
              <Botao onPress={() => setPage(4)} />
     </View>
    </ImageBackground>

 )


}
