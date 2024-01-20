import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Padding, FontSize, Color } from "../../GlobalStyles";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';





const SearchDoctor = () => {

    return (
        <View >
            <View style={styles.textFieldParent}>
                <View style={[styles.textField, styles.textFieldPosition]}>
                    <View style={styles.textField1}>
                        <View style={[styles.stateLayer, styles.stateLayerSpaceBlock]}>
                            <View style={styles.leadingIcon}>
                                <FontAwesome
                                    // style={styles.icon}
                                    name="search"
                                    size={20}
                                    color="#49454F" />
                            </View>
                            <View style={styles.content}>
                                <View style={styles.labelText}>
                                    <TextInput
                                        onChangeText={(text) => {

                                            // setData({ ...data});
                                        }}
                                        placeholder="Physician"
                                        placeholderTextColor="#ADADAD"
                                        style={styles.labelText1} numberOfLines={1} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.supportingText, styles.stateLayerFlexBox]}>
                        <Text style={styles.supportingText1}>Supporting text</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.frameWrapper, styles.frameSpaceBlock]}>
                    <View style={styles.ionfilterWrapper}>
                        <MaterialIcons
                            style={styles.ionfilterIcon}
                            name="filter-list"
                            size={28}
                            color="black" />
                       
                    </View>
                </TouchableOpacity>
            </View>



            {/* <View style={[styles.frameView, styles.frameLayout2]}>
                <View style={[styles.clearAllWrapper, styles.stateLayer1FlexBox]}>
                    <Text
                        style={[styles.clearAll, styles.textLayout]}
                        numberOfLines={1}
                    >
                        Clear all
                    </Text>
                </View>
                <TouchableOpacity style={[styles.ratingsParent, styles.parentSpaceBlock]}>
                    <Text
                        style={[styles.ratings, styles.textLayout]}
                        numberOfLines={1}
                    >
                        Ratings
                    </Text>
                    <Text style={[styles.text, styles.textLayout]} numberOfLines={1}>
                        4+
                    </Text>
                    <Image
                        style={styles.ioncloseIcon}
                        contentFit="cover"
                        source={require("../../assets/ionclose.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.priceLowToHighParent, styles.frameWrapper1Layout]}
                >
                    <Text style={[styles.priceLowToContainer, styles.textTypo]}>
                        <Text style={styles.price}>Price</Text>
                        <Text style={styles.lowToHigh}> Low to High</Text>
                    </Text>
                    <Image
                        style={[styles.ioncloseIcon1, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../../assets/ionclose1.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.priceLowToHighParent, styles.frameWrapper1Layout]}
                >
                    <Text style={[styles.priceLowToContainer, styles.textTypo]}>
                        <Text style={styles.price}>Price</Text>
                        <Text style={styles.lowToHigh}> Low to High</Text>
                    </Text>
                    <Image
                        style={[styles.ioncloseIcon1, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../../assets/ionclose1.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.ratingsParent, styles.parentSpaceBlock]}>
                    <Text
                        style={[styles.ratings, styles.textLayout]}
                        numberOfLines={1}
                    >
                        Ratings
                    </Text>
                    <Text style={[styles.text, styles.textLayout]} numberOfLines={1}>
                        4+
                    </Text>
                    <Image
                        style={styles.ioncloseIcon}
                        contentFit="cover"
                        source={require("../../assets/ionclose2.png")}
                    />
                </TouchableOpacity>
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    textFieldPosition: {
        borderTopRightRadius: Border.br_9xs,
        borderTopLeftRadius: Border.br_9xs,
    },
    stateLayerSpaceBlock: {
        paddingBottom: Padding.p_9xs,
        alignItems: "center",
    },
    stateLayerFlexBox: {
        paddingTop: Padding.p_9xs,
        alignSelf: "stretch",
        flexDirection: "row",
    },
    frameSpaceBlock: {
        marginLeft: 16,
        height: "100%",
        flex: 1,
    },
    frameLayout2: {
        maxHeight: 80,
        flexDirection: "row",
        width: "100%",
        flex: 1,
    },
    stateLayer1FlexBox: {
        maxHeight: 32,
        height: "100%",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    textLayout: {
        maxHeight: 19,
        flex: 1,
    },
    parentSpaceBlock: {
        marginLeft: 8,
        flex: 1,
    },
    frameWrapper1Layout: {
        alignItems: "flex-end",
        height: "100%",
        borderRadius: Border.br_5xs,
    },
    textTypo: {
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
        fontSize: FontSize.regular12_size,
        textAlign: "left",
    },
    iconLayout: {
        height: 13,
        width: 13,
        overflow: "hidden",
    },
    frameLayout1: {
        minWidth: 340,
        flex: 1,
    },
    frameParentLayout: {
        maxWidth: 330,
        width: "100%",
    },
    frameLayout: {
        minHeight: 24,
        flex: 1,
    },
    drEmmaMiaTypo: {
        maxWidth: 230,
        textAlign: "left",
        fontFamily: FontFamily.subtitleBodyCaptionCaption1,
        fontWeight: "600",
        width: "100%",
        flex: 1,
    },
    amLayout: {
        maxHeight: 16,
        minHeight: 16,
        fontSize: FontSize.regular12_size,
        overflow: "hidden",
    },
    parentFrameFlexBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    frameParent7FlexBox: {
        maxHeight: 50,
        minHeight: 45,
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    vectorIcon: {
        width: 15,
        height: 14,
    },
    vectorWrapper: {
        backgroundColor: Color.colorPaleturquoise_300,
        width: 33,
        height: 33,
        padding: Padding.p_9xs,
        justifyContent: "center",
        flexDirection: "row",
    },
    findDoctor: {
        fontSize: FontSize.size_5xl,
        color: Color.darkPurple,
        minWidth: 150,
        maxHeight: 33,
        marginLeft: 24,
        textAlign: "left",
        height: "100%",
        minHeight: 33,
        flex: 1,
        overflow: "hidden",
    },
    frameContainer: {
        maxHeight: 34,
        minWidth: 200,
        flexDirection: "row",
        maxWidth: 370,
        alignItems: "center",
        width: "100%",
    },
    icon: {
        height: 18,
        width: 18,
    },
    leadingIcon: {
        width: 48,
        minWidth: 48,
        minHeight: 48,
        maxWidth: 48,
        maxHeight: 56,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    labelText1: {
        color: "#242424",
        display: "flex",
        maxHeight: 24,
        fontFamily: FontFamily.regular12,
        fontSize: FontSize.regular16_size,
        textAlign: "left",
        height: "100%",
        alignItems: "center",
        overflow: "hidden",
        flex: 1,
    },
    labelText: {
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: Color.neutralsWhite,
    },
    content: {
        height: 40,
        justifyContent: "center",
        flex: 1,
    },
    stateLayer: {
        paddingRight: Padding.p_base,
        paddingTop: Padding.p_9xs,
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: Border.br_9xs,
        borderTopLeftRadius: Border.br_9xs,
    },
    textField1: {
        borderRadius: Border.br_mini,
        borderColor: Color.green,
        borderWidth: 1,
        maxWidth: 286,
        maxHeight: 56,
        borderStyle: "solid",
        width: "100%",
        flex: 1,
        backgroundColor: Color.neutralsWhite,
    },
    supportingText1: {
        color: Color.colorGray_700,
        fontSize: FontSize.regular12_size,
        fontFamily: FontFamily.regular12,
        textAlign: "left",
        flex: 1,
    },
    supportingText: {
        display: "none",
        paddingHorizontal: Padding.p_base,
    },
    textField: {
        maxWidth: 290,
        height: 56,
        minWidth: 200,
        flex: 1,
    },
    ionfilterIcon: {
        width: 28,
        height: 28,
        overflow: "hidden",
        // backgroundColor: "red",

    },
    ionfilterWrapper: {
        backgroundColor: Color.green,
        width: 56,
        padding: Padding.p_base,
        borderRadius: Border.br_9xs,
        height: 56,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    frameWrapper: {
        minWidth: 50,
        maxWidth: 56,
        minHeight: 50,
        maxHeight: 56,
    },
    textFieldParent: {
        minHeight: 55,
        maxHeight: 57,
        marginTop: 24,
        alignSelf: "stretch",
        flexDirection: "row",
        flex: 1,
    },
    clearAll: {
        textAlign: "center",
        color: Color.green,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
        fontSize: FontSize.regular12_size,
        height: "100%",
        overflow: "hidden",
    },
    clearAllWrapper: {
        minWidth: 53,
        maxWidth: 53,
        minHeight: 32,
        maxHeight: 32,
        borderRadius: Border.br_5xs,
        backgroundColor: Color.neutralsWhite,
    },
    ratings: {
        color: Color.black,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
        fontSize: FontSize.regular12_size,
        textAlign: "left",
        height: "100%",
        overflow: "hidden",
    },
    text: {
        maxWidth: 15,
        marginLeft: 4,
        color: Color.green,
        fontFamily: FontFamily.medium14,
        fontWeight: "500",
        fontSize: FontSize.regular12_size,
        textAlign: "left",
        height: "100%",
        overflow: "hidden",
    },
    ioncloseIcon: {
        height: 16,
        width: 13,
        marginLeft: 4,
        overflow: "hidden",
    },
    ratingsParent: {
        minWidth: 113,
        maxWidth: 113,
        paddingVertical: Padding.p_5xs,
        backgroundColor: Color.colorPaleturquoise_100,
        marginLeft: 8,
        maxHeight: 32,
        minHeight: 32,
        paddingHorizontal: Padding.p_base,
        flexDirection: "row",
        height: "100%",
        justifyContent: "center",
        borderRadius: Border.br_5xs,
        alignItems: "center",
    },
    price: {
        color: Color.black,
    },
    lowToHigh: {
        color: Color.green,
    },
    priceLowToContainer: {
        alignSelf: "stretch",
        flex: 1,
    },
    ioncloseIcon1: {
        marginLeft: 4,
    },
    priceLowToHighParent: {
        minWidth: 146,
        maxWidth: 146,
        marginLeft: 8,
        flex: 1,
        paddingVertical: Padding.p_5xs,
        backgroundColor: Color.colorPaleturquoise_100,
        maxHeight: 32,
        minHeight: 32,
        paddingHorizontal: Padding.p_base,
        flexDirection: "row",
    },
    frameView: {
        flexWrap: "wrap",
        minWidth: 329,
        maxWidth: 360,
        minHeight: 50,
        marginTop: 24,
    },
});


export default SearchDoctor;
