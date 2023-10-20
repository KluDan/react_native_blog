import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import {
  FontAwesome5,
  EvilIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/photo_bg.jpg")}
      >
        <View style={styles.profileBlock}>
          <View style={styles.userPhotoBlock}></View>
          <Text style={styles.title}>Natali Romanova</Text>
          <Feather
            style={styles.logoutIcon}
            name="log-out"
            size={24}
            color="#BDBDBD"
          />
          <View style={styles.postsBlock}>
            <View style={styles.postBlock}>
              <Image style={styles.postImage} />
              <Text style={styles.postTitle}>Forest</Text>
              <View style={styles.postInfo}>
                <View style={styles.postInfoLeft}>
                  <View style={styles.postInfoItem}>
                    <Feather
                      style={styles.postIcon}
                      name="message-circle"
                      size={24}
                      color={"#FF6C00"}
                      fill={"#FF6C00"}
                    />
                    <Text style={styles.quantity}>8</Text>
                  </View>
                  <View style={styles.postInfoItem}>
                    <Feather
                      style={styles.postIcon}
                      name="thumbs-up"
                      size={24}
                      color={"#FF6C00"}
                    />
                    <Text style={styles.quantity}>153</Text>
                  </View>
                </View>
                <View style={styles.postInfoItem}>
                  <EvilIcons
                    style={styles.postIcon}
                    name="location"
                    size={24}
                    color={"#FF6C00"}
                  />
                  <Text style={styles.quantity}>Ukraine</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  profileBlock: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    position: "relative",
    paddingBottom: 43,
    position: "absolute",
    top: 147,
    width: "100%",
    height: "100%",
  },
  userPhotoBlock: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignSelf: "center",
    position: "absolute",
    top: -60,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 92,
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
  },
  logoutIcon: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  postsBlock: {
    gap: 32,
  },
  postBlock: {
    overflow: "hidden",
    gap: 8,
    marginBottom: 32,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,

    backgroundColor: "black",
  },
  postTitle: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postInfoLeft: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
  },
  postInfoItem: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  postIcon: {
    height: 24,
  },
  postInfoItemText: {
    color: "#212121",
    fontSize: 16,
  },
});

/* import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      console.log("Фотография сделана:", photo);
      // Здесь вы можете обработать фото, например, сохранить его или отобразить на экране.
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => setCamera(ref)}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Переключить камеру
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity
        onPress={takePicture}
        style={{
          flex: 0.1,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
          Сделать фото
        </Text>
      </TouchableOpacity>
    </View>
  );
}
 */
