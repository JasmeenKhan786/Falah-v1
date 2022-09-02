import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  ToastAndroid,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";
import * as DocumentPicker from "expo-document-picker";
import PdfReader from "rn-pdf-reader-js";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import db from "../config";
import surah from "../surahs";
import para from "../paras";
import { MaterialIcons } from "@expo/vector-icons";
export default class MyNotes extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      surahName: "",
      paraNumber: "",
      ayatNumber: "",
      doc: "",
      uploading: false,
      userId: firebase.auth().currentUser.email,
      title: "",
      notes: [],
      name: "",
      modalVisible1: false,
      search: "",
    };
  }
  getData = async () => {
    this.setState({ notes: [] });
    var response = await db
      .collection("notes")
      .where("email", "==", firebase.auth().currentUser.email)
      .get();
    response.docs.map((d) => {
      var note = this.state.notes;
      var n = d.data();
      n["id"] = d.id;
      note.push(n);
      this.setState({ notes: note });
    });
  };

  getName = async () => {
    var response = await db
      .collection("profiles")
      .where("email", "==", firebase.auth().currentUser.email)
      .get();
    response.docs.map((d) => {
      this.setState({ name: d.data().account });
    });
  };
  componentDidMount = () => {
    this.getName();
    this.getData();
    this.setState({ doc: "" });
  };
  updateDatabase = async () => {
    if (this.state.name === "") {
      alert("Please Complete Your Profile Before Adding Any Notes!");
      return;
    }
    if (this.state.surahName && this.state.paraNumber && this.state.doc) {
      await db.collection("notes").add({
        email: this.state.userId,
        surahName: this.state.surahName,
        paraNumber: this.state.paraNumber,
        ayatNumber: this.state.ayatNumber,
        docLink: this.state.doc,
        title: this.state.title,
        name: this.state.name,
      });
      ToastAndroid.show("Uploaded Successfully!", ToastAndroid.SHORT);
      this.setState({
        modalVisible: false,
        doc: "",
        uploading: false,
        paraNumber: "",
        ayatNumber: "",
        title: "",
        surahName: "",
      });
      this.getData();
    } else {
      alert("Please fill all the details");
    }
  };
  selectPicture = async () => {
    this.setState({ uploading: true });
    const { size, name, type, uri } = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: false,
    });

    if (type === "success") {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child(
        "notes/" +
          this.state.surahName +
          "/" +
          this.state.ayatNumber +
          "/" +
          this.state.userId
      );

    return ref
      .put(blob, {
        contentType: "application/pdf",
      })
      .then((response) => {
        this.fetchImage(imageName);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  deleteNote = async (id) => {
    firebase
      .firestore()
      .collection("notes")
      .doc(id)
      .delete()
      .then(() => {
        ToastAndroid.show("Note Deleted Successfully!", ToastAndroid.SHORT);
        this.getData();
      })
      .catch((error) => {
        ToastAndroid.show(
          "Something Went Wrong! Try Again Later.",
          ToastAndroid.SHORT
        );
      });
  };
  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child(
        "notes/" +
          this.state.surahName +
          "/" +
          this.state.ayatNumber +
          "/" +
          this.state.userId
      );

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ doc: url });
      })
      .catch((error) => {
        alert("No Files uploaded yet for this user!");
        this.setState({ doc: "#" });
      });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#DDE7ED" }}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/notesbg.png")}
        >
          <View
            style={{
              marginTop: 36,
              flexDirection: "row",
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <AntDesign name="home" size={24} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginLeft: "30%",
                fontWeight: "bold",
              }}
            >
              Your Notes
            </Text>
          </View>

          <View
            style={{
              width: "80%",
              height: 40,
              marginTop: 30,
              borderRadius: 20,
              flexDirection: "row",
              backgroundColor: "white",
              alignSelf: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <TextInput
              style={{ width: "90%", height: 40, paddingLeft: 10 }}
              placeholder="Search"
              value={this.state.search}
              onChangeText={(txt) => {
                alert("Work In Progress");
                this.setState({ search: "" });
              }}
            />
            <Feather name="search" size={20} color="grey" />
          </View>

          <View style={{ flex: 1 }}>
            {this.state.notes.length != 0 ? (
              <ScrollView>
                {this.state.notes.map((data, index) => {
                  return (
                    <View
                      key={data.id}
                      style={{
                        backgroundColor: "white",
                        borderLeftWidth:8,
                        borderColor:'#1B5E61',
                        width: "90%",
                        marginVertical: 15,
                        padding: 7,
                        alignSelf: "center",
                        alignItems: "center",
                        elevation: 10,
                        borderRadius: 10,
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <View style={{ width: "70%" }}>
                        <Text
                          style={{
                            color: "#1B5E61",
                            fontSize: 18,
                            fontWeight: "600",
                          }}
                        >
                          {data.surahName === "Other"
                            ? data.title
                            : data.surahName}
                        </Text>
                        <Text style={{ color: "#1B5E61" }}>
                          {"Para: " + data.paraNumber + "   " + data.ayatNumber}
                        </Text>
                        <Text style={{ color: "#1B5E61" }}>
                          {"By: " + data.name}
                        </Text>
                      </View>

                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: "#1B5E61",
                          flexDirection: "row",
                          alignItems: "center",
                          borderRadius: 10,
                         
                        }}
                      >
                        <View style={{backgroundColor:'#1B5E61', height:40,borderRadius:5}}>
                          <Text
                            style={{
                              color: "white",
                              padding: 7,
                            }}
                            onPress={() => {
                              this.setState({
                                doc: data.docLink,
                                modalVisible1: true,
                              });
                            }}
                          >
                            {"Open"}
                          </Text>
                        </View>
                        <TouchableOpacity style={{ padding: 7 }} onPress={()=>{
                          this.deleteNote(data.id)
                        }}>
                          <MaterialIcons
                            name="delete"
                            size={24}
                            color="#1B5E61"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Your notes will appear here
                </Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={{
              zIndex: 2,
              position: "absolute",
              bottom: 20,
              backgroundColor: "#1B5E61",
              width: 50,
              height: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              elevation: 30,
            }}
            onPress={() => {
              this.setState({ modalVisible: true });
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <KeyboardAvoidingView enabled keyboardVerticalOffset={30}>
              <View
                style={{
                  backgroundColor: "white",
                  width: "90%",
                  height: "70%",
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
                    alignItems: "flex-end",
                  }}
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <Entypo name="cross" size={24} color="#1B5E61" />
                </TouchableOpacity>

                <SelectDropdown
                  data={surah}
                  onSelect={(selectedItem, index) => {
                    this.setState({ surahName: selectedItem.value });
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.value;
                  }}
                  rowTextForSelection={(selectedItem, index) => {
                    return selectedItem.value;
                  }}
                  defaultButtonText="Surah Name"
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 14,
                    color: "grey",
                  }}
                  buttonStyle={{
                    width: "80%",
                    height: 30,
                    alignSelf: "center",
                    marginTop: 20,
                    backgroundColor: "#eee",
                    borderRadius: 5,
                  }}
                />

                <SelectDropdown
                  data={para}
                  onSelect={(selectedItem, index) => {
                    this.setState({ paraNumber: selectedItem.value });
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.value;
                  }}
                  rowTextForSelection={(selectedItem, index) => {
                    return selectedItem.value;
                  }}
                  defaultButtonText="Para Number"
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 14,
                    color: "grey",
                  }}
                  buttonStyle={{
                    width: "80%",
                    height: 30,
                    alignSelf: "center",
                    marginTop: 20,
                    backgroundColor: "#eee",
                    borderRadius: 5,
                  }}
                />
                <TextInput
                  style={{
                    width: "80%",
                    height: 30,
                    paddingLeft: 15,
                    backgroundColor: "#eee",
                    borderRadius: 5,
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                  placeholderTextColor="grey"
                  placeholder="Ayat Number (e.g. 1-20) (Optional)"
                  onChangeText={(text) => {
                    this.setState({ ayatNumber: text });
                  }}
                />

                <TextInput
                  style={{
                    width: "80%",
                    height: 30,
                    paddingLeft: 15,
                    backgroundColor: "#eee",
                    borderRadius: 5,
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                  placeholderTextColor="grey"
                  placeholder="Title in case of 'Others' (Optional)"
                  onChangeText={(text) => {
                    this.setState({ title: text });
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    width: "80%",
                    height: 30,
                    paddingLeft: 15,
                    marginTop: 20,
                    alignSelf: "center",
                  }}
                >
                  <Text>Upload Document PDF</Text>
                  <TouchableOpacity
                    style={{
                      marginLeft: 5,
                    }}
                    onPress={() => {
                      this.selectPicture();
                    }}
                  >
                    {this.state.uploading === true ? (
                      this.state.doc ? (
                        <Feather
                          name="check-circle"
                          size={24}
                          color="#1B5E61"
                        />
                      ) : (
                        <ActivityIndicator color="#1B5E61" size="small" />
                      )
                    ) : (
                      <Feather name="upload" size={24} color="#1B5E61" />
                    )}
                  </TouchableOpacity>
                </View>

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
                    this.updateDatabase();
                  }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    Bismillah
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </Modal>

          <Modal visible={this.state.modalVisible1}>
            <View style={{ flex: 1, marginTop: 15 }}>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => {
                  this.setState({ modalVisible1: false });
                }}
              >
                <Entypo name="cross" size={30} color="#1B5E61" />
              </TouchableOpacity>
              {this.state.doc ? (
                <PdfReader
                  source={{
                    uri: this.state.doc,
                  }}
                />
              ) : (
                <Text>The document does not exist</Text>
              )}
            </View>
          </Modal>
        </ImageBackground>
      </View>
    );
  }
}
