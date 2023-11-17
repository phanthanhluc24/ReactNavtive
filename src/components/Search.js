import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { TopNav } from "./TopNav";
import restaurant from "../json/restaurant";
import menu from "../json/menu";
export const Search = ({navigation}) => {
  const [dataSearch, setDataSearch] = useState([]);
  const locationData = restaurant.reduce((acc, item) => {
    if (!acc.find((data) => data.location === item.location)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const foodData = menu.reduce((acc, item) => {
    if (!acc.find((data) => data.food === item.food)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const renderItemLocation = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.items}
        onPress={()=>handleSearch(item.location)}
        >
        <Text style={styles.nameItem}>{item.location}</Text>
      </TouchableOpacity>
    );
  };

  const renderItemFood = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.items}
        onPress={() => handleSearch(item.food)}
      >
        <Text style={styles.nameItem}>{item.food}</Text>
      </TouchableOpacity>
    );
  };

  const handleSearch=(item)=>{
      if (dataSearch.includes(item)) {
        setDataSearch(dataSearch.filter((i)=> i!==item))
      }else{
        setDataSearch([...dataSearch,item])
      }
  }
  return (
    <View style={styles.containerHome}>
      <View style={{ flex: 1, marginHorizontal: 16, marginVertical: 8 }}>
        <TopNav navigation={navigation}/>
        <View style={styles.formSearch}>
          <View style={styles.iconSearch}>
            <Image source={require("../../assets/IconSearch.png")}></Image>
          </View>
          <TextInput
            placeholder="What do you want to order?"
            style={styles.inputText}
          ></TextInput>
        </View>
          <View style={styles.divOptionSearch}>
        <ScrollView>
              <View style={styles.subOption} >
            {dataSearch.map((item,index)=>(
                <TouchableOpacity style={styles.items} key={index} onPress={()=>handleSearch(item)}>
                  <Text style={styles.nameItem}>{item}</Text>
                  <Text style={styles.removeButtonText}>x</Text>
                </TouchableOpacity>
            ))}
            </View>
        </ScrollView>
            <Text style={styles.mainOption}>Type</Text>
            <View style={styles.subOption}>
              <TouchableOpacity style={styles.items} onPress={()=>handleSearch("Restaurant")}>
                <Text style={styles.nameItem}>Restaurant</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.items} onPress={()=>handleSearch("Menu")}>
                <Text style={styles.nameItem}>Menu</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.mainOption}>Location</Text>
            <View style={styles.subOption}>
              <FlatList
                data={locationData}
                renderItem={renderItemLocation}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
              ></FlatList>
            </View>
            <Text style={styles.mainOption}>Food</Text>
            <View style={styles.subOption}>
              <FlatList
                data={foodData}
                renderItem={renderItemFood}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
              ></FlatList>
            </View>
          </View>
        <TouchableOpacity onPress={() =>navigation.navigate("Result",{dataSearch:dataSearch})} style={styles.buttonSearch}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
              Search
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  formSearch: {
    flexDirection: "row",
    paddingTop: 30,
  },
  inputText: {
    height: 50,
    width: 270,
    backgroundColor: "#e3e3e3",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 10,
  },
  iconSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 55,
    backgroundColor: "#e3e3e3",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  divOptionSearch: {
    marginTop: 15,
  },
  mainOption: {
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 30,
  },
  subOption: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    // backgroundColor: "red",
  },
  items: {
    padding: 10,
    margin: 5,
    width: "30%",
    alignItems: "center",
    backgroundColor: "lightblue",
    borderRadius: 8,
  },
  nameItem: {
    color: "#6B50F6",
    fontSize: 13,
    fontWeight: "600",
  },
  buttonSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 325,
    height: 50,
    backgroundColor: "#6B50F6",
    marginTop: 40,
    borderRadius: 12,
    position:"absolute",
    bottom:20
  },
  removeButtonText: {
    color: 'red', 
    fontSize: 16,  
    fontWeight: 'bold', 
    position:"absolute",
    top:0,
    right:0
  }
});
