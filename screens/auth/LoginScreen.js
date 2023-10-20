import React, { useState, useEffect, useRef } from "react";
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
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
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
                paddingBottom: isKeyboardShown ? 30 : 133,
                width: dimensions,
              }}
            >
              <Text style={styles.title}>Sign in</Text>
              <View style={styles.inputBlock}>
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
                <Text style={styles.buttonText}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.loginText}>
                  No account?
                  <Text> Sign Up</Text>
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
    paddingTop: 32,
    paddingBottom: 133,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
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
