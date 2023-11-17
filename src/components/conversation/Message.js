import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ChatChit } from "./ChatChit";
export const Conversation = ({ navigation, image, name }) => {
  const navigate=useNavigation()
  return (
    <View style={styles.containerMessage}>
      <View style={styles.messageDiv}>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <View style={styles.iconBack}>
            <Image source={require("../../../assets/Vector.png")}></Image>
          </View>
        </TouchableOpacity>
        <Text style={styles.textChat}>Chat</Text>
        <View style={styles.blockImage}>
          <Image source={image}></Image>
          <View style={styles.textMessage}>
            <Text style={{ fontWeight: "800" }}>{name}</Text>
            <Text>Online</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Calling", { image: image, name: name })
            }
          >
            <View style={styles.iconCall}>
              <Image source={require("../../../assets/Calllogo.png")}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <ChatChit/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMessage: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  messageDiv: {
    marginHorizontal: 16,
    marginVertical: 8,
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
  blockImage: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 12,
    marginTop: 15,
  },
  textMessage: {
    paddingLeft: 15,
    minWidth: 190,
  },
  iconCall: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 50,
    width: 40,
    height: 40,
    marginTop: 10,
  },
  textChat: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: "700",
    paddingLeft: 10,
  },
});
