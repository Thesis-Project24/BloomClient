import React, { useState, useEffect } from "react";
import { Button, Text, View, Alert, TextInput, Switch } from "react-native";
import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";

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

  useEffect(() => {
    console.log("Registering for push notifications...");
    registerForPushNotificationsAsync()
      .then((token: string) => {
        console.log("token: ", token);
        setExpoPushToken(token);
      })
      .catch((err) => console.log(err));

    // Check if there is a scheduled daily reminder
    checkScheduledNotification();
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
          projectId: "806a4a79-4b01-4670-bcae-60843b94e8a6",
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

    const scheduledNotification = await Notifications.scheduleNotificationAsync(
      {
        content: pushMessage,
        trigger: { date: scheduledTime },
      }
    );

    setNotificationId(scheduledNotification.identifier);
    setReminderSet(true);

    Alert.alert(
      "Notification Scheduled",
      "Your daily reminder has been scheduled!"
    );
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

    Alert.alert(
      "Notification Canceled",
      "Your daily reminder has been canceled!"
    );
  };

  const checkScheduledNotification = async () => {
    const scheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    const dailyReminder = scheduledNotifications.find(
      (notification) => notification.content.title === "Daily Reminder"
    );

    if (dailyReminder) {
      setNotificationId(dailyReminder.identifier);
      setReminderSet(true);
    }
  };
  

  return (
    <View style={{ marginTop: 100, alignItems: "center" }}>
      <Text style={{ marginVertical: 30 }}>Expo RN Push Notifications</Text>
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
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
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
        <Button title="Cancel Daily Reminder" onPress={cancelDailyReminder} />
      )}
    </View>
  );
}
