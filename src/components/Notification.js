import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet, View,TouchableOpacity } from "react-native";

export const Notification = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
    <View style={styles.mainNotify}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={styles.iconBack}>
          <Image source={require("../../assets/Vector.png")}></Image>
        </View>
      </TouchableOpacity>
      <Text style={{fontWeight:"800",fontSize:27,marginTop:10}}>Notification</Text>

      <View style={styles.divNotify}>
        <Image style={styles.imageIcon} source={require("../../assets/checked.png")}></Image>
        <View style={styles.divText}>
            <Text style={{fontWeight:"800"}}>Your order has been taken by the driver</Text>
            <Text>Recently</Text>
        </View>
      </View>

      <View style={styles.divNotify}>
        <Image style={styles.imageIcon} source={require("../../assets/money.png")}></Image>
        <View style={styles.divText}>
            <Text style={{fontWeight:"800"}}>Topup for $100 was successful</Text>
            <Text>10.00 Am</Text>
        </View>
      </View>

      <View style={styles.divNotify}>
        <Image style={styles.imageIcon} source={require("../../assets/x-button.png")}></Image>
        <View style={styles.divText}>
            <Text style={{fontWeight:"800"}}>Your order has been canceled</Text>
            <Text>22 Juny 2021</Text>
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F0F0F0",
    },
    iconBack:{
        marginTop:30,
        height:50,
        width:50,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        borderRadius:8
    },
    mainNotify:{
        marginHorizontal: 16,
        marginVertical: 8,
        flex: 1,
    },
    divNotify:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:10,
        height:80,
        marginTop:15
    },
    divText:{
        flexDirection:"column",
        justifyContent:"flex-start",
        marginLeft:15
    },
    imageIcon:{
        marginLeft:10
    }
});
