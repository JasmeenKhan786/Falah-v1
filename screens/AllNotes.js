import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import surah from '../surahs';

export default class AllNotes extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#DDE7ED' }}>
        <View
          style={{ marginTop: 36, flexDirection: 'row', marginHorizontal: 20 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <AntDesign name="home" size={24} color="#1B5E61" />
          </TouchableOpacity>
          <Text
            style={{
              color: '#1B5E61',
              fontSize: 20,
              marginLeft: '30%',
              fontWeight: 'bold',
            }}>
            All Notes
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 15,
              color: '#1B5E61',
              fontWeight: 'bold',
              borderBottomWidth: 2,
              borderColor: '#1B5E61',
            }}>
            Surah
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 15,
              color: '#1B5E61',
              fontWeight: 'bold',
            }}>
            Para
          </Text>
        </View>

        <View
          style={{
            width: '80%',
            height: 40,
            marginTop: 30,
            borderRadius: 20,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            padding: 10,
          }}> 
          <TextInput
            style={{ width: '90%', height: 40, paddingLeft: 10 }}  
            placeholder="Search"
          />
          <Feather name="search" size={20} color="grey" />
        </View>

        <ScrollView>
          {surah.map((a, index) => {
            return (
              <TouchableOpacity
              key={a.label}
                style={{
                  elevation: 10,
                  backgroundColor: 'white',
                  width: '90%',
                  height: 70,
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginVertical: 10,
                  flexDirection:'row',
                  justifyContent:'space-around', 
                  alignItems:'center'
                }}
                onPress={()=>{
                  this.props.navigation.navigate('AllNotesDetails',{'surahName':a.value})
                }}>
                <Text style={{color: '#1B5E61'}}>{index}.</Text>
                <Text style={{ color: '#1B5E61', fontWeight:'bold', width:'60%'}} numberOfLines={1}>{a.value}</Text>
                <Text style={{ color: '#1B5E61' , fontWeight:'bold' }}>{a.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
