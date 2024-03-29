import * as React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import { StatusBar } from "react-native";
import { Avatar } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DrawerScreen from "./SideBar.tsx/DrawerScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { app } from "../firebase.config";
import axios from "axios";

const Nav = () => {
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        const auth = getAuth(app);
        const id = auth.currentUser?.uid;
        console.log(auth.currentUser?.uid, ":id");
         checkUser().then((role: string)=>{
           return axios
           .get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/${role}s/getOne/${id}`)
          })
            .then((response: any) => {
              console.log(response, 'sucesssssssssssssssssss');
              
                setData(response.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);

    const checkUser = async () => {
        const user = await AsyncStorage.getItem("user");
        console.log(user);
        
        const userr = JSON.parse(user)
        const role = userr.role
        return role
    };
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    StatusBar.setBarStyle("dark-content");
    StatusBar.setHidden(false);
    return (
        <View style={styles.textPosition}>
            <View style={[styles.groupParent]}>
                {/* <View style={styles.parent}></View> */}
                <View style={styles.header}>
                    <View style={[styles.more, styles.wrapperGroupFlexBox]}>
                        <TouchableOpacity
                            activeOpacity={0.3}
                            onPress={() => {
                                // navigation.navigate('EditUserProfile');
                                // navigation.dispatch(navigation.toggleDrawer)
                                navigation.toggleDrawer();
                                //  navigation.navigate('DrawerRoot')
                                // openDrawer()
                            }}
                        >
                            <Entypo name="menu" size={33} color="#242424" />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[styles.frameParent, styles.wrapperGroupFlexBox]}
                    >
                        <View
                            style={[
                                styles.vectorWrapper,
                                styles.wrapperGroupFlexBox,
                            ]}
                        >
                            <TouchableOpacity
                                onPress={() =>{
                                  if(data.role === "user") {
                                    navigation.navigate("User" as never)
                                  }
                                  else { navigation.navigate("DoctorPersonalProfile",{doctor:data})}
                                 
                                } }
                            >
                                <Avatar
                                    rounded
                                    size={"medium"}
                                    source={{ uri: data?.profile_picture }}
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Notifications" as never)
                            }
                            style={[
                                styles.groupGroup,
                                styles.wrapperGroupFlexBox,
                            ]}
                        >
                            <Ionicons
                                name="notifications-outline"
                                size={30}
                                color="#242424"
                            />

                            <View
                                style={[
                                    styles.wrapper,
                                    styles.wrapperGroupFlexBox,
                                ]}
                            >
                                <Text style={[styles.text1, styles.textTypo]}>
                                    3
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textPosition: {
        // left: -18,
        // top: -20,
    },
    textTypo: {
        textAlign: "center",
        fontWeight: "500",
    },
    phoneIconLayout: {
        height: 14,
        width: 14,
        top: 3,
    },
    wrapperGroupFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconLayout: {
        height: 3,
        width: 29,
    },
    text: {
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.poppinsMedium,
        color: Color.colorGray_200,
        left: 0,
        top: 0,
    },
    iconLocation: {
        height: "66.67%",
        width: "4.05%",
        top: "14.29%",
        right: "84.39%",
        bottom: "19.05%",
        left: "11.56%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    phoneIcon: {
        left: 284,
    },
    icons8BatteryLevel904: {
        left: 326,
        height: 20,
        width: 20,
        top: 0,
    },
    icons8WiFi504: {
        left: 305,
    },
    parent: {
        alignItems: "flex-end",
        width: "100%",
        height: "100%",
        // maxHeight:
    },
    path17Icon: {
        marginTop: 7,
    },
    more: {
        height: 27,
        width: 37,
    },
    frameChild: {
        height: 37,
        width: 37,
    },
    vectorWrapper: {
        flexDirection: "row",
        padding: Padding.p_3xs,
    },
    groupIcon: {
        height: 26,
        width: 19,
    },
    text1: {
        fontSize: 11,
        fontFamily: FontFamily.epilogueMedium,
        color: Color.coloGray_100,
    },
    wrapper: {
        borderRadius: Border.br_2xs,
        backgroundColor: Color.colorChocolate,
        width: 17,
        height: 17,
        marginLeft: -13,
        marginBottom: 7,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    groupGroup: {
        width: 40,
        height: 28,
        marginLeft: 9,
        flexDirection: "row",
    },
    frameParent: {
        flexDirection: "row",
    },
    header: {
        width: 357,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        // paddingVertical: 0,
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
    },
    groupParent: {
        // borderRadius: Border.br_3xl,
        backgroundColor: Color.beige,
        // minWidth: 430,
        // width: "100%",
        // maxWidth: 450,
        // height: "100%",
        // maxHeight: 300,
        // minHeight: 100,

        paddingHorizontal: 0,
        paddingVertical: 10,
        alignItems: "center",
    },
});

export default Nav;
