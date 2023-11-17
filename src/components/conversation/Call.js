import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View,StyleSheet,Image, TouchableOpacity } from 'react-native'

export const Calling = () => {
    const route=useRoute()
    const {image,name}=route.params
    const navigation=useNavigation()
    const [volume,setVolume]=useState(require("../../../assets/VolumeUp.png"))

    const handleChangIcon=()=>{
        if (volume==require("../../../assets/VolumeUp.png")) {
            setVolume(require("../../../assets/VolumeOff.png"))
        }else{
            setVolume(require("../../../assets/VolumeUp.png"))
        }
    }
  return (
    <View style={styles.containerCalling}>
        <View style={styles.calling}>
            <View style={styles.ringing}>
                <Image source={image} style={styles.image}></Image>
                <Text style={styles.name}>{name}</Text>
                <Text>Ringing...</Text>
            </View>
            <View style={styles.actionIcon}>
            <TouchableOpacity onPress={handleChangIcon}>
                <View style={styles.bgIconOk}>
                    <Image source={volume}></Image>
                </View>
            </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={styles.bgIconCancel}>
                        <Text style={{color:"#fff",fontSize:20,fontWeight:"600"}}>X</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    containerCalling:{
        flex:1,
        backgroundColor:"#F0F0F0"
    },
    calling:{
        marginHorizontal:16,
        marginVertical:8,
    },
    ringing:{
        paddingTop:150,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:200,
        height:200,
        borderRadius:100,
        objectFit:'cover',
    },
    name:{
        fontSize:25,
        fontWeight:"800",
        paddingTop:15
    },
    actionIcon:{
        flexDirection:"row",
        gap:15,
        paddingTop:160,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    bgIconCancel:{
        width:80,
        height:80,
        borderRadius:100,
        backgroundColor:"red",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    bgIconOk:{
        width:80,
        height:80,
        borderRadius:100,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})