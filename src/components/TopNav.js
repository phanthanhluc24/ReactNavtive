import React from 'react'
import { StyleSheet, View,Text,Image,TouchableOpacity } from 'react-native'

export const TopNav = ({navigation}) => {
  return (
    <View style={styles.container}>
          <Text style={styles.textTopView}>Find your {"\n"}Favorite food</Text>
            <View style={styles.iconNotification}>
              <TouchableOpacity onPress={()=>navigation.navigate("Notify")}>
                  <Image source={require("../../assets/IconNotifiaction.png")}></Image>
              </TouchableOpacity>
            </View>
        </View>
  )
}

const styles=StyleSheet.create({
      container: {
        marginTop: 50,
        flexDirection: "row",
        height:120

      },
      textTopView: {
        fontSize: 35,
        fontWeight: "700",
      },
      iconNotification: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 55,
        backgroundColor: "#e3e3e3",
        borderRadius: 12,
        position: "absolute",
        left: 260,
        top: 20,
      },
})