import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";
import BottomSeheet, { BottomSheetBackdrop, BottomSheetTextInput, BottomSheetFooter } from "@gorhom/bottom-sheet"
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Fontisto } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
type StackParamList = {
    // Home: undefined; // Add other routes here
    // ...
};
type Props = {
    // handlePasswordReset: (email: string) => Promise<void>;
    // handelError: boolean;
    // success: boolean;
};


const Reminders = forwardRef<BottomSheetMethods, Props>((props, ref) => {
    const navigation = useNavigation<StackNavigationProp<StackParamList>>()

    // const bottomSheetRef = useRef<BottomSheetMethods>(null)

    const snapPoints = useMemo(() => ["1%", "30%", "60%", "70%", "80%", "90%", "100%"], [])


    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={2} disappearsOnIndex={0} {...props} />

        , []);
    const renderFooter = useCallback(
        (props: any) => (
            <BottomSheetFooter {...props} bottomInset={24}>
                <Image
                    style={styles.profileChild}
                    contentFit="cover"
                    source={require("../../assets/vector-2.png")}
                />
            </BottomSheetFooter>
        ),
        []
    );
    // const handelOpen = (index: number) => {
    //     // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

    //     bottomSheetRef.current?.snapToIndex(index)
    // }


    return (
        <>
            {/* <Text onPress={() => {
                handelOpen(3)
            }}
                style={[styles.mentalHealth1, styles.mentalHealth1FlexBox, {
                    marginTop: 120,
                }]}
                numberOfLines={1}
            >
                08:00
            </Text> */}
            <BottomSeheet

                handleIndicatorStyle={{ backgroundColor: Color.green, width: 100, }}
                backgroundStyle={{ backgroundColor: Color.beige }}
                enablePanDownToClose={true}



                ref={ref}
                backdropComponent={renderBackdrop}
                footerComponent={renderFooter}
                // style={{}} 
                snapPoints={snapPoints}  >
                <View style={styles.Reminders} >
                    <Image
                        style={styles.profileChildd}
                        contentFit="cover"
                        source={require("../../assets/vector-2.png")}
                    />

                    <View style={[styles.frameParent]}>
                        <View style={[styles.frameParent1, styles.frameLayout]}>
                            <Text
                                style={[styles.mentalHealth1, styles.mentalHealth1FlexBox]}
                                numberOfLines={1}
                            >
                                08:00
                            </Text>
                            <Text
                                style={[styles.mentalHealth, styles.mentalHealth1Flex]}
                                numberOfLines={1}
                            >
                                AM
                            </Text>


                        </View>
                        <View style={[styles.frameGroup, styles.frameLayout1]}>
                            <View style={[styles.frameContainer, styles.parentFlexBox]}>

                                <MaterialCommunityIcons
                                    style={styles.frameChild}
                                    name="pill" size={60} color={Color.green} />


                                <TouchableOpacity 
                                onPress={()=>{
                                    navigation.navigate("Notifications")
                                }} >
                                    <View

                                        style={styles.frameView}>

                                        <View style={styles.drEmmaMiaParent}>
                                            <Text

                                                style={[styles.drEmmaMia, styles.drEmmaMiaLayout]}
                                                numberOfLines={1} >
                                                Acetaminophen
                                            </Text>

                                            <View style={[styles.iontimeOutlineParent, styles.parentFlexBox]}>
                                                <View style={[styles.frameWrapper, styles.frameLayout]}>
                                                    <Text style={[styles.text, styles.textTypo]}>
                                                        1 Pill
                                                    </Text>

                                                </View>
                                                <Text
                                                    style={[styles.generalPhysician, styles.wednesdayTypo]}
                                                    numberOfLines={1}
                                                >
                                                    Before Food

                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            </View>


                        </View>

                    </View>
                    <TouchableOpacity style={[styles.iconee]}
                     onPress={()=>{
                        navigation.navigate("Notifications")
                    }}>
                    <View style={[styles.iconee]}>
                    <Ionicons name="add-circle-outline" size={50} color={Color.brown} />
                    </View>
                    </TouchableOpacity>
                </View>
            </BottomSeheet>
        </>
    )
})
const styles = StyleSheet.create({
    iconee:{
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        flex:1,
        maxHeight: 50,
flexDirection:"row",
// backgroundColor:"red",
paddingHorizontal:20
    },
    frameLayout1: {
        maxWidth: 330,
        width: "100%",
    },
    parentFlexBox: {
        flexDirection: "row",
        alignItems: "center",

    },
    frameLayout: {
        minHeight: 24,
        flex: 1,
    },
    textTypo: {
        color: Color.green,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
    },
    drEmmaMiaLayout: {
        maxWidth: 230,
        width: "100%",
        flex: 1,
    },
    wednesdayTypo: {
        maxHeight: 20,
        minHeight: 20,
        fontFamily: FontFamily.subtitleBodyCaptionCaption1,
        fontWeight: "600",
        textAlign: "left",
        fontSize: 14,
        overflow: "hidden",
    },
    parentFrameFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    wednesdaySpaceBlock: {
        marginLeft: 8,
        flex: 1,
    },
    amTypo: {
        fontFamily: FontFamily.regular12,
        maxHeight: 16,
        minHeight: 16,
        color: Color.black,
        fontSize: FontSize.regular12_size,
        overflow: "hidden",
    },
    frameParent3FlexBox: {
        maxHeight: 50,
        minHeight: 45,
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    text1Typo: {
        fontFamily: FontFamily.subtitleBodyCaptionCaption1,
        fontWeight: "600",
        fontSize: FontSize.size_6xll,
        color: Color.black,
        textAlign: "left",
    },
    frameChild: {
        // borderRadius: Border.br_38xl,
        // width: 80,
        // height: 80,
        overflow: "hidden",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",

    },
    ionheartSharpIcon: {
        width: 13,
        height: 13,
        overflow: "hidden",
    },
    text: {
        marginLeft: 6,
        height: 16,
        width: "100%",
        textAlign: "center",
        fontSize: 14,
        color: Color.green,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
    },
    frameWrapper: {

        borderRadius: Border.br_5xs,
        backgroundColor: Color.colorPaleturquoise_400,
        alignItems: "flex-end",
        paddingHorizontal: Padding.p_5xs,
        paddingVertical: Padding.p_9xs,
        minWidth: 54,
        maxWidth: 54,
        maxHeight: 24,
        height: "100%",
        justifyContent: "center",
    },
    chevronForwardIcon: {
        maxWidth: 16,
        maxHeight: 17,
        height: "100%",
        overflow: "hidden",
        flex: 1,
    },
    frameParent1: {
        maxHeight: 40,
        justifyContent: "center",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
        // backgroundColor: "orange",
        marginBottom: 10,
    },
    drEmmaMia: {
        minHeight: 30,
        maxHeight: 30,
        color: Color.black,
        fontFamily: FontFamily.subtitleBodyCaptionCaption1,
        fontWeight: "600",
        fontSize: 21,
        textAlign: "left",
        overflow: "hidden",

    },
    mentalHealth1FlexBox: {
        // marginTop: 13,
        textAlign: "left",
        alignSelf: "stretch",
        flex: 1,
    },
    mentalHealth1Flex: {
        // marginTop: 13,
        textAlign: "left",
        alignSelf: "stretch",
        flex: 1,
    },
    mentalHealth1: {
        fontSize: 25,
        fontWeight: "700",
        fontFamily: FontFamily.interBold,
        color: Color.black,
        // backgroundColor: "red",
        maxWidth: 80,

    },
    mentalHealth: {
        fontSize: 25,
        fontWeight: "700",
        fontFamily: FontFamily.interBold,
        color: Color.green,
        // backgroundColor: "yellow",
        // maxWidth:55,
    },
    generalPhysician: {
        color: Color.neutralsGray2,
        marginTop: 2,
        maxWidth: 230,
        width: "100%",
        flex: 1,
    },
    drEmmaMiaParent: {
        minHeight: 40,
        maxHeight: 45,
        marginTop: 10,
        alignSelf: "stretch",
        flex: 1,
    },
    frameView: {
        minWidth: 190,
        minHeight: 68,
        maxHeight: 77,
        marginLeft: 16,
        height: "100%",
        flex: 1,
        // backgroundColor: "yellow",

    },
    frameContainer: {
        // backgroundColor: "green",
        minWidth: 300,
        minHeight: 77,
        maxWidth: 340,
        maxHeight: 80,
        width: "100%",
        flex: 1,
    },
    iontimeOutlineIcon: {
        width: 16,
        height: 16,
        overflow: "hidden",
    },
    wednesday: {
        minWidth: 68,
        maxWidth: 70,
        maxHeight: 16,
        minHeight: 16,
        fontFamily: FontFamily.subtitleBodyCaptionCaption1,
        fontWeight: "600",
        textAlign: "left",
        fontSize: FontSize.regular12_size,
        overflow: "hidden",
        color: Color.black,
        height: "100%",
    },
    oct272022: {
        minWidth: 70,
        maxWidth: 72,
        marginLeft: 8,
        flex: 1,
        textAlign: "left",
        height: "100%",
    },
    iontimeOutlineParent: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: "100%",
        minWidth: 185,
        minHeight: 20,
        maxHeight: 70,
        flex: 1,
        // backgroundColor:"red",
    },
    am: {
        textAlign: "right",
        minWidth: 81,
        maxWidth: 85,
    },
    frameParent2: {
        borderRadius: Border.br_9xs,
        backgroundColor: Color.colorPaleturquoise_200,
        minWidth: 285,
        minHeight: 33,
        maxWidth: 321,
        maxHeight: 35,
        marginTop: 12,
        padding: Padding.p_5xs,
        width: "100%",
        flex: 1,
    },
    frameGroup: {

        minWidth: 305,
        minHeight: 70,
        maxHeight: 127,
        width: "100%",
        height: "100%",
        flex: 1,
        // backgroundColor: "blue",

    },
    text1: {
        minWidth: 45,
        maxWidth: 55,
        color: Color.black,
        flex: 1,
    },
    frameItem: {
        borderStyle: "solid",
        borderColor: Color.neutralsGray6,
        borderRightWidth: 1,
        width: 1,
        height: 28,
    },
    parent: {
        minWidth: 57,
        minHeight: 27,
        maxWidth: 60,
        maxHeight: 27,
        height: "100%",
        flex: 1,
    },
    vectorIcon: {
        height: 18,
        width: 18,
    },
    labelText: {
        fontSize: FontSize.size_sm,
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: {
            width: 0,
            height: 4,
        },
        textShadowRadius: 4,
        minWidth: 125,
        maxWidth: 126,
        color: Color.green,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
    },
    stateLayer: {
        paddingHorizontal: Padding.p_3xs,
        paddingVertical: Padding.p_8xs,
        minWidth: 155,
        minHeight: 29,
        maxWidth: 255,
        maxHeight: 32,
        height: "100%",
        justifyContent: "center",
        flex: 1,
    },
    patientButton: {
        borderRadius: Border.br_81xl,
        minWidth: 160,
        maxWidth: 270,
        padding: Padding.p_5xs,
        height: "100%",
        justifyContent: "center",
        overflow: "hidden",
    },
    frameParent3: {
        minWidth: 320,
        maxWidth: 330,
        width: "100%",
    },
    frameParent: {
        borderRadius: Border.br_xs,
        backgroundColor: Color.neutralsWhite,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        width: 358,
        paddingHorizontal: Padding.p_base,
        paddingTop: Padding.p_base,
        paddingBottom: Padding.p_9xs,
        minWidth: 340,
        minHeight: 160,
        maxWidth: 370,
        maxHeight: 160,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        flex: 1,
    },






    // frameParent: {
    //     borderRadius: Border.br_xs,
    //     backgroundColor: Color.neutralsWhite,
    //     shadowColor: "rgba(0, 0, 0, 0.25)",
    //     shadowOffset: {
    //       width: 0,
    //       height: 4,
    //     },
    //     shadowRadius: 4,
    //     elevation: 4,
    //     shadowOpacity: 1,
    //     width: 358,
    //     paddingHorizontal: Padding.p_base,
    //     paddingTop: Padding.p_base,
    //     paddingBottom: Padding.p_9xs,
    //     minWidth: 340,
    //     minHeight: 189,
    //     maxWidth: 370,
    //     maxHeight: 200,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     overflow: "hidden",
    //     flex: 1,
    //   },
    profileChild: {
        bottom: -150,
        left: -290,
        width: 411,
        height: 358,
        position: "absolute",
    },
    profileChildd: {
        bottom: -90,
        left: -240,
        width: 411,
        height: 358,
        position: "absolute",
    },
    Reminders: {
        paddingTop: 30,
        gap: 30,
        paddingHorizontal: Padding.p_3xs,
        overflow: "hidden",
        height: "100%",
        minHeight: 600,
        width: "100%",

        // maxWidth:390,
        flex: 1,
        backgroundColor: Color.beige,
        justifyContent: "flex-start",
        alignItems: "center",
    }
})

export default Reminders