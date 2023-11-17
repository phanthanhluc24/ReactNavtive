import React from "react";
import { Image, StyleSheet, View,Text,TouchableOpacity } from "react-native";
export const FinishOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Profile.png")}></Image>
      <Text>Thank You!</Text>
      <Text>Order Completed</Text>
      <Text>Please rate your last Driver</Text>
      <Image source={require("../../assets/StarIcon.png")}></Image>
      <View style={styles.divButton}>
        <TouchableOpacity style={styles.buttonSubmit} onPress={()=>navigation.navigate("HOME")}>
          <Text style={{color:"#fff",fontWeight:"800"}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("HOME")}>
          <Text style={{color:"#6B50F6",fontWeight:"800"}}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F0F0F0",
        alignItems:"center",
        marginTop:200
    },
    divButton:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20,
        marginTop:15
    },
    buttonSubmit:{
        width:200,
        height:50,
        backgroundColor:"#6B50F6",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    }
});
