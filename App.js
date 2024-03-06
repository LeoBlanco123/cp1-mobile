import {Text,View,SafeAreaView,ScrollView,Image,Button} from 'react-native'
import Estilo from './components/Estilo'

export default ()=>(
  <ScrollView>
    <View style={Estilo.viewSafeAndroid}>
      <SafeAreaView>

        <View style={Estilo.divPrin}>
          <Text style={Estilo.h1}>PIZZARIA FIAP</Text>
          <Image style= {Estilo.tamImage}source={require('./assets/pizza.png')}/>
        </View>  

        <View>
          <Text>Está com fome de Pizza?</Text>
          <Text>Se sim Pizzaria FIAP, é o lugar perfeito para você!</Text>
        </View>

        <View>
          <Button title='Continue sem registrar' color={'#ff2200'}/>
        </View>

        <View>
          <Button title='Registar' color={'#22ff00'}/>
          <Button title='Login' color={'#d9d9d9'}/>
        </View>

      </SafeAreaView>
    </View>
  </ScrollView>
  
)