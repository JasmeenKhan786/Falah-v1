import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PdfReader from 'rn-pdf-reader-js';
import firebase from 'firebase';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import db from '../config';
export default class AllNotesDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      surahName: '',
      notes: [],
      modalVisible: false,
      doc: '', 
    };
  }
  getData = async () => {
    this.setState({ notes: [] });
    var surahName = this.props.navigation.getParam('surahName');
    this.setState({ surahName: surahName });

    var response = await db
      .collection('notes')
      .where('surahName', '==', surahName)
      .get();
    response.docs.map((d) => {
      var note = this.state.notes;
      note.push(d.data());
      this.setState({ notes: note });
    });
  };
  componentDidMount = () => {
    this.getData();
  };

  render() {
    //DDE7ED
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <View
          style={{
            marginTop: 36,
            flexDirection: 'row',
            marginHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={24} color="#1B5E61" />
          </TouchableOpacity>
          <Text
            style={{
              color: '#1B5E61',
              fontSize: 20,
              fontWeight: 'bold', 
            }}>
            {this.state.surahName}
          </Text>
          <AntDesign name="user" size={0} color="black" />
        </View>

        <View style={{ flex: 1 }}>
          {this.state.notes.length != 0 ? (
            <ScrollView>
              {this.state.notes.map((data,index) => {
                return (
                  <View
                  key={index}
                    style={{
                      backgroundColor: '#1B5E61',
                      paddingBottom:20,
                      width: '90%',
                      marginVertical: 15,
                      padding: 7,
                      alignSelf: 'center',
                      alignItems:'center',
                      elevation: 10,
                      borderRadius: 10,
                      paddingLeft: 10,
                      flexDirection: 'row',
                    }}>
                    <Ionicons
                      name="document-text-outline"
                      size={24}
                      color="white"
                    />
                    <View style={{width:'70%', paddingLeft:10}}>
                     <Text style={{ color: 'white' , fontSize:18, fontWeight:'600'}}>
                        {'By: ' + data.name}
                      </Text>
                      <Text style={{ color: 'white' }}>

                        {data.surahName === 'Other'? data.title :data.surahName}
                      </Text>
                      <Text style={{ color: 'white' }}>
                        {'Para: '+data.paraNumber + "   "+data.ayatNumber}
                      </Text>
                     
                    </View>
                    <View>
                      <Text
                        style={{ color: '#1B5E61', backgroundColor:'white', padding:7, borderRadius:10 }}
                        onPress={() => {
                          this.setState({
                            doc: data.docLink,
                            modalVisible: true,
                          });
                        }}>
                        {'Open'}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  color: '#1B5E61',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                No notes present currently
              </Text>
            </View>
          )}
        </View>

        <Modal visible={this.state.modalVisible}>
          <View style={{ flex: 1, marginTop: 15 }}>
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => {
                this.setState({ modalVisible: false });
              }}>
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
      </View>
    );
  }
}
