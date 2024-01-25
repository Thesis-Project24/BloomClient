import * as React from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";
import { NavigationProp } from '@react-navigation/native';
import { useFetchAllDoctors } from "../../api/doctors/Doctors";
import { useQuery , useQueryClient , QueryFunctionContext } from "react-query";


type AllDoctorsNavigationProp = NavigationProp<Record<string, object>>;

const AllDoctors = ({navigation}: {navigation: AllDoctorsNavigationProp}) => {    // const navigation = useNavigation();

    const { data , isError, isLoading, isSuccess, refetch } = useQuery("AllDoctors",useFetchAllDoctors)
console.log(data,"dataaaaaa");

    
    return (
        <View style={styles.frameWrapper}>
            <View style={styles.frameParent}>
                <View style={styles.frameContainer}>
                    <View style={styles.frameGroup}>
                        <View
                            style={[styles.allDoctorsParent, styles.parentFlexBox]}>
                            <Text style={styles.allDoctors}>All Doctors</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("PageSpecialists")

                                }}
                            >
                                <Text
                                    style={[styles.seeAll, styles.textFlexBox]}
                                >{`See All `}</Text>

                            </TouchableOpacity>
                            <Image
                                style={[styles.chevronRightIcon, styles.allDoctorsHomeFlexBox]}
                                contentFit="cover"
                                source={require("../../assets/chevronright.png")}
                            />
                        </View>
                        <View style={styles.frameChild} />
                    </View>
                </View>
                <ScrollView
                    style={[styles.allDoctorsHome, styles.allDoctorsHomeFlexBox]}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.allDoctorsHomeContent}
                >

                    {isSuccess && data.map((doc:any)=>{
                        return (
                            <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("PageSpecialists")

                        }}
                        style={styles.allInnerLayout}>
                        <View style={styles.frameContainer}>
                            <Image
                                style={styles.frameItem}
                                contentFit="cover"
                                source={doc.profile_picture}
                            />
                            <View style={styles.frameView}>
                                <View style={styles.drugoDavidParent}>
                                    <Text style={[styles.drugoDavid, styles.drugoDavidFlexBox]}>
                                        Dr.{doc.first_name} {doc.last_name}
                                    </Text>
                                    <Text
                                        style={[styles.srpsychologist, styles.drugoDavidFlexBox]}
                                    >
                                        {doc.specialty}
                                    </Text>
                                </View>
                                <View style={[styles.telephone1Parent, styles.parentFlexBox]}>
                                    <Image
                                        style={styles.telephone1Icon}
                                        contentFit="cover"
                                        source={require("../../assets/telephone-1.png")}
                                    />
                                    <Text style={[styles.text, styles.textFlexBox]}>
                                        +216 {doc.phone_number}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                        )
                    })  }




{/* 
                    <View style={styles.allInnerLayout}>
                        <View style={styles.frameContainer}>
                            <Image
                                style={styles.frameItem}
                                contentFit="cover"
                                source={require("../../assets/rectangle-6.png")}
                            />
                            <View style={styles.frameView}>
                                <View style={styles.drugoDavidParent}>
                                    <Text style={[styles.drugoDavid, styles.drugoDavidFlexBox]}>
                                        Dr.Ugo David
                                    </Text>
                                    <Text
                                        style={[styles.srpsychologist, styles.drugoDavidFlexBox]}
                                    >
                                        Sr.Psychologist
                                    </Text>
                                </View>
                                <View style={[styles.telephone1Parent, styles.parentFlexBox]}>
                                    <Image
                                        style={styles.telephone1Icon}
                                        contentFit="cover"
                                        source={require("../../assets/telephone-1.png")}
                                    />
                                    <Text style={[styles.text, styles.textFlexBox]}>
                                        +216 58 057 094
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.allInnerLayout}>
                        <View style={styles.frameContainer}>
                            <Image
                                style={styles.frameItem}
                                contentFit="cover"
                                source={require("../../assets/rectangle-6.png")}
                            />
                            <View style={styles.frameView}>
                                <View style={styles.drugoDavidParent}>
                                    <Text style={[styles.drugoDavid, styles.drugoDavidFlexBox]}>
                                        Dr.Ugo David
                                    </Text>
                                    <Text
                                        style={[styles.srpsychologist, styles.drugoDavidFlexBox]}
                                    >
                                        Sr.Psychologist
                                    </Text>
                                </View>
                                <View style={[styles.telephone1Parent, styles.parentFlexBox]}>
                                    <Image
                                        style={styles.telephone1Icon}
                                        contentFit="cover"
                                        source={require("../../assets/telephone-1.png")}
                                    />
                                    <Text style={[styles.text, styles.textFlexBox]}>
                                        +216 58 057 094
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.allInnerLayout}>
                        <View style={styles.frameContainer}>
                            <Image
                                style={styles.frameItem}
                                contentFit="cover"
                                source={require("../../assets/rectangle-6.png")}
                            />
                            <View style={styles.frameView}>
                                <View style={styles.drugoDavidParent}>
                                    <Text style={[styles.drugoDavid, styles.drugoDavidFlexBox]}>
                                        Dr.Ugo David
                                    </Text>
                                    <Text
                                        style={[styles.srpsychologist, styles.drugoDavidFlexBox]}
                                    >
                                        Sr.Psychologist
                                    </Text>
                                </View>
                                <View style={[styles.telephone1Parent, styles.parentFlexBox]}>
                                    <Image
                                        style={styles.telephone1Icon}
                                        contentFit="cover"
                                        source={require("../../assets/telephone-1.png")}
                                    />
                                    <Text style={[styles.text, styles.textFlexBox]}>
                                        +216 58 057 094
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View> */}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    allDoctorsHomeContent: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    parentFlexBox: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    textFlexBox: {
        maxWidth: 67,
        minWidth: 50,
        textAlign: "left",
        flex: 1,
    },
    allDoctorsHomeFlexBox: {
        flex: 1,
        width: "100%",
    },
    drugoDavidFlexBox: {
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
    },
    allDoctors: {
        fontSize: FontSize.regularNormalRegular_size,
        fontWeight: "600",
        fontFamily: FontFamily.interSemiBold,
        color: Color.black,
        textAlign: "left",
        lineHeight: 24,
        height: 26,
        flex: 1,
    },
    seeAll: {
        fontSize: FontSize.tinyNoneRegular_size,
        fontFamily: FontFamily.smallOneLinerRegular,
        display: "flex",
        maxWidth: 50,
        color: Color.green,
        lineHeight: 24,
        alignItems: "center",
        alignSelf: "stretch",
    },
    chevronRightIcon: {
        maxWidth: 14,
        maxHeight: "100%",
        overflow: "hidden",
        alignSelf: "stretch",
    },
    allDoctorsParent: {
        height: 26,
        alignSelf: "stretch",
    },
    frameChild: {
        backgroundColor: Color.colorTan_100,
        height: 1,
        marginTop: -1,
        justifyContent: "flex-end",
        alignSelf: "stretch",
    },
    frameGroup: {
        width: 345,
        justifyContent: "flex-end",
        height: 26,
    },
    frameContainer: {
        alignItems: "center",
        gap: 10,
    },
    frameItem: {
        borderRadius: Border.br_61xl,
        width: 50,
        height: 50,
    },
    drugoDavid: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: "300",
        fontFamily: FontFamily.interSemiBold,
        color: Color.black,
    },
    srpsychologist: {
        fontSize: 8,
        lineHeight: 13,
        fontFamily: FontFamily.soraRegular,
        marginTop: 1,
        overflow: "hidden",
        color: Color.green,
        textAlign: "center",
    },
    drugoDavidParent: {
        width: "100%",
        height: "100%",
        maxHeight: 30,
        alignItems: "flex-start",
        justifyContent: "center",
        // backgroundColor: "yellow"

    },
    telephone1Icon: {
        width: 10,
        height: 9,
    },
    text: {
        fontSize: 8,
        fontWeight: "500",
        fontFamily: FontFamily.interSemiBold,
        height: 19,
        // marginLeft: 1,
        color: Color.black,
    },
    telephone1Parent: {
        // width: 62,
        minWidth: 85,
        height: "100%",
        maxHeight: 20,
        width: "100%",
        marginTop: 4,
        justifyContent: "center",
    },
    frameView: {
        maxHeight: 45,
        height: "100%",
        width: "100%",
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"red",
        gap: 1,
    },
    allDoctorsHomeInner: {
        maxHeight: 101,
        maxWidth: 101,
        minHeight: 90,
        minWidth: 101,
        backgroundColor: Color.colorWhite,
        borderRadius: Border.br_mini,
        height: "100%",
        justifyContent: "center",
        flexDirection: "row",
        padding: Padding.p_3xs,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        flex: 1,
        alignItems: "center",
    },
    allInnerLayout: {
        marginLeft: 20,
        maxHeight: 123,
        maxWidth: 123,
        minHeight: 123,
        minWidth: 123,
        gap: 15,
        justifyContent: "center",
        backgroundColor: Color.colorWhite,
        borderRadius: Border.br_mini,
        height: "100%",
        flexDirection: "row",
        padding: Padding.p_3xs,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        flex: 1,
        alignItems: "center",
    },
    allDoctorsHome: {
        minWidth: 310,
        minHeight: 110,
        maxWidth: 390,
        maxHeight: 180,
        marginTop: 18,
        // backgroundColor: "yellow",
    },
    frameParent: {
        marginHorizontal: 20,
        borderRadius: Border.br_2xl,
        backgroundColor: Color.beige,
        minWidth: 340,
        minHeight: 200,
        maxWidth: 420,
        maxHeight: 225,
        padding: Padding.p_3xs,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    frameWrapper: {

        // backgroundColor: "red",
        height: "100%",
        maxHeight: 230,
        marginTop: 32,
        // marginHorizontal:20,
        paddingRight: 2,
        paddingLeft: 2,
        width: "100%",
        alignItems: "center",
        alignSelf: "stretch",
    },
});

export default AllDoctors;
