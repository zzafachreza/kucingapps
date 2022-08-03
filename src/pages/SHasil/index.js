import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';

export default function SHasil({ navigation, route }) {
    const kode = route.params.kode;
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    useEffect(() => {
        getData('user').then(res => {
            setUser(res);
        });

        console.log('Kode', route.params.persen)

        axios.post(apiURL + 'solusi.php', {
            kode: route.params.kode
        }).then(resz => {
            // console.log(resz.data);
            setData(resz.data);
            setOpen(true)
        })

    }, [])
    return (
        <View style={{
            flex: 1,

        }}>
            <View style={{
                backgroundColor: colors.secondary,
                padding: 10,
            }}>
                <View style={{
                    flexDirection: "row",
                    marginVertical: 10,
                }}>
                    <View style={{
                        flex: 0.8,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>Nama Pemilik</Text>
                    </View>
                    <View style={{
                        flex: 0.1,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>:</Text>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>{user.username}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    marginVertical: 10,
                }}>
                    <View style={{
                        flex: 0.8,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>Nama Kucing</Text>
                    </View>
                    <View style={{
                        flex: 0.1,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>:</Text>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>{user.nama_kucing}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    marginVertical: 10,
                }}>
                    <View style={{
                        flex: 0.8,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>Tanggal Pemeriksaan</Text>
                    </View>
                    <View style={{
                        flex: 0.1,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>:</Text>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25,
                            color: colors.white
                        }}>{today}</Text>
                    </View>
                </View>
            </View>


            <ScrollView>
                {open && <>


                    {
                        data.map((i, index) => {
                            return (
                                <View key={i.id} style={{
                                    borderBottomWidth: 3,
                                    marginVertical: 5,
                                    borderBottomColor: colors.secondary
                                }}>
                                    <View style={{
                                        padding: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontFamily: fonts.secondary[600],
                                            fontSize: windowWidth / 25,
                                            backgroundColor: colors.primary,
                                            width: 290,
                                            paddingVertical: 10,
                                            borderRadius: 10,
                                            textAlign: 'center',
                                            color: colors.white
                                        }}>Hasil Analisia</Text>
                                        <Text style={{
                                            fontFamily: fonts.secondary[600],
                                            fontSize: windowWidth / 30,
                                            backgroundColor: colors.border,
                                            width: 280,
                                            paddingVertical: 20,
                                            borderBottomRightRadius: 10,
                                            borderBottomLeftRadius: 10,
                                            textAlign: 'center',
                                            color: colors.primary
                                        }}>{i.kode_rule} ( {route.params.persen[index]} )</Text>
                                    </View>


                                    <View style={{
                                        padding: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontFamily: fonts.secondary[600],
                                            fontSize: windowWidth / 25,
                                            backgroundColor: colors.primary,
                                            width: 290,
                                            paddingVertical: 10,
                                            borderRadius: 10,
                                            textAlign: 'center',
                                            color: colors.white
                                        }}>Solusi</Text>
                                        <View style={{

                                            backgroundColor: colors.border,
                                            width: 280,
                                            borderBottomRightRadius: 10,
                                            borderBottomLeftRadius: 10,
                                            padding: 10,

                                        }}>
                                            <View style={{
                                                flexDirection: 'row'
                                            }}>
                                                <Text style={{
                                                    fontFamily: fonts.secondary[600],
                                                    fontSize: windowWidth / 30,
                                                    color: colors.primary,
                                                    marginVertical: 10,
                                                    marginRight: 10,
                                                }}>a. </Text>
                                                <Text style={{
                                                    flex: 1,
                                                    fontFamily: fonts.secondary[600],
                                                    fontSize: windowWidth / 30,
                                                    color: colors.primary,
                                                    marginVertical: 10,
                                                }}>{i.a}</Text>
                                            </View>
                                            {i.b.length > 0 &&
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <Text style={{
                                                        fontFamily: fonts.secondary[600],
                                                        fontSize: windowWidth / 30,
                                                        color: colors.primary,
                                                        marginVertical: 10,
                                                        marginRight: 10,
                                                    }}>b. </Text>
                                                    <Text style={{
                                                        flex: 1,
                                                        fontFamily: fonts.secondary[600],
                                                        fontSize: windowWidth / 30,
                                                        color: colors.primary,
                                                        marginVertical: 10,
                                                    }}>{i.b}</Text>
                                                </View>}

                                            {i.c.length > 0 &&
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <Text style={{
                                                        fontFamily: fonts.secondary[600],
                                                        fontSize: windowWidth / 30,
                                                        color: colors.primary,
                                                        marginVertical: 10,
                                                        marginRight: 10,
                                                    }}>c. </Text>
                                                    <Text style={{
                                                        flex: 1,
                                                        fontFamily: fonts.secondary[600],
                                                        fontSize: windowWidth / 30,
                                                        color: colors.primary,
                                                        marginVertical: 10,
                                                    }}>{i.c}</Text>
                                                </View>}




                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }



                </>}
            </ScrollView>

        </View >
    )
}

const styles = StyleSheet.create({})