import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { startTransition } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Detail() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "90%",
        height: "100%",
        alignSelf: "center",
      }}
    >
      <Pressable style={styles.backbutton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>

      <View>
        <Text style={styles.heading}>Marketing</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>by </Text>
          <Text style={{ fontWeight: "600" }}>Jack Mi</Text>
        </View>

        <View style={styles.icon}>
          <View style={styles.k}>
            <Ionicons name="people-sharp" size={20} color="brown" />
            <Text style={{ fontWeight: "bold" }}>11k</Text>
          </View>
          <View style={styles.star}>
            <Entypo name="star" size={20} color="brown" />
            <Text style={{ fontWeight: "bold" }}>4.8</Text>
          </View>
        </View>

        <View style={styles.hours}>
          <MaterialIcons name="access-time" size={20} color="brown" />
          <Text>2 hours 30 minutes</Text>
        </View>

        <View style={styles.course}>
          <Text style={styles.coursetext}>Course Content</Text>
          <Text style={styles.see}> see all</Text>
        </View>

        <View style={styles.intro}>
          <Pressable style={styles.innerintro}>
            <AntDesign name="play" size={40} color="brown" />

            <Text style={styles.innertext}>01.Introduction</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.time}>03:53</Text>
          </Pressable>
        </View>

        <View style={styles.intro}>
          <Pressable style={styles.innerintro}>
            <AntDesign name="play" size={40} color="brown" />

            <Text style={styles.innertext}>02.What's Investing</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.time}>08:13</Text>
          </Pressable>
        </View>
        <View style={styles.intro}>
          <Pressable style={styles.innerintro}>
            <AntDesign name="play" size={40} color="brown" />

            <Text style={styles.innertext}>03.Fundamentals</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.time}>15:23</Text>
          </Pressable>
        </View>
        <View style={styles.intro}>
          <Pressable style={styles.innerintro}>
            <AntDesign name="play" size={40} color="brown" />

            <Text style={styles.innertext}>04.Lesson</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.time}>20:33</Text>
          </Pressable>
        </View>
        <Pressable style={styles.lastbutton}>
          <Text style={styles.get}>Get the course</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backbutton: {
    marginTop: 40,
  },
  heading: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 20,
  },
  icon: {
    flexDirection: "row",
    marginTop: 20,
    gap: 40,
  },
  k: {
    flexDirection: "row",
    gap: 3,
  },

  star: {
    flexDirection: "row",
    gap: 3,
  },
  hours: {
    flexDirection: "row",
    marginTop: 20,
    gap: 5,
  },
  course: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
  },
  coursetext: {
    fontSize: 23,
    fontWeight: "bold",
  },
  see: {
    fontWeight: "bold",
    marginTop: 5,
  },
  intro: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    width: "100%",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: "#fff",
  },
  innerintro: {
    marginLeft: 10,
    flexDirection: "row",
    gap: 10,
  },
  innertext: {
    fontSize: 15,
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  time: {
    fontSize: 15,
    textAlignVertical: "center",
    fontWeight: "bold",
    marginRight: 15,
  },
  lastbutton: {
    marginTop: 60,
    width: "100%",
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "brown",
    justifyContent: "center",
  },
  get: {
    color: "#fff",
    textAlign: "center",
  },
});
