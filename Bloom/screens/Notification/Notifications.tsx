import React, { useState, useEffect } from "react";
import { Button, Text, View, Alert, TextInput, Switch } from "react-native";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";

import { StyleSheet } from "react-native";



import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
import DrawerScreen from "../SideBar.tsx/DrawerScreen";
import NavBarEdit from "../../components/DoctorProfile/NavBarEditDoctor";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Notification() {
  const [expoPushToken, setExpoPushToken] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [enableDailyReminder, setEnableDailyReminder] =
    useState<boolean>(false);
  const [dailyReminderTime, setDailyReminderTime] = useState<Date>(
    new Date() // Default time is set to the current time
  );
  const [notificationId, setNotificationId] = useState<string | null>(null);
  const [reminderSet, setReminderSet] = useState<boolean>(false);
  const [scheduledNotifications, setScheduledNotifications] = useState<any[]>(
    []
  );

  useEffect(() => {
    console.log("Registering for push notifications...");
    registerForPushNotificationsAsync()
      .then((token: string) => {
        console.log("token: ", token);
        setExpoPushToken(token);
      })
      .catch((err) => console.log(err));

    // Check if there are any scheduled notifications
    checkScheduledNotifications();
  }, []);

  async function registerForPushNotificationsAsync(): Promise<string> {
    let token: string;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

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
        return "";
      }

      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "6183aa6f-2c21-4b7e-bdcc-38ca6b09bd2e",
        })
      ).data;
      console.log(token, "rrrrrrrrrrrrrr");
    } else {
      alert("Must use a physical device for Push Notifications");
      return "";
    }

    return token;
  }

  const scheduleDailyReminder = async () => {
    console.log("Scheduling daily reminder...");

    const now = new Date();
    const scheduledTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      dailyReminderTime.getHours(),
      dailyReminderTime.getMinutes()
    );

    if (scheduledTime.getTime() < now.getTime()) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }

    const pushMessage = {
      to: expoPushToken,
      sound: "default",
      title: "Daily Reminder",
      body: message || "Default notification message",
      data: { scheduledTime: scheduledTime.getTime() },
    };

      const scheduledNotification =
        await Notifications.scheduleNotificationAsync({
          content: pushMessage,
          trigger: { date: scheduledTime },
        });

      setNotificationId(scheduledNotification.identifier);
      setReminderSet(true);

      // Update the scheduled notifications state
      setScheduledNotifications([
        ...scheduledNotifications,
        {
          id: scheduledNotification.identifier,
          message: message,
          scheduledTime: scheduledTime.getTime(),
        },
      ]);

    Alert.alert(
      "Notification Scheduled",
      "Your daily reminder has been scheduled!",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]
    );
  };
const cancelSpecificReminder = async (id:any) => {
  console.log(`Canceling reminder with ID: ${id}`);

  // Cancel the specific reminder
  await Notifications.cancelScheduledNotificationAsync(id);

  // Remove the canceled reminder from the state
  setScheduledNotifications(
    scheduledNotifications.filter((item) => item.id !== id)
  );

  Alert.alert("Reminder Canceled", "The reminder has been canceled!", [
    {
      text: "OK",
      onPress: () => console.log("OK Pressed"),
    },
  ]);
};

  const cancelDailyReminder = async () => {
    console.log("Canceling daily reminder...");

    if (notificationId) {
      await Notifications.cancelScheduledNotificationAsync(notificationId);
      setNotificationId(null);
      setReminderSet(false);
    }

    // Clear all scheduled notifications
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Reset reminderSet to allow setting a new notification
    setReminderSet(false);

    // Remove the canceled notification from the state
    setScheduledNotifications(
      scheduledNotifications.filter((item) => item.id !== notificationId)
    );

    Alert.alert(
      "Notification Canceled",
      "Your daily reminder has been canceled!",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]
    );
  };

  const checkScheduledNotifications = async () => {
    const notifications =
      await Notifications.getAllScheduledNotificationsAsync();
    setScheduledNotifications(
      notifications.map((notification) => ({
        id: notification.identifier,
        message: notification.content.body || "",
      }))
    );
  };

  const sendNotification = async () => {
    console.log("Sending push notification...");

    const pushMessage = {
      to: expoPushToken,
      sound: "default",
      title: "My first push notification!",
      body: "This is my first push notification made with expo rn app",
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        host: "exp.host",
        accept: "application/json",
        "accept-encoding": "gzip, deflate",
        "content-type": "application/json",
      },
      body: JSON.stringify(pushMessage),
    });

    // Update the scheduled notifications
    checkScheduledNotifications();
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
                  marginBottom: 10,
                  padding: 10,
                }}
                placeholder="Enter message"
                onChangeText={(text) => setMessage(text)}
                value={message}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text>Enable Daily Reminder:</Text>
                <Switch
                  value={enableDailyReminder}
                  onValueChange={(value) => setEnableDailyReminder(value)}
                />
              </View>
              {enableDailyReminder && (
                <>
                  {/* Replace TouchableOpacity with DateTimePicker for time selection */}
                  <DateTimePicker
                    value={dailyReminderTime}
                    onChange={(event, date) => {
                      if (date) {
                        setDailyReminderTime(date);
                      }
                    }}
                    mode="time"
                    display="spinner"
                  />

                  {reminderSet ? (
                    <Text style={{ marginBottom: 20 }}>Reminder set!</Text>
                  ) : (
                    <Button
                      title="Set Daily Reminder"
                      onPress={scheduleDailyReminder}
                    />
                  )}
                </>
              )}
              {reminderSet && (
                <Button
                  title="Cancel Daily Reminder"
                  onPress={cancelDailyReminder}
                />
              )}

              {/* Display all scheduled reminders */}
              {scheduledNotifications.map((reminder) => (
                <View key={reminder.id} style={{ marginTop: 10 }}>
                  <Text>{`Message: ${reminder.message}`}</Text>
                  <Text>{`Time: ${new Date(
                    parseInt(reminder.scheduledTime)
                  ).toLocaleTimeString()}`}</Text>
                  <Button
                    title="Cancel Reminder"
                    onPress={() => cancelSpecificReminder(reminder.id)}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </DrawerScreen>
    </>
  );
}


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
