

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect(`http://192.168.1.69:3000`);


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
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      {!showChat ? (
        <View>
          <Text style={{ fontSize: 24, marginBottom: 16 }}>Join A Chat</Text>
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
  );
};

export default App;

