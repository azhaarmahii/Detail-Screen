import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const hanldeNext = () => {
    if (email.trim() === "") {
      Alert.alert("Please enter your email");
    }
    if (password.length < 8) {
      Alert.alert("Please enter your password");
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
      <Button title="Check out" onPress={hanldeNext} disabled={true} />
      <Text>Link</Text>
    </SafeAreaView>
  );
}
