import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
export const Location = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
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
      <TouchableOpacity
        style={styles.buttonLocation}
        onPress={() => navigation.navigate("TrackOrder")}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
          Set Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLocation: {
    flex: 1,
  },
  ellipse: {
    alignSelf: "center",
    marginTop: 110,
  },
  divShipping: {
    height: 180,
    width: 320,
    backgroundColor: "#fff",
    flexDirection: "column",
    marginTop: 120,
    borderRadius: 10,
    alignSelf: "center",
  },
  divAddress: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingTop: 5,
  },
  divImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B50F6",
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  buttonLocation: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 250,
    backgroundColor: "#6B50F6",
    marginTop: 25,
    borderRadius: 10,
    position:"absolute",
    bottom:25
  },
  formSearch: {
    flexDirection: "row",
    paddingTop: 30,
    alignSelf: "center",
    marginTop: 10,
  },
  inputText: {
    height: 50,
    width: 190,
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 55,
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
