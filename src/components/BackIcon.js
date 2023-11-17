import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {StyleSheet,View,TouchableOpacity,Image} from "react-native"
export const BackIcon = () => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()}>
                <View style={styles.iconBack}>
                    <Image source={require("../../assets/Vector.png")}></Image>
                </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
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
})