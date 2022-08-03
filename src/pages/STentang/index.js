import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { fonts, windowWidth } from '../../utils'

export default function STentang() {
    return (
        <View style={{
            flex: 1,

            paddingTop: 10,
            paddingHorizontal: windowWidth / 10
        }}>
            <ScrollView style={{
                flex: 1,

            }}>
                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    textAlign: 'justify'
                }}>Kucing adalah hewan yang dipelihara oleh kebanyakan orang. Penyakit pada kucing sering membuat pemilik merasa bingung karena kurangnya pengetahuan pemilik tentang penyakit hewan tersebut. Pada tubuh kucing terdapat antibody yang melindungi tubuh dari ancaman-ancaman penyakit, baik itu virus maupun bakteri dan jamur. Kondisi ini dapat menjadi representasi kesehatan kucing secara umum serta dapat dijadikan sebagai pertanda terhadap adanya suatu penyakit dalam tubuh kucing. Pemilik hewan peliharaan harus memperhatikan perubahan perilaku pada hewan kesayangan mereka untuk mengetahui apakah hewan kesayangannya dalam kondisi sehat atau tidak. Sebagian besar pemilik hewan peliharaan yang kurang berpengalaman tentang kesehatan hewan peliharaan mereka sehingga pemilik membutuhkan bantuan dokter hewan untuk mengatasi masalah kesehatan hewan peliharannya. Namun dokter hewan tidak selalu dapat membantu pemilik hewan kesayangan mengatasi masalah tersebut setiap waktu (Dewanti, 2017).
                </Text>

                <Text style={{
                    marginTop: 20,
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    textAlign: 'justify'
                }}>Berdasarkan penyebabnya, penyakit pada kucing bisa di sebabkan oleh beberapa hal di antaranya dari virus maupun bakteri dan jamur. Pada sistem ini hanya dapat mengidentifikasi beberapa macam penyakit umum yang sering terjadi pada kucing. Saat ini perkembangan Teknologi semakin berkembang dengan pesat. Terlihat dari sebagian besar aktivitas manusia membutuhkan teknologi dalam memenuhi kebutuhan sehari-hari. Kebutuhan manusia yang dapat dilakukan dengan sendiri pun sekarang telah dipenuhi oleh teknologi. Salah satunya adalah sistem pakar (Expert System).
                </Text>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({})