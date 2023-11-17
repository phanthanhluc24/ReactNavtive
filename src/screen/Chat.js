import React from 'react'
import { StyleSheet, View,Text,Image, TouchableOpacity } from 'react-native'

export const Chat = ({navigation}) => {
  return (
    <View style={styles.containerMessage}>
        <View style={styles.messageDiv}>
            {/* <TouchableOpacity>
                <View style={styles.iconBack}>
                    <Image source={require("../../assets/Vector.png")}></Image>
                </View>
            </TouchableOpacity> */}
            <Text style={styles.textChat}>Chat</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("ConversationStack",{image:require("../../assets/Profile.png"),name:"Phan Thanh Luc"})}>
                <View style={styles.blockImage}>
                    <Image source={require("../../assets/Profile.png")}></Image>
                    <View style={styles.textMessage}>
                        <Text style={{fontWeight:"800"}}>Phan Thanh Luc</Text>
                        <Text>Your order just arrived</Text>
                    </View>
                    <Text>20:00</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("ConversationStack",{image:require("../../assets/Profile1.png"),name:"Nguyen Van Bien"})}>
                <View style={styles.blockImage}>
                    <Image source={require("../../assets/Profile1.png")}></Image>
                    <View style={styles.textMessage}>
                        <Text style={{fontWeight:"800"}}>Nguyen Van Bien</Text>
                        <Text>Your order just arrived</Text>
                    </View>
                    <Text>20:00</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("ConversationStack",{image:require("../../assets/Profile2.png"),name:"Tran Quoc Huu"})}>
            <View style={styles.blockImage}>
                <Image source={require("../../assets/Profile2.png")}></Image>
                <View style={styles.textMessage}>
                    <Text style={{fontWeight:"800"}}>Tran Quoc Huu</Text>
                    <Text>Your order just arrived</Text>
                </View>
                <Text>20:00</Text>
            </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    containerMessage:{
        flex:1,
        backgroundColor:"#F0F0F0"
    },
    messageDiv:{
        marginHorizontal:16,
        marginVertical:8
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
    textChat:{
        paddingTop:20,
        fontSize:25,
        fontWeight:"700",
        paddingLeft:10
    },
    blockImage:{
        flexDirection:"row",
        backgroundColor:"#fff",
        padding:5,
        borderRadius:12,
        marginTop:15
    },
    textMessage:{
        paddingLeft:15,
        minWidth:210
    }
})
