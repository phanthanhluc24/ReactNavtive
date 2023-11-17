import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import restaurant from "../json/restaurant";

export const Detail = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params;
  const [foods, setFoods] = useState([]);
  const item = restaurant.find((item) => item.id == id);
console.log(item);
  useEffect(() => {
    fetch("https://63a572342a73744b008e2ce7.mockapi.io/API/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart=()=>{
    const order={
      id:id,
      image:item.image,
      foodName:item.title,
      restaurantName:item.type,
      price:item.price,
      quantity:1
    }

    fetch("https://65471363902874dff3abefb3.mockapi.io/Order",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(order)
    })
    .then((res)=>res.json())
    .then((data)=>{
      navigation.navigate("SHOPPING")
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { id: item.id })}
      >
        <View style={styles.popularMenu}>
          <View style={styles.titleMenu}>
            <Image
              style={styles.imageMenu}
              source={{ uri: `${item.image}` }}
            ></Image>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          </View>
          <Text style={styles.titlePrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerDetail}>
      <View>
        <Image source={{ uri: item.image }} style={styles.imageDetail}></Image>
      </View>
      <View style={styles.blogDetail}>
        <View style={styles.marginPadding}>
          <FlatList
            style={{ flex: 1, backgroundColor: "#F0F0F0" }}
            data={foods}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListHeaderComponent={
              <View>
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontSize: 25,
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 20 }}>{item.price}.000 VND</Text>

                <Text style={styles.textPopular}>Popular Foods</Text>
              </View>
            }
          />
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <View style={styles.buttonBuyNow}>
              <Text style={{ textTransform: "uppercase", color: "#fff" }}>
                Thêm vào Giỏ hàng
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  marginPadding: {
    marginHorizontal: 16,
    marginVertical: 8,
    flex: 1,
  },
  imageDetail: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 430,
    borderRadius: 10,
    objectFit: "cover",
  },
  buttonBuyNow: {
    height: 60,
    width: 280,
    backgroundColor: "#6B50F6",
    position: "absolute",
    bottom:0,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
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
  blogDetail: {
    backgroundColor: "#fff",
    minHeight: 400,
    position: "relative",
    bottom: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textPopular: {
    fontSize: 17,
    fontWeight: "800",
  },
  popularMenu: {
    height: 87,
    width: 320,
    backgroundColor: "#fff",
    marginLeft: 5,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  imageMenu: {
    width: 64,
    height: 64,
    backgroundColor: "red",
    borderRadius: 10,
  },
  titleMenu: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
  },
  titlePrice: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: "700",
    color: "#6B50F6",
  },
});
