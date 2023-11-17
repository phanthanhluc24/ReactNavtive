import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { BackIcon} from "../components/BackIcon";
// import items from "../json/order";
import { SwipeListView } from "react-native-swipe-list-view";
import { BlogOrder } from "../components/BlogOrder";
export const Orders = ({navigation}) => {
  // const [quantity, setQuantity] = useState(1);
  const [order,setOrder]=useState([])
  if (Array.isArray(order)) {
    var totalPrice=order.reduce((total,item)=>total +(parseInt(item.price) * parseInt(item.quantity)),0)
  }

  useEffect(()=>{
    fetch("https://65471363902874dff3abefb3.mockapi.io/Order",{
      method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=>{
      setOrder(data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const handleReduce = (id,quantity) => {
    const amount=parseInt(quantity)
    if (amount>1) {
      fetch(`https://65471363902874dff3abefb3.mockapi.io/Order/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({quantity:amount-1})
      })
      .then((res)=>res.json())
      .then((data)=>{
        setOrder(data)
      })
      .catch((error)=>{
        console.log("Error fetch "+error);
      })
    }
  };
  const handleIncrease = (id,quantity) => {
    const amount=parseInt(quantity) + 1
    fetch(`https://65471363902874dff3abefb3.mockapi.io/Order/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({quantity:amount})
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log("API Response", data);
      if(data.ok){
        setOrder(data);
      }
    })
    .catch((error)=>{
      console.log("Error fetch "+error);
    })
  };

  const handleDelete=(id)=>{
    fetch(`https://65471363902874dff3abefb3.mockapi.io/Order/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
      const deleted=order.filter((item)=>item.id!==id)

      setOrder(deleted)
    })
    .catch((error)=>{
      console.log(error);
    })
    
  }


  
  return (
    <View style={styles.containerOrder}>
      <View style={styles.mainOrder}>
        <BackIcon />
        <Text style={styles.textOrder}>Order Details</Text>
          <SwipeListView
          scrollEnabled={true}
          style={{flex:1}}
            data={order}
            renderItem={({ item }) => (
              <View style={styles.listOrder}>
                <Image
                  style={styles.imageItem}
                  source={{ uri: `${item.image}` }}
                ></Image>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: "600" }}>
                    {item.restaurantName}
                  </Text>
                  <Text style={{ fontSize: 15, color: "#F0F0F0" }}>
                    {item.foodName}
                  </Text>
                  <Text
                    style={{
                      color: "#6B50F6",
                      fontSize: 17,
                      fontWeight: "800",
                    }}
                  >
                    ${item.price}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonReduce}
                  onPress={()=>handleReduce(item.id,item.quantity)}
                >
                  <Text style={{ color: "#6B50F6" }}>-</Text>
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.buttonIncrease}
                  onPress={()=>handleIncrease(item.id,item.quantity)}
                >
                  <Text style={{ color: "#fff" }}>+</Text>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={({item}) => (
              <View style={[styles.listOrder, { backgroundColor: "blue" }]}>
                <TouchableHighlight style={styles.buttonDelete} onPress={()=>handleDelete(item.id)}>
                  <View style={styles.rightButtonsContainer}>
                    <Image source={require("../../assets/Icontrash.png")} />
                  </View>
                </TouchableHighlight>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-95}
          />
          <BlogOrder total={totalPrice} navigate={"Confirm"} navigation={navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOrder: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  mainOrder: {
    marginHorizontal: 16,
    marginVertical: 8,
    flex: 1,
  },
  textOrder: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 10,
  },
  listOrder: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    width: 320,
    backgroundColor: "#fff",
    gap: 18,
    borderRadius: 10,
    marginTop: 20,
  },
  imageItem: {
    height: 65,
    width: 65,
    borderRadius: 20,
    marginLeft: 7,
  },
  buttonIncrease: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: "#6B50F6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonReduce: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rightButtonsContainer: {
    marginLeft: 260,
  },
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
});
