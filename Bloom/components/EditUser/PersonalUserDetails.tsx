import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import {
    FontFamily,
    FontSize,
    Color,
    Padding,
    Border,
} from "../../GlobalStyles";
import { useQueryClient, useQuery } from "react-query";

interface UserData {
    id?: number;
    email?: string;
    username?: string;
    fullName?: string;
    profile_picture?: string;
    phone_number?: string;
    age?: number;
}

type PersonalDetailsProps = {
    data: UserData;
    setUserData: (arg: UserData) => void;
    userData: UserData;
};

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
    data,
    setUserData,
    userData,
}) => {
    return (
        <View
            style={[
                styles.textlabelPersonalDetialsParent,
                styles.textlabelParentFlexBox,
            ]}
        >
            <Text style={styles.textlabelPersonalDetials} numberOfLines={1}>
                Personal Details
            </Text>
            <View style={styles.frameWrapper}>
                <View style={styles.frameParent}>
                    <View
                        style={[
                            styles.textlabelEmailAddressParent,
                            styles.textlabelLayout,
                        ]}
                    >
                        <Text
                            style={[
                                styles.textlabelEmailAddress,
                                styles.textlabelTypo,
                            ]}
                            numberOfLines={1}
                        >
                            Your Full Name
                        </Text>
                        <View style={styles.textlabel450116Wrapper}>
                            <TextInput
                                numberOfLines={1}
                                // editable={true} selectTextOnFocus={true}
                                onChangeText={(text) => {
                                    setUserData({
                                        ...userData,
                                        fullName: text,
                                    });
                                }}
                                style={styles.textlabel450116}
                                placeholder={"Username"}
                                multiline={true}
                                placeholderTextColor="#ADADAD"
                            >
                                {data?.fullName}
                            </TextInput>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.textlabelEmailAddressGroup,
                            styles.textlabelFlexBox,
                        ]}
                    >
                        <Text
                            style={[
                                styles.textlabelEmailAddress,
                                styles.textlabelTypo,
                            ]}
                            numberOfLines={1}
                        >
                            Age
                        </Text>
                        <View style={styles.textlabel450116Border}>
                            <TextInput
                                onChangeText={(text) => {
                                    setUserData({ ...userData, age: +text });
                                }}
                                style={styles.textlabel450116}
                                placeholder={data?.age?.toString() || "Age"}
                                multiline={true}
                                placeholderTextColor="#ADADAD"
                            >
                                {data?.age}
                            </TextInput>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.textlabelEmailAddressGroup,
                            styles.textlabelFlexBox,
                        ]}
                    >
                        <Text
                            style={[
                                styles.textlabelEmailAddress,
                                styles.textlabelTypo,
                            ]}
                            numberOfLines={1}
                        >
                            Phone Number
                        </Text>
                        <View style={styles.textlabel450116Border}>
                            <TextInput
                                onChangeText={(text) => {
                                    setUserData({
                                        ...userData,
                                        phone_number: text,
                                    });
                                }}
                                style={styles.textlabel450116}
                                placeholder={
                                    data?.phone_number || "Phone Number"
                                }
                                multiline={true}
                                placeholderTextColor="#ADADAD"
                            >
                                {data?.phone_number}
                            </TextInput>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.frameChild} />
        </View>
    );
};

const styles = StyleSheet.create({
    textlabelPasswordBtn: {
        color: "#729384",
        fontSize: 12,
        fontWeight: "600",
        fontFamily: "PlusJakartaSans-SemiBold",
    },
    textlabelParentFlexBox: {
        alignSelf: "stretch",
        flex: 1,
    },
    textlabelLayout: {
        minHeight: 68,
        alignItems: "center",
    },
    textlabelTypo: {
        maxHeight: 15,
        fontFamily: FontFamily.montserratRegular,
        fontSize: FontSize.size_xs,
        overflow: "hidden",
        textAlign: "left",
        color: Color.bleck,
        alignSelf: "stretch",
    },
    textlabelFlexBox: {
        marginTop: 17,
        flex: 1,
        alignSelf: "stretch",
    },
    textlabel450116Border: {
        height: 48,
        paddingVertical: Padding.p_3xs,
        paddingHorizontal: Padding.p_mid,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Color.colorCadetblue,
        borderStyle: "solid",
        backgroundColor: Color.coloGray_100,
        borderRadius: Border.br_5xs,
        alignSelf: "stretch",
    },
    textlabelPersonalDetials: {
        fontSize: FontSize.size_lg,
        maxHeight: 28,
        overflow: "hidden",
        textAlign: "left",
        color: Color.bleck,
        fontFamily: FontFamily.montserratSemiBold,
        fontWeight: "600",
        flex: 1,
        alignSelf: "stretch",
    },
    textlabelEmailAddress: {
        flex: 1,
    },
    textlabel450116: {
        fontSize: FontSize.size_smi,
        maxHeight: 20,
        fontFamily: FontFamily.montserratSemiBold,
        fontWeight: "600",
        flex: 1,
        alignSelf: "stretch",
    },
    textlabel450116Wrapper: {
        maxHeight: 48,
        paddingVertical: Padding.p_3xs,
        paddingHorizontal: Padding.p_mid,
        borderWidth: 1,
        backgroundColor: Color.coloGray_100,
        borderRadius: Border.br_5xs,
        justifyContent: "center",
        borderColor: Color.colorCadetblue,
        borderStyle: "solid",
        flex: 1,
        alignSelf: "stretch",
    },
    textlabelEmailAddressParent: {
        justifyContent: "space-between",
        minHeight: 68,
        flex: 1,
        alignSelf: "stretch",
    },
    textlabelEmailAddressGroup: {
        minHeight: 68,
        alignItems: "center",
        justifyContent: "space-between",
    },
    textlabelEmailAddress3: {
        height: 15,
    },
    textlabel450116Wrapper1: {
        marginTop: 5,
    },
    frameView: {
        minHeight: 68,
        alignItems: "center",
    },
    textlabelPassword: {
        maxHeight: 20,
    },
    frameParent: {
        minWidth: 210,
        alignItems: "center",
        flex: 1,
        alignSelf: "stretch",
    },
    frameWrapper: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
        paddingLeft: Padding.p_mini,
        paddingRight: Padding.p_3xs,
        marginTop: 21,
        flex: 1,
        alignSelf: "stretch",
    },
    frameChild: {
        borderWidth: 0.5,
        maxHeight: 1,
        justifyContent: "center",
        borderColor: Color.colorCadetblue,
        borderStyle: "solid",
        alignItems: "center",
        marginTop: 21,
        flex: 1,
        alignSelf: "stretch",
    },
    textlabelPersonalDetialsParent: {
        paddingHorizontal: 0,
        paddingVertical: Padding.p_9xs,
        maxHeight: 480,
        flex: 1,
    },
});

export default PersonalDetails;
