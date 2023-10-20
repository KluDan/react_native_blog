import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import CustomInput from "../../CustomInput";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegisterScreen({ navigation }) {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
      console.log("width", width);
    };

    const dimensionsListener = Dimensions.addEventListener("change", onChange);
    return () => {
      dimensionsListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onTextChange = (inputName, value) => {
    setState((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log(state);
    setState(initialState);
    keyboardHide();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/photo_bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "margin"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isKeyboardShown ? 0 : 72,
                marginBottom: isKeyboardShown ? -100 : 0,
                width: dimensions,
              }}
            >
              <View style={styles.userPhotoBlock}></View>
              <Text style={styles.title}>Registration</Text>
              <View style={styles.inputBlock}>
                <CustomInput
                  placeholder="Login"
                  value={state.login}
                  onTextChange={(value) => onTextChange("login", value)}
                  setIsKeyboardShown={setIsKeyboardShown}
                />
                <CustomInput
                  placeholder="Email"
                  value={state.email}
                  setIsKeyboardShown={setIsKeyboardShown}
                  onTextChange={(value) => onTextChange("email", value)}
                />
                <CustomInput
                  placeholder="Password"
                  secure={true}
                  value={state.password}
                  setIsKeyboardShown={setIsKeyboardShown}
                  onTextChange={(value) => onTextChange("password", value)}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleFormSubmit}
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginText}>
                  Already have an account?
                  <Text> Log In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    position: "relative",
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
  inputBlock: {
    gap: 16,
    marginBottom: 43,
  },
  input: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
  button: {
    backgroundColor: "#FF6C00",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  loginText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    textAlign: "center",
  },
});
