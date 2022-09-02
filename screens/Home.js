import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ToastAndroid,
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";

const uri =
  "data:image/png;base64,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";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      email: firebase.auth().currentUser.email,
      feedback: "",
    };
  }
  addFeedback = () => {
    if (this.state.feedback.length >= 4) {
      var sheet = "Feedback";
      var data = this.state.email + "," + this.state.feedback;
      var requestOptions = {
        method: "POST",
        redirect: "follow",
      };

      fetch(
        "https://script.google.com/macros/s/AKfycbxHAgDH1i1OXbgMlALtQ-Gslu78S9LX3fm8_cMOjns-Qsh6FIoUBc0wy6HQkWYf7ppA6g/exec?path=" +
          sheet +
          "&data=" +
          data,
        requestOptions
      )
        .then((response) => {
          ToastAndroid.show("Jazakallah Khair for the Feedback!", ToastAndroid.SHORT);
          this.setState({ modalVisible: false, feedback: "" });
        })
        .catch((error) => {});
    } else {
      alert("Feedback should atleast be 4 characters long!");
    }
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        
        <View
          style={{
            marginTop: 36,
            flexDirection: "row",
            marginHorizontal: 20,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor:'white',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <FontAwesome5 name="quran" size={30} color="#1B5E61" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#1B5E61",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Falah
          </Text>
          <Image
            source={{
              uri: uri,
            }}
            style={{ width: 40, height: 40, borderRadius: 25 }}
          />
        </View>

        <LinearGradient
                colors={["#233329", "#63d471"]}
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  marginVertical:5
                }}
              >
        <Image
          source={require("../assets/q1.png")}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginVertical: 20,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 10,
            height: "49%",
            width: "90%",
            alignSelf: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <TouchableOpacity
              style={{
                width: "100%",
                height: "70%",
                borderRadius: 20,
              }}
              onPress={() => {
                this.props.navigation.navigate("AllNotes");
              }}
            >
              <LinearGradient
                colors={["#d387ab", "#e899dc"]}
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                }}
              >
                <Image
                  source={require("../assets/1.png")}
                  style={{ width: 100, height: 150, marginLeft: 10 }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: 20,
                    left: 10,
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Everyone's Notes
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "pink",
                marginTop: 10,
                borderRadius: 20,
                height: "30%",
              }}
              onPress={() => {
                this.props.navigation.navigate("AboutUs");
              }}
            >
              <LinearGradient
                colors={["#f9d976", "#f39f86"]}
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                }}
              >
                <Image
                  source={require("../assets/5.png")}
                  style={{
                    width: 50,
                    height: 90,
                    position: "absolute",
                    right: 20,
                    marginTop: 5,
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: 20,
                    left: 10,
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  About Us
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ width: "50%", marginLeft: 10 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "hotpink",
                borderRadius: 20,
                height: "40%",
              }}
              onPress={() => {
                this.props.navigation.navigate("Profile");
              }}
            >
              <LinearGradient
                colors={["#fb8085", "#f9c1b1"]}
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                }}
              >
                <Image
                  source={require("../assets/4.png")}
                  style={{
                    width: 80,
                    height: 120,
                    position: "absolute",
                    right: 20,
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: 20,
                    left: 10,
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Profile
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "pink",
                height: "60%",
                borderRadius: 20,
                marginTop: 10,
              }}
              onPress={() => {
                this.props.navigation.navigate("MyNotes");
              }}
            >
              <LinearGradient
                colors={["#9f98e8", "#aff6cf"]}
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                }}
              >
                <Image
                  source={require("../assets/2.png")}
                  style={{ width: 150, height: 150, alignSelf: "center" }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: 20,
                    left: 10,
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Upload Notes
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            marginHorizontal: 20,
            height: 110,
            marginTop: 30,
            alignSelf: "center",
            borderRadius: 20,
          }}
        >
          <LinearGradient
            colors={["#03c8a8", "#89d8d3"]}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: 20,
            }}
          >
            <Text style={{ textAlign: "center", padding: 7 }}>
              We are working towards giving you the best services. Please feel
              free to fill this 30 min form to help us improve.
            </Text>
            <TouchableOpacity
              style={{
                width: 90,
                height: 30,
                backgroundColor: "gold",
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              onPress={()=>{
                this.setState({feedback:'', modalVisible:true})
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#39696C",
                }}
              >
                Feedback
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "90%",
              height: "40%",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: "30%",
              elevation: 15,
            }}
          >
            <TouchableOpacity
                  style={{
                    marginTop: 20,
                    marginHorizontal: 10,
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({ modalVisible: false, feedback:'' });
                  }}>
                  <Entypo name="cross" size={24} color="#1B5E61" />
                </TouchableOpacity>

            <TextInput
              style={{
                width: "80%",
                height: 60,
                paddingLeft: 15,
                backgroundColor: "#eee",
                borderRadius: 5,
                alignSelf: "center",
                marginTop: 20,
              }}
              placeholderTextColor="grey"
              placeholder="Feedback/Suggestions"
              numberOfLines={30}
              multiline={true}
              onChangeText={(text) => {
                this.setState({ feedback: text });
              }}
            />

            <TouchableOpacity
              style={{
                alignSelf: "center",
                justifyContent: "center",
                marginTop: 40,
                borderColor: "#1B5E61",
                borderWidth: 1,
                backgroundColor: "#1B5E61",
                borderRadius: 10,
                width: "50%",
                height: 40,
                padding: 6,
              }}
              onPress={() => {
                this.addFeedback();
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Jazakallah Khair
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        </LinearGradient>
      </View>
    );
  }
}
