import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View,TouchableOpacity,Image,Text } from 'react-native'

export const Shipping = ({navigation}) => {
    const navigate=useNavigation()
  return (
    <View style={styles.containerShipping}>
        <View style={styles.mainShip}>
            <TouchableOpacity onPress={()=>navigate.goBack()}>
            <View style={styles.iconBack}>
                <Image source={require("../../assets/Vector.png")}></Image>
            </View>
            </TouchableOpacity>
            <Text style={{fontSize:25,fontWeight:"700",paddingTop:5}}>Shipping</Text>

            <View style={styles.divShipping}>
                <Text style={{paddingLeft:10,fontSize:20,fontWeight:"700"}}>Order Location</Text>
                <View style={styles.divAddress}>
                    <View style={styles.divImage}>
                        <Image source={require("../../assets/placeholder.png")}></Image>
                    </View>
                    <Text>8502 Preston Rd. Inglewood, Maine 98380</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Location")}>
                <View style={styles.divShipping}>
                    <Text style={{paddingLeft:10,fontSize:20,fontWeight:"700"}}>Deliver To</Text>
                    <View style={styles.divAddress}>
                        <View style={styles.divImage}>
                            <Image source={require("../../assets/placeholder.png")}></Image>
                        </View>
                        <Text>4517 Washington Ave. Manchester, Kentuc</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    containerShipping:{
        flex: 1,
        backgroundColor: "#F0F0F0",
    },
    mainShip:{
        marginHorizontal: 16,
        marginVertical: 8,
        flex: 1,
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
    divShipping:{
        height:80,
        width:320,
        backgroundColor:"#fff",
        flexDirection:"column",
        marginTop:5,
        borderRadius:10
    },
    divAddress:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        paddingTop:5
    },
    divImage:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#6B50F6",
        width:30,
        height:30,
        borderRadius:50,
    }
})