

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import io from "socket.io-client";
import Chat from "./Chat";
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
} from "../../GlobalStyles";
import { StyleSheet } from "react-native";
import Nav from "../Nav";
import DrawerScreen from "../SideBar.tsx/DrawerScreen";

const socket = io.connect(`http://${process.env.EXPO_PUBLIC_ipadress}:3000`);


interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };


  return (
    // <DrawerScreen>
    <View style={styles.sideBar}>

<Nav/>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        // backgroundColor: "#f3f0ea",
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
          {!showChat ? (
            <View>
              <Text style={{ fontSize: 24, marginBottom: 16 }}>
                Join A Chat
              </Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginBottom: 10,
                  paddingLeft: 10,
                }}
                placeholder="John..."
                onChangeText={(text) => setUsername(text)}
              />
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginBottom: 10,
                  paddingLeft: 10,
                }}
                placeholder="Room ID..."
                onChangeText={(text) => setRoom(text)}
              />
              <Button title="Join A Room" onPress={joinRoom} />
            </View>
          ) : (
            <Chat socket={socket} username={username} room={room} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </View>
    // </DrawerScreen>
  );
};
const styles = StyleSheet.create({
sideBar: {
  // borderTopRightRadius: Border.br_81xl,
  // borderBottomRightRadius: Border.br_81xl,
  
  overflow: "hidden",
  // backgroundColor: "red",
  // backgroundColor: Color.neutralsWhite,
  flex: 1,
  height: "100%",
   width: "100%",
   backgroundColor: "#f3f0ea",
},
})


export default App;