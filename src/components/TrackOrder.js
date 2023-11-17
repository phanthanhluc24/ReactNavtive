import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
export const TrackOrder = () => {
  const navigation = useNavigation();

  setTimeout(()=>{
    navigation.navigate("Finish")
  },5000)
  return (
    <View style={{flex:1}}>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 16.0544,
          longitude: 108.2022,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 16.0544, longitude: 108.2022 }}
          title={"DaNag City"}
          description={"A small city of VietNam"}
        />
      </MapView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.positionMap}>
        <View style={styles.iconBack}>
          <Image source={require("../../assets/Vector.png")}></Image>
        </View>
      </TouchableOpacity>
      <View style={styles.blogDiv}>
        <Text style={{ fontSize: 20, fontWeight: "700", paddingLeft: 7 }}>
          Track Orders
        </Text>
        <View style={styles.blogImage}>
          <Image source={require("../../assets/Profile.png")}></Image>
          <View>
            <Text>Mr Kemplas</Text>
            <Text>25 minutes on the way</Text>
          </View>
        </View>
        <View style={styles.blogCall}>
          <Image source={require("../../assets/Calllogo.png")}></Image>
          <Text>Call</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  containerTrackOrder: {
    flex: 1,
  },
  blogDiv: {
    width: 300,
    height: 170,
    backgroundColor: "#F0F0F0",
    alignSelf: "center",
    borderRadius: 10,
    gap: 10,
    position:"absolute",
    bottom:50
  },
  blogCall: {
    width: 280,
    height: 40,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  blogImage: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    gap: 10,
    width: 280,
    height: 70,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
  },
  positionMap:{
    position:"absolute"
  }
});
