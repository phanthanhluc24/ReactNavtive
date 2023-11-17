import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import food from "../json/restaurant";
import { Menu } from "../components/Menu";
import { TopNav } from "../components/TopNav";
export const Homes = ({ navigation }) => {
  
  const [foods,setFoods]=useState([])

  useEffect(()=>{
    fetch("https://63a572342a73744b008e2ce7.mockapi.io/API/products",{
      method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=>{
      setFoods(data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { id: item.id })}
      >
        <View style={styles.viewFlatList}>
          <View style={styles.viewProducts}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{ uri: `${item.image}` }}
                style={styles.product}
              ></Image>
            </View>
            <Text style={{ textAlign: "center" }}>{item.title}</Text>
            <Text style={{ textAlign: "center" }}>{item.minus}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.containerHome}>
      <View style={{ flex: 1, marginHorizontal: 16, marginVertical: 8 }}>
        <TopNav navigation={navigation}/>
        <View style={{ flex: 1 }}>
          <FlatList
            data={foods}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            ListHeaderComponent={
              <View>
                <View style={styles.formSearch}>
                  <View style={styles.iconSearch}>
                    <Image
                      source={require("../../assets/IconSearch.png")}
                    ></Image>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}
                  >
                    <View style={styles.inputText}>
                      <Text>What do you want to order?</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}
                  >
                    <View style={styles.iconFilter}>
                      <Image
                        source={require("../../assets/FilterIcon.png")}
                      ></Image>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.adentisment}>
                  <Image source={require("../../assets/Image.png")}></Image>
                  <View style={styles.specialFood}>
                    <Text style={styles.textSpecial}>
                      Special Deal For {"\n"}October
                    </Text>
                    <TouchableOpacity style={{ paddingTop: 25 }}>
                      <View style={styles.buttonBuyNow}>
                        <Text style={styles.textBuyNow}>Buy Now</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.dupleChoose}>
                  <Text style={{ fontWeight: "900", fontSize: 17 }}>
                    Nearest Restaurant
                  </Text>
                  <TouchableOpacity>
                    <Text style={{ color: "#6B50F6" }}>View More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
            ListFooterComponent={<Menu></Menu>}
          ></FlatList>
        </View>
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
    width: 190,
    backgroundColor: "#e3e3e3",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 55,
    borderRadius: 12,
    marginLeft: 20,
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

  adentisment: {
    backgroundColor: "#6B50F6",
    borderRadius: 8,
    marginTop: 20,
    flexDirection: "row",
  },
  specialFood: {
    position: "absolute",
    left: 190,
    top: 20,
  },
  buttonBuyNow: {
    height: 30,
    width: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  textBuyNow: {
    color: "#6B50F6",
    fontWeight: "600",
  },
  textSpecial: {
    fontSize: 16,
    color: "#fff",
  },
  dupleChoose: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
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
  viewFlatList: {
    flexDirection: "row",
    paddingLeft: 10,
  },
});
