import React from "react";
import { View, Text, Image, TouchableOpacity,StyleSheet } from "react-native";

export const Payment = ({navigation}) => {
  return (
    <View style={styles.containerOrder}>
      <View style={styles.mainOrder}>
        <TouchableOpacity onPress={()=>navigation.navigate("Confirm")}>
          <View style={styles.iconBack}>
            <Image source={require("../../assets/Vector.png")}></Image>
          </View>
        </TouchableOpacity>
        <Text style={styles.textConfirm}>Payment</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Shipping")}>
          <View style={styles.blMethod}>
            <Image source={require("../../assets/paypalLogo.png")}></Image>
            <Text>267438248439 ****</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.blMethod}>
          <Image source={require("../../assets/Layer.png")}></Image>
        <Text>267438248439 ****</Text>
        </View>
        <View style={styles.blMethod}>
          <Image source={require("../../assets/Group.png")}></Image>
            <Text>267438248439 ****</Text>
        </View>
      </View>
    </View>
  );
};

const styles=StyleSheet.create({
    containerOrder: {
        flex: 1,
        backgroundColor: "#F0F0F0",
      },
      mainOrder: {
        marginHorizontal: 16,
        marginVertical: 8,
        flex: 1,
      },
      textConfirm:{
        marginTop:10,
        fontSize:24,
        fontWeight:"700"
      },
      blMethod:{
        width:320,
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        marginTop:15,
        borderRadius:12,
        padding:7
      },
      iconBack: {
        marginTop: 30,
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        borderRadius: 8,
      },
})