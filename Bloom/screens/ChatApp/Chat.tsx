import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";


interface MessageData {
  id: number; 
  text: string; 
  room: string;
  author: string;
  message: string;
  time: string;
}



  function Chat({ socket, username, room }:{ socket:any, username:any, room:any}) {
     const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState<MessageData[]>([]);

    const sendMessage = async () => {
      if (currentMessage !== "") {
        const messageData = {
          room: room,
          author: username,
          message: currentMessage,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };

        await socket.emit("send_message", messageData);
        setMessageList((list: any) => [...list, messageData]);
        setCurrentMessage("");
      }
    };
    useEffect(() => {
      socket.on("receive_message", (data: any) => {
        setMessageList((list) => [...list, data]);
      });
    }, [socket]);

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <ScrollView style={{ flex: 1 }}>
            {messageList.map((messageContent, index) => (
              <View
                key={index} // <-- Add a unique key here
                style={{
                  backgroundColor:
                    username === messageContent.author ? "#b2d8b2" : "#d9d9d9",
                  borderRadius: 8,
                  padding: 10,
                  marginBottom: 10,
                  alignSelf:
                    username === messageContent.author
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                <Text>{messageContent.message}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{messageContent.time}</Text>
                  <Text>{messageContent.author}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: "#ccc",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              marginRight: 10,
              height: 40,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 5,
              padding: 8,
            }}
            value={currentMessage}
            placeholder="Hey..."
            onChangeText={(text) => setCurrentMessage(text)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#4CAF50",
              padding: 10,
              borderRadius: 5,
            }}
            onPress={sendMessage}
          >
            <Text style={{ color: "#fff" }}>&#9658;</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default Chat;
