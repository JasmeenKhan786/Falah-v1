import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'#DDE7ED' }}>
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            marginHorizontal: 10,
            justifyContent: "space-between",

          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <Ionicons name="home" size={24} color="#1B5E61" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#1B5E61",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            About Us
          </Text>
          <AntDesign name="user" size={0} color="black" />
        </View>

        <View style={{marginHorizontal:20, alignSelf:'center',  marginTop:'20%', width:'90%', backgroundColor:'#0bab64', borderRadius:20, padding:20}}>
          <Text style={{fontSize:20, textAlign:'center'}}>Assalamualaikum Warahmatullahi Wabarakatuhu</Text>

          <Text style={{fontSize:16, textAlign:'center', marginTop:30}}>
            This is Jasmeen Khan. I have created this app to help students of
            Dars-e-Quran, share their knowledge with one another. I was inspired
            to create this app by my sister Nazneen. I want to make a difference
            and try to contribute towards the path of Allah, this app is just a starter.
          </Text>
          <Text style={{fontSize:16, textAlign:'center', marginTop:20}}>
            I am planning to create more such app which will bring people closer
            to Islam. Please feel free to give your valuable feedback.
          </Text>
          <Text style={{fontSize:15, textAlign:'center', marginTop:20, fontWeight:'bold'}}>{"Reach out to me at \n jasmeen7866@gmail.com "}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
