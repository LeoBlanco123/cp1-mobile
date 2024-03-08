import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  viewSafeAndroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 20,
  },
  h1: {
    textAlign: 'center',
    padding: 40,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'children',
    color: '#ff2200',
    margin: '10%',
  },
  tamImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  divPrin: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  textPizza: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '55%',
  },
  textPizzaH1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'sans-serif',
  },
  pizzaText:{
    fontFamily: 'arial',
    fontSize: 23,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
  },
  buttonSemRegistro:{
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
