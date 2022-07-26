import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData } from '../../utils/localStorage';
import { colors, fonts, windowWidth } from '../../utils';
import axios from 'axios';
import { apiURL, storeData } from '../../utils/localStorage';
import moment from 'moment';
export default function SHasil({ navigation, route }) {
    const kode = route.params.kode;
    console.warn('kode', kode)

    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getData('user').then(res => {
            setUser(res);
        });

        axios.post(apiURL + 'solusi.php', {
            kode: route.params.kode
        }).then(resz => {
            console.log(resz.data);
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
                        }}>{moment().format('LLL')}</Text>
                    </View>
                </View>
            </View>


            {open && <>
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
                    }}>{data.kode_rule}</Text>
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
                            }}>{data.a}</Text>
                        </View>
                        {data.b.length > 0 &&
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
                                }}>{data.b}</Text>
                            </View>}

                        {data.c.length > 0 &&
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
                                }}>{data.c}</Text>
                            </View>}




                    </View>
                </View></>}

        </View >
    )
}

const styles = StyleSheet.create({})