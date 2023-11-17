import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { BlogOrder } from "./BlogOrder";
export const ConfirmOrder = ({navigation}) => {
  return (
    <View style={styles.containerOrder}>
      <View style={styles.mainOrder}>
        <TouchableOpacity onPress={()=>navigation.navigate("Order")}>
          <View style={styles.iconBack}>
            <Image source={require("../../assets/Vector.png")}></Image>
          </View>
        </TouchableOpacity>
        <Text style={styles.textConfirm}>Confirm Order</Text>
        <View style={styles.blogPayment}>
            <View style={styles.textMethod}>
                <Text>Deliver To</Text>
                <Text>Edit</Text>
            </View>
            <View style={styles.textMethod}>
                <View style={styles.iconAddress}>
                    <Image source={require("../../assets/placeholder.png")}></Image>
                </View>
                <Text>101B Le Huu Trac-DaNang</Text>
            </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Payment")}>
            <View style={styles.blogPayment}>
                <View style={styles.textMethod}>
                    <Text>Payment method</Text>
                    <Text>Edit</Text>
                </View>
                <View style={styles.textMethod}>
                    <Image source={require("../../assets/paypalLogo.png")}></Image>
                    <Text>24823742839*****</Text>
                </View>
            </View>
        </TouchableOpacity>
        <BlogOrder total navigate={"Payment"} navigation={navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOrder: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  mainOrder: {
    marginHorizontal: 16,
    marginVertical: 8,
    flex: 1,
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
  blogPayment:{
    height:70,
    width:320,
    padding:5,
    marginTop:20,
    backgroundColor:"#FFF",
    borderRadius:12
  },
  textMethod:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:5
  },
  textTotal:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  buttonOrder:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:15
  },
  buttonOrderText:{
    height:60,
    backgroundColor:"#FFFF",
    width:300,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15
  },
  bgTotal:{
    backgroundColor:"#6B50F6",
    borderRadius:10,
    padding:8,
    position:"absolute",
    bottom:0
  },
  textBoil:{
    fontSize:16,
    fontWeight:"600",
    color:"#6B50F6",
  },
  textColor:{
    color:"#FFFF"
  },
  iconAddress:{
    width:30,
    height:30,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#6B50F6",
    borderRadius:50
  },
  textConfirm:{
    marginTop:10,
    fontSize:24,
    fontWeight:"700"
  }
});
