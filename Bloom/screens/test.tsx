// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, View, Text, Pressable } from "react-native";
// import { Color, Border, FontSize, Padding, FontFamily } from "../GlobalStyles";

// const HabitsReminders = () => {
//   return (
//     <View style={styles.habitsReminders}>
//       <Image
//         style={styles.habitsRemindersChild}
//         contentFit="cover"
//         source={require("../assets/vector-21.png")}
//       />
//       <View style={styles.charts}>
//         <View style={[styles.oneChart, styles.onePosition]}>
//           <View style={[styles.oneChartChild, styles.oneChartChildLayout]} />
//           <Text style={[styles.hydration, styles.hydrationTypo]}>
//             Hydration
//           </Text>
//           <Image
//             style={[styles.oneChartItem, styles.lineIconLayout]}
//             contentFit="cover"
//             source={require("../assets/line-9.png")}
//           />
//           <Image
//             style={[styles.oneChartInner, styles.oneLayout]}
//             contentFit="cover"
//             source={require("../assets/line-10.png")}
//           />
//           <Image
//             style={[styles.vectorIcon, styles.vectorIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector-4.png")}
//           />
//         </View>
//         <View style={[styles.oneChart1, styles.onePosition]}>
//           <View style={[styles.rectangleView, styles.oneChartChildLayout]} />
//           <Image
//             style={[styles.lineIcon, styles.lineIconLayout]}
//             contentFit="cover"
//             source={require("../assets/line-9.png")}
//           />
//           <Image
//             style={[styles.oneChartChild1, styles.oneLayout]}
//             contentFit="cover"
//             source={require("../assets/line-10.png")}
//           />
//           <Image
//             style={[styles.oneChartChild2, styles.vectorIconLayout]}
//             contentFit="cover"
//             source={require("../assets/vector-41.png")}
//           />
//           <Text style={[styles.hydration, styles.hydrationTypo]}>Sleep</Text>
//         </View>
//         <Text style={styles.habitsOverallSatisfaction}>
//           Habits overAll Satisfaction
//         </Text>
//       </View>
//       <View style={[styles.groupParent, styles.wrapperSpaceBlock]}>
//         <View style={styles.parent}>
//           <Text style={[styles.text, styles.textTypo]}>10:10</Text>
//           <Image
//             style={styles.iconLocation}
//             contentFit="cover"
//             source={require("../assets/-icon-location.png")}
//           />
//           <Image
//             style={[styles.phoneIcon, styles.phoneIconLayout]}
//             contentFit="cover"
//             source={require("../assets/phone.png")}
//           />
//           <Image
//             style={[styles.icons8BatteryLevel904, styles.alertCircleIconLayout]}
//             contentFit="cover"
//             source={require("../assets/icons8batterylevel90-4.png")}
//           />
//           <Image
//             style={[styles.icons8WiFi504, styles.phoneIconLayout]}
//             contentFit="cover"
//             source={require("../assets/icons8wifi50-4.png")}
//           />
//         </View>
//         <View style={[styles.header, styles.headerFlexBox]}>
//           <View style={styles.more}>
//             <Image
//               style={styles.iconLayout}
//               contentFit="cover"
//               source={require("../assets/path-16.png")}
//             />
//             <Image
//               style={[styles.path17Icon, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/path-16.png")}
//             />
//             <Image
//               style={[styles.path17Icon, styles.iconLayout]}
//               contentFit="cover"
//               source={require("../assets/path-16.png")}
//             />
//           </View>
//           <View style={styles.frameParent}>
//             <View style={[styles.vectorWrapper, styles.wrapperSpaceBlock]}>
//               <Image
//                 style={styles.frameChild}
//                 contentFit="cover"
//                 source={require("../assets/ellipse-2.png")}
//               />
//             </View>
//             <View style={styles.groupGroup}>
//               <Image
//                 style={styles.groupIcon}
//                 contentFit="cover"
//                 source={require("../assets/group.png")}
//               />
//               <View style={styles.wrapper}>
//                 <Text style={[styles.text1, styles.textTypo]}>3</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.alertCircleParent}>
//         <Image
//           style={[styles.alertCircleIcon, styles.alertCircleIconLayout]}
//           contentFit="cover"
//           source={require("../assets/alertcircle.png")}
//         />
//         <Text
//           style={styles.ourTeamIs}
//         >{`Our team is happy to submit your habits if you want to recommend new ones `}</Text>
//       </View>
//       <View style={styles.path8Parent}>
//         <Image
//           style={styles.path8Icon}
//           contentFit="cover"
//           source={require("../assets/path-81.png")}
//         />
//         <View style={[styles.frameGroup, styles.headerFlexBox]}>
//           <View style={styles.chatParent}>
//             <View style={styles.chat}>
//               <Image
//                 style={styles.chat1Icon}
//                 contentFit="cover"
//                 source={require("../assets/chat-11.png")}
//               />
//               <Text style={[styles.chat1, styles.chat1Typo]} numberOfLines={1}>
//                 Chats
//               </Text>
//             </View>
//             <View style={styles.more1}>
//               <Image
//                 style={styles.vectorIcon1}
//                 contentFit="cover"
//                 source={require("../assets/vector.png")}
//               />
//               <Text style={[styles.more2, styles.chat1Typo]} numberOfLines={1}>
//                 Reservation
//               </Text>
//             </View>
//           </View>
//           <View style={styles.chatParent}>
//             <View style={styles.room}>
//               <Image
//                 style={styles.vectorIcon2}
//                 contentFit="cover"
//                 source={require("../assets/vector3.png")}
//               />
//               <Text style={[styles.more2, styles.chat1Typo]} numberOfLines={1}>
//                 Dr
//               </Text>
//             </View>
//             <View style={styles.community}>
//               <Image
//                 style={styles.vectorIcon3}
//                 contentFit="cover"
//                 source={require("../assets/vector2.png")}
//               />
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
//       <View style={styles.frameContainer}>
//         <View style={[styles.path11Wrapper, styles.wrapperSpaceBlock]}>
//           <Image
//             style={styles.path11Icon}
//             contentFit="cover"
//             source={require("../assets/path-111.png")}
//           />
//         </View>
//         <Image
//           style={styles.homeIcon}
//           contentFit="cover"
//           source={require("../assets/home1.png")}
//         />
//       </View>
    
//       <View style={[styles.footer, styles.footerPosition]} />
      



//       <View style={styles.groupContainer}>
//         <View style={styles.habitsTextWrapper}>
//           <Text style={[styles.habitsText, styles.hydrationTypo]}>
//             What Habit do you want to Track
//           </Text>
//         </View>
//         <View style={styles.frameView}>
//           <Pressable style={styles.happinessWrapper}>
//             <Text style={[styles.happiness, styles.happinessTypo]}>
//               Happiness
//             </Text>
//           </Pressable>
//           <View style={[styles.cheerfulWrapper, styles.wrapperLayout]}>
//             <Text style={[styles.cheerful, styles.happinessTypo]}>
//               Cheerful
//             </Text>
//           </View>
//           <Pressable style={styles.wrapperLayout}>
//             <Text style={[styles.joy, styles.happinessTypo]}>Joy</Text>
//           </Pressable>
//           <Pressable style={styles.wrapperLayout}>
//             <Text style={[styles.happiness1, styles.happinessTypo]}>
//               Happiness
//             </Text>
//           </Pressable>
//           <Pressable style={styles.wrapperLayout}>
//             <Text style={[styles.happiness, styles.happinessTypo]}>
//               Happiness
//             </Text>
//           </Pressable>
//         </View>
//       </View>






//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   onePosition: {
//     left: 0,
//     width: 336,
//     position: "absolute",
//   },
//   oneChartChildLayout: {
//     height: 208,
//     backgroundColor: Color.colorLightgray,
//     borderRadius: Border.br_6xl,
//     left: 0,
//     width: 336,
//     position: "absolute",
//   },
//   hydrationTypo: {
//     color: Color.colorBlack,
//     fontSize: FontSize.size_mid,
//     textAlign: "left",
//     position: "absolute",
//   },
//   lineIconLayout: {
//     height: 110,
//     width: 1,
//     left: 76,
//     position: "absolute",
//   },
//   oneLayout: {
//     height: 43,
//     left: 78,
//     width: 182,
//     position: "absolute",
//   },
//   vectorIconLayout: {
//     height: 33,
//     width: 177,
//     left: 76,
//     position: "absolute",
//   },
//   wrapperSpaceBlock: {
//     padding: Padding.p_3xs,
//     alignItems: "center",
//   },
//   textTypo: {
//     fontWeight: "500",
//     textAlign: "center",
//   },
//   phoneIconLayout: {
//     height: 14,
//     width: 14,
//     top: 3,
//     position: "absolute",
//   },
//   alertCircleIconLayout: {
//     height: 20,
//     width: 20,
//   },
//   headerFlexBox: {
//     paddingVertical: 0,
//     justifyContent: "space-between",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconLayout: {
//     height: 3,
//     width: 29,
//   },
//   chat1Typo: {
//     maxHeight: 16,
//     color: Color.colorGray_100,
//     fontFamily: FontFamily.robotoMedium,
//     lineHeight: 16,
//     letterSpacing: 0,
//     fontSize: FontSize.size_3xs,
//     alignSelf: "stretch",
//     textAlign: "center",
//     fontWeight: "500",
//     overflow: "hidden",
//     flex: 1,
//   },
//   footerPosition: {
//     width: 390,
//     left: 0,
//     position: "absolute",
//   },
//   happinessTypo: {
//     maxHeight: 25,
//     display: "flex",
//     fontFamily: FontFamily.interMedium,
//     letterSpacing: -0.1,
//     height: "100%",
//     fontWeight: "500",
//     fontSize: FontSize.medium14_size,
//     alignItems: "center",
//     overflow: "hidden",
//   },
//   wrapperLayout: {
//     minWidth: 95,
//     maxHeight: 45,
//     paddingHorizontal: Padding.p_mid,
//     borderWidth: 1,
//     borderColor: Color.colorTan,
//     borderStyle: "solid",
//     borderRadius: Border.br_9xl,
//     paddingVertical: Padding.p_sm,
//     maxWidth: 120,
//     marginLeft: 8,
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },
//   habitsRemindersChild: {
//     top: 1438,
//     left: -250,
//     width: 414,
//     height: 362,
//     position: "absolute",
//   },
//   oneChartChild: {
//     top: 38,
//   },
//   hydration: {
//     width: 208,
//     height: 38,
//     textAlign: "left",
//     fontFamily: FontFamily.tajawalRegular,
//     left: 27,
//     color: Color.colorBlack,
//     fontSize: FontSize.size_mid,
//     top: 0,
//   },
//   oneChartItem: {
//     top: 90,
//   },
//   oneChartInner: {
//     top: 178,
//   },
//   vectorIcon: {
//     top: 123,
//   },
//   oneChart: {
//     top: 403,
//     height: 246,
//   },
//   rectangleView: {
//     top: 28,
//   },
//   lineIcon: {
//     top: 80,
//   },
//   oneChartChild1: {
//     top: 168,
//   },
//   oneChartChild2: {
//     top: 113,
//   },
//   oneChart1: {
//     top: 107,
//     height: 236,
//   },
//   habitsOverallSatisfaction: {
//     fontSize: 27,
//     height: 28,
//     width: 182,
//     textAlign: "left",
//     color: Color.colorBlack,
//     fontFamily: FontFamily.tajawalRegular,
//     left: 27,
//     top: 0,
//     position: "absolute",
//   },
//   charts: {
//     top: 885,
//     left: 13,
//     height: 649,
//     width: 336,
//     position: "absolute",
//   },
//   text: {
//     fontFamily: FontFamily.poppinsMedium,
//     color: "#1f1f1f",
//     textAlign: "center",
//     fontSize: FontSize.medium14_size,
//     fontWeight: "500",
//     top: 0,
//     left: 0,
//     position: "absolute",
//   },
//   iconLocation: {
//     height: "66.67%",
//     width: "4.05%",
//     top: "14.29%",
//     right: "84.39%",
//     bottom: "19.05%",
//     left: "11.56%",
//     maxWidth: "100%",
//     maxHeight: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   phoneIcon: {
//     left: 284,
//   },
//   icons8BatteryLevel904: {
//     left: 326,
//     top: 0,
//     position: "absolute",
//   },
//   icons8WiFi504: {
//     left: 305,
//   },
//   parent: {
//     width: 346,
//     height: 21,
//   },
//   path17Icon: {
//     marginTop: 7,
//   },
//   more: {
//     height: 27,
//     justifyContent: "center",
//     width: 37,
//     alignItems: "center",
//   },
//   frameChild: {
//     height: 37,
//     width: 37,
//   },
//   vectorWrapper: {
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   groupIcon: {
//     height: 25,
//     width: 20,
//   },
//   text1: {
//     fontSize: FontSize.size_xs,
//     fontFamily: FontFamily.epilogueMedium,
//     color: "#fbfbfb",
//     textAlign: "center",
//   },
//   wrapper: {
//     borderRadius: 11,
//     backgroundColor: "#fe8235",
//     width: 22,
//     height: 22,
//     marginLeft: -7,
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   groupGroup: {
//     width: 40,
//     marginLeft: 9,
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     height: 28,
//   },
//   frameParent: {
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   header: {
//     width: 357,
//     paddingHorizontal: Padding.p_9xs,
//     marginTop: 10,
//   },
//   groupParent: {
//     borderRadius: 22,
//     height: 97,
//     width: 390,
//     left: 0,
//     position: "absolute",
//     top: 0,
//     backgroundColor: Color.beige,
//   },
//   alertCircleIcon: {
//     overflow: "hidden",
//   },
//   ourTeamIs: {
//     fontFamily: FontFamily.medium14,
//     color: "rgba(0, 0, 0, 0.9)",
//     marginLeft: 8,
//     fontWeight: "500",
//     fontSize: FontSize.medium14_size,
//     textAlign: "left",
//     flex: 1,
//   },
//   alertCircleParent: {
//     top: 774,
//     left: 20,
//     borderRadius: Border.br_5xs,
//     width: 320,
//     height: 57,
//     padding: 16,
//     backgroundColor: Color.colorPaleturquoise,
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     position: "absolute",
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
//     alignSelf: "stretch",
//     alignItems: "center",
//     flex: 1,
//   },
//   vectorIcon1: {
//     width: 18,
//     height: 18,
//   },
//   more2: {
//     marginTop: 8,
//   },
//   more1: {
//     width: 56,
//     maxWidth: 56,
//     alignSelf: "stretch",
//     alignItems: "center",
//   },
//   chatParent: {
//     maxWidth: 120,
//     alignSelf: "stretch",
//     justifyContent: "space-between",
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },
//   vectorIcon2: {
//     height: 18,
//     width: 20,
//   },
//   room: {
//     width: 30,
//     maxWidth: 30,
//     alignSelf: "stretch",
//     alignItems: "center",
//   },
//   vectorIcon3: {
//     width: 19,
//     height: 18,
//   },
//   community1: {
//     marginTop: 9,
//   },
//   community: {
//     width: 61,
//     maxWidth: 61,
//     alignSelf: "stretch",
//     alignItems: "center",
//   },
//   frameGroup: {
//     paddingHorizontal: Padding.p_2xl,
//     marginTop: -86,
//     alignSelf: "stretch",
//     flex: 1,
//   },
//   path8Parent: {
//     top: 1583,
//     left: -3,
//     width: 388,
//     height: 103,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//   },
//   path11Icon: {
//     width: 58,
//     height: 58,
//   },
//   path11Wrapper: {
//     height: 75,
//     zIndex: 0,
//     width: 75,
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   homeIcon: {
//     marginTop: -9.5,
//     marginLeft: -9,
//     top: "50%",
//     left: "50%",
//     zIndex: 1,
//     width: 20,
//     height: 21,
//     position: "absolute",
//   },
//   frameContainer: {
//     top: 1534,
//     left: 153,
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     position: "absolute",
//   },
//   footer: {
//     top: 1529,
//     height: 150,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   habitsText: {
//     top: -14,
//     left: -28,
//     letterSpacing: -0.2,
//     fontWeight: "600",
//     fontFamily: FontFamily.interSemiBold,
//     textAlign: "left",
//     color: Color.colorBlack,
//     fontSize: FontSize.size_mid,
//   },
//   habitsTextWrapper: {
//     maxHeight: 22,
//     alignSelf: "stretch",
//     height: 21,
//   },
//   happiness: {
//     color: Color.colorDarkgray,
//     display: "flex",
//     fontFamily: FontFamily.interMedium,
//     letterSpacing: -0.1,
//     height: "100%",
//     width: 75,
//     textAlign: "left",
//   },
//   happinessWrapper: {
//     minWidth: 90,
//     maxHeight: 45,
//     paddingHorizontal: Padding.p_mid,
//     borderWidth: 1,
//     borderColor: Color.colorTan,
//     borderStyle: "solid",
//     borderRadius: Border.br_9xl,
//     paddingVertical: Padding.p_sm,
//     maxWidth: 120,
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//   },
//   cheerful: {
//     color: Color.beige,
//     width: 69,
//     display: "flex",
//     fontFamily: FontFamily.interMedium,
//     letterSpacing: -0.1,
//     height: "100%",
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   cheerfulWrapper: {
//     backgroundColor: Color.colorPaleturquoise,
//     overflow: "hidden",
//   },
//   joy: {
//     width: 47,
//     color: Color.colorDarkgray,
//     display: "flex",
//     fontFamily: FontFamily.interMedium,
//     letterSpacing: -0.1,
//     height: "100%",
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   happiness1: {
//     width: 80,
//     color: Color.colorDarkgray,
//     display: "flex",
//     fontFamily: FontFamily.interMedium,
//     letterSpacing: -0.1,
//     height: "100%",
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   frameView: {
//     flexWrap: "wrap",
//     marginTop: 26,
//     alignSelf: "stretch",
//     flexDirection: "row",
//     flex: 1,
//   },
//   groupContainer: {
//     top: 150,
//     height: 473,
//     paddingHorizontal: 28,
//     paddingVertical: Padding.p_sm,
//     width: 390,
//     left: 0,
//     position: "absolute",
//   },
//   habitsReminders: {
//     borderRadius: 5,
//     width: "100%",
//     height: 1679,
//     overflow: "hidden",
//     flex: 1,
//     backgroundColor: Color.beige,
//   },
// });

// export default HabitsReminders;
