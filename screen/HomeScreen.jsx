import { Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const hanldeNext = () => {
    if (email.trim() === "") {
      Toast.show({
        type: "info",
        text1: "Hello",
        text2: "Please Enter you email",
      });
    }
    if (password.length < 8) {
      Toast.show({
        type: "error",
        text1: "Hello",
        text2: "Please Enter 8 digits password",
      });
    } else {
      setEmail("");
      setPassowrd("");
      navigation.navigate("Detail");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <TextInput
        placeholder="Enter Email"
        style={{
          borderWidth: 1,
          height: 50,
          width: "90%",
          alignSelf: "center",
          paddingLeft: 10,
          borderRadius: 12,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate("Detail")}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter Password"
        style={{
          borderWidth: 1,
          height: 50,
          width: "90%",
          alignSelf: "center",
          paddingLeft: 10,
          borderRadius: 12,
          marginBottom: 50,
        }}
        secureTextEntry
        value={password}
        onChangeText={setPassowrd}
      />
      <Button title="Check out" onPress={hanldeNext} />
      <Text>Link</Text>
      <Toast position="bottom" />
    </SafeAreaView>
  );
}
