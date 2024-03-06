import { StyleSheet,Platform,StatusBar } from "react-native";

export default StyleSheet.create({
    viewSafeAndroid:{
      flex:1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0,
      padding:20,
    },
    h1:{
        textAlign:'center',
        padding: 40
    },
    tamImage:{
        width:200,
        height:200,
    },
    divPrin:{
      alignItems: 'center',
      paddingBottom: 50
    }


  })