import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput
} from "react-native";

export const Login = () => {
  const [login,setLogin]=useState({email:"",password:""})
  const [useLogin,setUserLogin]=useState([])
  const handleLogin=(fieldName,text)=>{
    setLogin({
      ...login,
      [fieldName]:text
    })
  }
  let userFound=false
  const navigation=useNavigation()
  useEffect(()=>{
    fetch("https://65471363902874dff3abefb3.mockapi.io/user",{
      method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>{
      setUserLogin(data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const handleLoginToApp=()=>{
    useLogin.forEach((item,index)=>{
      if (item.email===login.email && item.password===login.password) {
        userFound=true
        navigation.navigate("MyTab")
      }
    });
    if (!userFound) {
      alert("Account don't exit")
    }
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../assets/LoginIcon.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text
        style={{
          textAlign: "center",
          paddingTop: 30,
          fontSize: 25,
          fontWeight: "800",
        }}
      >
        Login To Your Account
      </Text>
      <View style={{ paddingTop: 30 }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(e)=>handleLogin("email",e)}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(e)=>handleLogin("password",e)}
            placeholder="*****"
            secureTextEntry={true}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontWeight: 600 }}>Or Continue With</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 18,
            paddingTop: 8,
            justifyContent: "space-between",
            marginVertical: 12,
            marginHorizontal: 18,
            padding: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              backgroundColor: "#F4F4F4",
              height: 50,
              width: 140,
              padding: 10,
              justifyContent: "center",
              borderRadius: 12,
            }}
          >
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              backgroundColor: "#F4F4F4",
              height: 50,
              width: 140,
              padding: 10,
              justifyContent: "center",
              borderRadius: 12,
            }}
          >
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={handleLoginToApp}
        >
          <Text style={{ fontSize: 20, fontWeight: "400",color:"#fff" }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 200,
    height: 300,
    textAlign: "center",
    marginLeft: 90,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginHorizontal: 18,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    gap: 8,
    backgroundColor: "white",
  },
  LoginButton: {
    backgroundColor: "#6B50F6",
    height: 60,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
    marginTop: 20,
    borderRadius: 10,
  },
});
