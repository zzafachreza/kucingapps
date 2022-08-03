import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  // const [play, setPlay] = useState(false);


  useEffect(() => {


    getData('user').then(res => {
      setUser(res);
    })
  }
    , []);




  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.secondary,
    }}>

      <View style={{
        height: windowHeight / 5,
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 20,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: windowWidth / 25,
          color: colors.white
        }}>Selamat datang, {user.username}</Text>

        <View style={{
          flexDirection: 'row'
        }}>

          <View style={{
            flex: 2
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 10,
              color: colors.white
            }}>Cat Health</Text>

          </View>
          <View style={{
            // flex: 1
          }}>
            <Image source={require('../../assets/logo_white.png')} style={{ width: 50, height: 50 }} />
          </View>

        </View>

      </View>



      <View style={{
        marginTop: -50,
        padding: 10,
        height: 200,

      }}>
        <Image source={require('../../assets/slide.png')} style={{ width: '100%', height: 200, borderRadius: 10, }} />
      </View>
      <View style={{
        flex: 1,
        backgroundColor: colors.secondary,
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>

        <TouchableOpacity onPress={() => navigation.navigate('SCek')} style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          overflow: 'hidden',
          margin: 10,
          flexDirection: 'row'
        }}>
          <Image source={require('../../assets/A1.png')} style={{
            width: 100,
            height: 100,

          }} />
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{

              fontFamily: fonts.secondary[600],
              color: colors.white,
              textAlign: 'center',
              fontSize: windowWidth / 15,
            }}>Mulai Analisis</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SPenyakit')} style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          overflow: 'hidden',
          margin: 10,
          flexDirection: 'row'
        }}>
          <Image source={require('../../assets/A2.png')} style={{
            width: 100,
            height: 100,

          }} />
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{

              fontFamily: fonts.secondary[600],
              color: colors.white,
              textAlign: 'center',
              fontSize: windowWidth / 15,
            }}>Index Penyakit</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('STentang')} style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          overflow: 'hidden',
          margin: 10,
          flexDirection: 'row'
        }}>
          <Image source={require('../../assets/A3.png')} style={{
            width: 100,
            height: 100,

          }} />
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{

              fontFamily: fonts.secondary[600],
              color: colors.white,
              textAlign: 'center',
              fontSize: windowWidth / 15,
            }}>Tentang</Text>
          </View>
        </TouchableOpacity>



      </View>


      <TouchableOpacity onPress={() => {
        storeData('user', null);

        navigation.replace('Login');
      }} style={{

        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Icon type="ionicon" name="log-out-outline" color={colors.white} />
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 20,
          left: 10,
          color: colors.white
        }}>Keluar</Text>
      </TouchableOpacity>


    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600],
    fontSize: windowWidth / 35
  },
  item: {
    fontFamily: fonts.secondary[400],
    fontSize: windowWidth / 35
  }
})