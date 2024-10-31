import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

import { WebView } from "react-native-webview";

export default function webView() {
  return (
    <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
