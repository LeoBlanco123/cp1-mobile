import { Text, View, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import Estilo from './components/Estilo';

export default () => (
  <ScrollView>
    <View style={Estilo.viewSafeAndroid}>
      <SafeAreaView>

        <View style={Estilo.divPrin}>
          <Text style={Estilo.h1}>PIZZARIA FIAP</Text>
          <Image style={Estilo.tamImage} source={require('./assets/pizza.png')} />
        </View>

        <View style={Estilo.textPizza}>
          <Text style={Estilo.textPizzaH1}>Está com fome de Pizza?</Text>
          <Text style={Estilo.pizzaText}>Pizzaria FIAP é o lugar perfeito para você!</Text>
        </View>

        <View style={Estilo.buttonSemRegistro}>
          <Button title='Continue sem registrar' color={'#ff2200'} />
        </View>

        <View style={Estilo.buttonContainer}>
          <View style={Estilo.button}>
            <Button title='Registrar' color={'#008000'} />
          </View>

          <View style={Estilo.button}>
            <Button title='Login' color={'#808080'} />
          </View>
        </View>

      </SafeAreaView>
    </View>
  </ScrollView>
);
