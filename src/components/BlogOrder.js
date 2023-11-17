import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'

export const BlogOrder = ({total,navigate,navigation}) => {
  return (
       <View style={styles.bgTotal}>
          <View style={styles.textTotal}>
            <Text style={styles.textColor}>Sub-Total</Text> 
            <Text style={styles.textColor}>120 $</Text>
          </View>
          <View style={styles.textTotal}>
            <Text style={styles.textColor}>Delivery Charge</Text> 
            <Text style={styles.textColor}>10$</Text>
          </View>
          <View style={styles.textTotal}>
            <Text style={styles.textColor}>Discount</Text> 
            <Text style={styles.textColor}>20$</Text>
          </View>
          <View style={styles.textTotal}>
            <Text style={styles.textColor}>Total</Text>
            <Text style={styles.textColor}>{total-10}$</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate(navigate)}>
            <View style={styles.buttonOrder}>
                <View style={styles.buttonOrderText}>
                    <Text style={styles.textBoil}>Place My Order</Text>
                </View>
            </View>
          </TouchableOpacity>
        </View>
  )
}

const styles=StyleSheet.create({
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
        color:"#6B50F6"
      },
      textColor:{
        color:"#FFFF"
      }
})