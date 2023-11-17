import React,{useState} from 'react'
import {View,StyleSheet,Text,FlatList,Image,TouchableOpacity} from "react-native"
import { TopNav } from './TopNav'
import { useRoute } from '@react-navigation/native'
import menu from '../json/menu'
import restaurant from '../json/restaurant'
export const Result = ({navigation}) => {
    const route=useRoute()
    const {dataSearch}=route.params
    const search=JSON.stringify(dataSearch)
    const dataArray=[...menu,...restaurant]

    const searchResult=dataArray.filter((item)=>{
        return (
            search.includes(item.location)||
            search.includes(item.food)||
            search.includes(item.type)
        )
    })

    const itemRender=({item})=>{
        return (
          <TouchableOpacity onPress={()=>navigation.navigate("Detail",{id:item.id})}>
            <View style={styles.viewFlatList}>
              <View style={styles.viewProducts}>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={{ uri: `${item.image}` }}
                    
                    style={styles.product}
                  ></Image>
                </View>
                <Text style={{ textAlign: "center" }}>{item.title || item.menuName}</Text>
                <Text style={{ textAlign: "center" }}>{item.minus || item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
          );
        };
  return (
    <View style={styles.containerHome}>
         <View style={{ flex: 1, marginHorizontal: 16, marginVertical: 8 }}>
            <TopNav/>
            <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
                <Text style={styles.textBack}>Back</Text>
            </TouchableOpacity>
            <View style={{flex:1}}>
                <FlatList
                data={searchResult}
                renderItem={itemRender}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                >
                </FlatList>
            </View>
         </View>
    </View>
  )
}

const styles=StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: "#F0F0F0",
      },
    viewFlatList: {
        flexDirection: "row",
        paddingLeft: 10,
      },
    viewProducts: {
        height: 160,
        backgroundColor: "#fff",
        width: 150,
        borderRadius: 8,
        marginTop: 20,
      },
    product: {
        height: 80,
        width: 80,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 15,
      },
    textBack:{
        paddingTop:5,
        paddingBottom:5,
        color:"#6B50F6",
        fontWeight:"700"
    }
})