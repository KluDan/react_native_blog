import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome5, EvilIcons, Feather } from "@expo/vector-icons";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

/* import * as Location from "expo-location"; */

const CreateScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState("");
  const openCameraLib = async () => {
    try {
      const result = await launchCamera({ mediaType: "photo" }); // Specify the mediaType
      if (result && result.assets && result.assets[0]) {
        setPhoto(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Camera launch error:", error);
    }
  };

  const sendPhoto = () => {
    navigation.navigate("Posts", { photo });
  };
  return (
    <View style={styles.container}>
      <View style={styles.photoBlock}>
        <TouchableOpacity style={styles.makePhotoBtn} onPress={openCameraLib}>
          <FontAwesome5 name="camera" size={24} color={"#BDBDBD"} />
        </TouchableOpacity>
      </View>
      <Image style={styles.img} resizeMode="contain" source={{ uri: photo }} />
      <Text style={styles.textUpload}>Upload the photo</Text>
      <TextInput
        style={styles.descriptionInput}
        placeholder="Title..."
        placeholderTextColor="#BDBDBD"
      />
      <View style={styles.locationInputBlock}>
        <EvilIcons
          style={styles.locationIcon}
          name="location"
          size={24}
          color={"#BDBDBD"}
        />
        <TextInput
          style={styles.locationInput}
          placeholder="Location..."
          placeholderTextColor="#BDBDBD"
        />
      </View>
      <TouchableOpacity style={styles.publishBtn}>
        <Text style={styles.publishBtnText}>Publish</Text>
      </TouchableOpacity>
      <View style={styles.deleteBtnContainer}>
        <TouchableOpacity style={styles.deleteBtn}>
          <Feather name="trash-2" size={24} color={"#BDBDBD"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    height: "100vh",
  },
  img: {
    width: "100%",
    height: 300,
    alignSelf: "center",
  },
  photoBlock: {
    height: 240,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  makePhotoBtn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textUpload: {
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 32,
  },
  descriptionInput: {
    paddingVertical: 16,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
    marginBottom: 16,
  },
  locationInputBlock: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
    marginBottom: 32,
  },
  locationInput: {
    paddingVertical: 16,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  locationIcon: {
    marginRight: 4,
    height: 24,
  },
  publishBtn: {
    padding: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#f6f6f6",
    marginBottom: "auto",
  },
  publishBtnText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  deleteBtnContainer: { alignItems: "center", marginBottom: 22 },
  deleteBtn: {
    padding: 8,
    paddingHorizontal: 23,
    borderRadius: 20,
    width: 70,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },

  camera: {},
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#fff",

    backgroundColor: "black",
  },
});

export default CreateScreen;
/* <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.photoContainer}>
            <Image source={{ uri: photo }} />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto}>
          <Text style={{ color: "blue" }}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity onPress={sendPhoto}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View> */
