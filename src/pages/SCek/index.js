import { StyleSheet, Text, Dimensions, View, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { colors, fonts } from '../../utils';


export default function Evaluasi1({ navigation }) {

    const lebarDevice = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const [soal, setSoal] = useState([
        { 'pertanyaan': 'Apakah ada gejala Garuk - Garuk ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Luka ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Penebalan Kulit ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Keropeng ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Bulu Rontok ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Nafsu Makan Berkurang ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Kotoran Lembek ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Kotoran Campur Darah ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Terdapat Cacing Pada Kotoran ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Kotoran Campur Lendir ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Kotoran Berbau ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Tidak Mau Makan ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Lemah ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Muntah ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Muntahan Bau Menyengat ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Kotoran Bau Menyengat ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Bolak Balik Ke Litter Cat ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Rembesan Urine di Litter Cat Bercampur Darah ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Terlihat Kesakitan ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Urine Tidak Mau Keluar ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Bersin - Bersin ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Banyak Kotoran Mata ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },
        { 'pertanyaan': 'Apakah ada gejala Mata Menutup Sebelah atau Keduanya ?', 'a': 'YA', 'b': 'TIDAK', 'betul': 'a' },



    ]);

    const [jawaban, setJawaban] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0,
    });

    const [pilih, setPilih] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0,
    });

    const MySoal = ({ no, tanya, a, b, c, d, jawab }) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 12
                    }}>{no}. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 12
                    }}>{tanya}</Text>

                </View>

                <View style={{ marginVertical: 5, flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'a' ? 1 : 0
                        })

                        setPilih({
                            ...pilih,
                            [no]: a
                        })
                    }} style={pilih[no] == a ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == a ? styles.txtOK : styles.txt}>{a}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'b' ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: b
                        })
                    }} style={pilih[no] == b ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == b ? styles.txtOK : styles.txt}>{b}</Text>
                    </TouchableOpacity>

                </View>
            </View >

        )
    }

    return (
        <SafeAreaView style={{
            padding: 10,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>


                {soal.map((item, index) => {
                    return (
                        <MySoal no={index + 1} tanya={item.pertanyaan} jawab={item.betul} a={item.a} b={item.b} c={item.c} d={item.d} img={item.image} />
                    )
                })}


                <TouchableOpacity onPress={() => {

                    // navigation.navigate('SHasil', {
                    //     jawaban: jawaban
                    // })
                    console.log(jawaban);

                    if (jawaban[1] == 1 && jawaban[2] == 1 && jawaban[3] == 1 && jawaban[4] == 1 && jawaban[5] == 1 && jawaban[6] == 1) {
                        console.log('S01');
                        navigation.navigate('SHasil', {
                            kode: 'S01'
                        })
                    } else if (jawaban[6] == 1 && jawaban[7] == 1 && jawaban[8] == 1 && jawaban[9] == 1) {
                        console.log('S02');
                        navigation.navigate('SHasil', {
                            kode: 'S02'
                        })
                    } else if (jawaban[6] == 1 && jawaban[7] == 1 && jawaban[10] == 1 && jawaban[11] == 1) {
                        console.log('S03');
                        navigation.navigate('SHasil', {
                            kode: 'S03'
                        })
                    } else if (jawaban[7] == 1 && jawaban[12] == 1 && jawaban[13] == 1 && jawaban[14] == 1 && jawaban[15] == 1 && jawaban[16] == 1) {
                        console.log('S04');
                        navigation.navigate('SHasil', {
                            kode: 'S04'
                        })
                    } else if (jawaban[12] == 1 && jawaban[13] == 1 && jawaban[14] == 1 && jawaban[17] == 1 && jawaban[18] == 1 && jawaban[19] == 1 && jawaban[20] == 1) {
                        console.log('S05');
                        navigation.navigate('SHasil', {
                            kode: 'S05'
                        })
                    }
                    else if (jawaban[21] == 1 && jawaban[22] == 1 && jawaban[23] == 1) {
                        console.log('S06');
                        navigation.navigate('SHasil', {
                            kode: 'S06'
                        })
                    }



                }} style={{
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.secondary,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.white,
                        fontSize: 15
                    }}>Lihat Hasil Analisa</Text>
                </TouchableOpacity>

            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bulat: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: colors.white,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        // borderColor: colors.primary
    },
    cek: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: colors.primary,
        backgroundColor: colors.primary
    },
    txt: {
        fontFamily: fonts.secondary[400],
        color: colors.black,
        fontSize: 12
    },
    txtOK: {
        fontFamily: fonts.secondary[600],
        color: colors.white,
        fontSize: 12
    }
})