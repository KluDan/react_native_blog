import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export default CustomInput = ({
  placeholder,
  secure,
  setIsKeyboardShown,
  onTextChange,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setIsKeyboardShown(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputBlock, isFocused && styles.focusedInput]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        onFocus={handleFocus}
        onChangeText={onTextChange}
        value={value}
        secureTextEntry={secure && !showPassword}
        onBlur={handleBlur}
      />
      {secure && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text>{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 50,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
});
