import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DatePicker}  from "@react-native-community/datetimepicker";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
import DrawerScreen from "../SideBar.tsx/DrawerScreen";
import NavBarEdit from "../../components/DoctorProfile/NavBarEditDoctor";

const ViewDetailsCancled = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [scheduledTime, setScheduledTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
 
const dateTimePickerRef = useRef<DateTimePickerModal>(null);
  useEffect(() => {
    console.log("Registering for push notifications...");
    registerForPushNotificationsAsync()
      .then((token) => {
        console.log("token: ", token);
        setExpoPushToken(token);
      })
      .catch((err) => console.log(err));
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "6183aa6f-2c21-4b7e-bdcc-38ca6b09bd2e",
        })
      ).data;
      console.log(token);
    } else {
      alert("Must use a physical device for Push Notifications");
    }

    return token;
  }

  const sendNotification = async () => {
    console.log("Scheduling push notification...");

    // notification message
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Scheduled Push Notification",
      body: notificationMessage || "Default notification message",
    };

    const schedulingOptions = {
      time: scheduledTime.getTime(), // Convert the scheduled time to milliseconds
    };

    try {
      const result = await Notifications.scheduleNotificationAsync({
        content: message,
        trigger: schedulingOptions,
      });

      console.log("Notification scheduled successfully:", result);

      // Show the DateTimePickerModal after scheduling the notification
     if (dateTimePickerRef.current) {
       dateTimePickerRef.current.showPicker();
     }
    } catch (error) {
      console.error("Error scheduling notification:", error);
    }
  };

  const showDateTimePicker = () => {
    setDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisible(false);
  };

  const handleDateChange = (selectedDate: any) => {
    hideDateTimePicker();
    if (selectedDate) {
      setScheduledTime(selectedDate);
    }
  };

  return (
    <>
      <DrawerScreen>
        <NavBarEdit page={"Notification"} />
        <View style={styles.viewDetailsCancled}>
          <View style={[styles.symptomContentBox, styles.smallFabShadowBox]}>
            <View style={styles.appointmentHeader}>
              <Text
                style={[styles.drPoppenschmitz, styles.drPoppenschmitzFlexBox]}
              >
                Notifications
              </Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginBottom: 20,
                  paddingHorizontal: 10,
                }}
                placeholder="Enter notification message"
                value={notificationMessage}
                onChangeText={(text) => setNotificationMessage(text)}
              />
              <Button
                title="Send push notification"
                onPress={sendNotification}
              />
            </View>
            <View style={[styles.dateTime, styles.fabsSpaceBlock]}>
              <TouchableOpacity onPress={showDateTimePicker}>
                <Text style={[styles.date1, styles.date1Typo]}>
                  Date & Time
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>
                  {scheduledTime.toLocaleString()}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                ref={dateTimePickerRef}
                isVisible={isDateTimePickerVisible}
                mode="datetime"
                onConfirm={handleDateChange}
                onCancel={hideDateTimePicker}
              />
            </View>
          </View>
        </View>
      </DrawerScreen>
    </>
  );
};
const styles = StyleSheet.create({
  smallFabShadowBox: {
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#dadada",
    overflow: "hidden",
    backgroundColor: Color.neutralBackground,
  },
  drPoppenschmitzFlexBox: {
    textAlign: "left",
    letterSpacing: 1,
  },
  date1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    letterSpacing: 1,
  },
  sliderFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  date1Layout: {
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
  },
  phoneAltIconLayout: {
    height: 12,
    width: 12,
    overflow: "hidden",
  },
  fabsSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  text1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 1,
  },
  text3Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  smallFabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  drPoppenschmitz: {
    fontSize: FontSize.size_lg,
    color: Color.darkGreen,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 24,
  },
  templesThrobbingCouldnt: {
    marginTop: 8,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    color: Color.darkGreen,
  },
  poppenschmitzaolde: {
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtraLight,
    marginLeft: 2,
    color: Color.textMain,
    textAlign: "left",
    letterSpacing: 1,
  },
  phoneAltIcon: {
    marginLeft: 2,
  },
  contactDetails: {
    display: "none",
    marginTop: 8,
    alignSelf: "stretch",
  },
  appointmentHeader: {
    alignSelf: "stretch",
  },
  date1: {
    color: Color.brown,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
  },
  text1: {
    color: Color.brown,
    marginTop: 8,
  },
  time: {
    marginLeft: 20,
  },
  dateTime: {
    flexDirection: "row",
  },
  painLevel: {
    color: Color.textMain,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
  },
  sliderBar: {
    left: -197,
    backgroundColor: Color.secondaryColorDark,
    top: 0,
    height: 10,
    width: 200,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sliderBarMask: {
    top: 5,
    left: 3,
    backgroundColor: Color.accentColorVibrantBlue,
    height: 10,
    width: 200,
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  sliderControlIcon: {
    width: 20,
    height: 20,
  },
  sliderBarMaskParent: {
    width: 203,
    height: 20,
  },
  text3: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.textMain,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 1,
    left: 0,
  },
  numbers: {
    width: 17,
    height: 24,
    marginLeft: 20,
    overflow: "hidden",
  },
  googlemapsIcon1: {
    width: 22,
    height: 22,
    display: "none",
  },
  winklergasse4510117: {
    marginLeft: 5,
    color: Color.textMain,
    display: "none",
  },
  addressGoogleMapsIcon: {
    flexDirection: "row",
  },
  openInGoogle: {
    fontSize: FontSize.size_7xs,
    lineHeight: 9,
    color: Color.colorMediumblue,
    display: "none",
  },
  addressGoogleMaps: {
    display: "none",
  },
  addressSection: {
    display: "none",
  },
  icon: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
  },
  smallFab: {
    borderRadius: Border.br_xs,
    width: 40,
    height: 40,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#dadada",
    overflow: "hidden",
    backgroundColor: Color.neutralBackground,
  },
  fabs: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  symptomContentBox: {
    top: 81,
    left: 41,
    borderRadius: Border.br_13xl,
    width: 308,
    padding: Padding.p_11xl,
    position: "absolute",
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#dadada",
  },
  viewDetailsCancled: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.neutralBackground,
  },
});

export default ViewDetailsCancled;
