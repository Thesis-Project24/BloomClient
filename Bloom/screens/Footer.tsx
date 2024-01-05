
// import React from "react"
// import { Image, StyleSheet, View, Text, Button,Pressable } from "react-native";
// import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
// import { useNavigation } from "@react-navigation/native";



// const Footer = () => {
//   const navigation = useNavigation()
//   return (
//     <View style={styles.frameParent}>
//       <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
//         <View style={[styles.path11Wrapper, styles.frameGroupFlexBox]}>
//           <Image
//             style={styles.path11Icon}
//             resizeMode="cover"
//             source={require("../assets/path-11.png")}
//           />
//         </View>
//         <Pressable>
//           <Image
//             style={styles.homeIcon}
//             resizeMode="cover"
//             source={require("../assets/home.png")}
//           />
//         </Pressable>
//       </View>
//       <View style={[styles.path8Parent, styles.frameGroupFlexBox]}>
//         <Image
//           style={styles.path8Icon}
//           resizeMode="cover"
//           source={require("../assets/path-8.png")}
//         />
//         <View style={[styles.frameContainer, styles.chatParentFlexBox]}>
//           <View style={[styles.chatParent, styles.chatParentFlexBox]}>
//             <View style={styles.chat}>
//               {/* <Pressable onPress={() => navigation.navigate("User")}> */}
//                 <Image
//                   style={styles.chat1Icon}
//                   resizeMode="cover"
//                   source={require("../assets/chat-1.png")}
//                 />
//               {/* </Pressable> */}
//               <Text style={[styles.chat1, styles.chat1Typo]} numberOfLines={1}>
//                 Chats
//               </Text>
//             </View>
//             <View style={[styles.more, styles.moreFlexBox]}>
//               <Pressable onPress={() => console.log("image pressed vector")}>
//                 <Image
//                   style={styles.vectorIcon}
//                   resizeMode="cover"
//                   source={require("../assets/vector.png")}
//                 />
//               </Pressable>
//               <Text style={[styles.more1, styles.chat1Typo]} numberOfLines={1}>
//                 Journal
//               </Text>
//             </View>
//           </View>
//           <View style={[styles.chatParent, styles.chatParentFlexBox]}>
//             <View style={[styles.room, styles.moreFlexBox]}>
//               <Pressable onPress={() => console.log("image pressed vector")}>
//                 <Image
//                   style={styles.vectorIcon1}
//                   resizeMode="cover"
//                   source={require("../assets/vector9.png")}
//                 />
//               </Pressable>
//               <Text style={[styles.more1, styles.chat1Typo]} numberOfLines={1}>
//                 Doctor
//               </Text>
//             </View>
//             <View style={[styles.community, styles.moreFlexBox]}>
//               <Pressable onPress={() => console.log("image pressed vector")}>
//                 <Image
//                   style={styles.vectorIcon2}
//                   resizeMode="cover"
//                   source={require("../assets/vector9.png")}
//                 />
//               </Pressable>
//               <Text
//                 style={[styles.community1, styles.chat1Typo]}
//                 numberOfLines={1}
//               >
//                 Communities
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   frameGroupFlexBox: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   chatParentFlexBox: {
//     justifyContent: "space-between",
//     flex: 1,
//     alignSelf: "stretch",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   chat1Typo: {
//     maxHeight: 16,
//     overflow: "hidden",
//     textAlign: "center",
//     color: Color.black,
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//     lineHeight: 16,
//     letterSpacing: 0,
//     fontSize: FontSize.size_3xs,
//     flex: 1,
//     alignSelf: "stretch",
//   },
//   moreFlexBox: {
//     alignSelf: "stretch",
//     alignItems: "center",
//   },
//   path11Icon: {
//     width: 58,
//     height: 58,
//   },
//   path11Wrapper: {
//    width: 75,
//     height: 75,
//     padding: Padding.p_3xs,
//     zIndex: 0,  
//   },
//   homeIcon: {
//     position: "absolute",
//     marginTop: -9.5,
//     marginLeft: -9,
//     top: "50%",
//     left: "50%",
//     width: 20,
//     height: 21,
//     zIndex: 1,
//   },
//   frameGroup: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   path8Icon: {
//     borderRadius: Border.br_3xs,
//     width: 389,
//     height: 101,
//   },
//   chat1Icon: {
//     width: 16,
//     height: 16,
//   },
//   chat1: {
//     marginTop: 10,
//   },
//   chat: {
//     maxWidth: 35,
//     flex: 1,
//     alignSelf: "stretch",
//     alignItems: "center",
//   },
//   vectorIcon: {
//     width: 18,
//     height: 18,
//   },
//   more1: {
//     marginTop: 8,
//   },
//   more: {
//     width: 56,
//     maxWidth: 56,
//   },
//   chatParent: {
//     maxWidth: 120,
//   },
//   vectorIcon1: {
//     height: 18,
//     width: 20,
//   },
//   room: {
//     width: 30,
//     maxWidth: 30,
//   },
//   vectorIcon2: {
//     width: 19,
//     height: 18,
//   },
//   community1: {
//     marginTop: 9,
//   },
//   community: {
//     width: 61,
//     maxWidth: 61,
//   },
//   frameContainer: {
//     paddingHorizontal: Padding.p_2xl,
//     paddingVertical: 0,
//     marginTop: -86,
//   },
//   path8Parent: {
//     width: 388,
//     height: 103,
//     marginTop: -40,
//   },
//   frameParent: {
//     top: 700,
//     left: 1,
//     width: 390,
//     height: 157,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     position: "absolute",
//   },
// });

// export default Footer;
