import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Estilo from './components/Estilo';
import { useNavigation } from '@react-navigation/native'; 

const HomeScreen = () => {
  const navigation = useNavigation();

  const irParaCardapio = () => {
    navigation.navigate('Cardapio');
  };

  const irParaRegistro = () => {
    navigation.navigate('Registro');
  };

  const irParaLogin = () => {
    navigation.navigate('Login');
  };

  return ( 
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
            <TouchableOpacity onPress={irParaCardapio} style={Estilo.button}>
              <Text style={Estilo.buttonText}>Continue sem registrar</Text>
            </TouchableOpacity>
          </View>

          <View style={Estilo.buttonContainer}>
            <TouchableOpacity onPress={irParaRegistro} style={Estilo.button}>
              <Text style={Estilo.buttonText}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={irParaLogin} style={Estilo.button}>
              <Text style={Estilo.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
