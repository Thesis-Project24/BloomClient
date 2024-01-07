// import * as React from 'react';
// import { Image, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import SignIn from './SignIn';
// import { FontFamily, Color, FontSize, Padding } from '../GlobalStyles';

// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

// const GetStart = () => {
//     const navigation = useNavigation();

//     return (
//         <View style={styles.GetStart}>
//             <Image
//                 style={styles.GetStartChild}
//                 source={require("../assets/vector-12.png")}
//             />
         
//             <View style={styles.GetStartInner}>
//                 <View style={styles.frameParent}>
//                     <View style={styles.groupParent}>
//                         <Image
//                             style={styles.frameChild}
//                             source={require("../assets/group-123.png")}
//                         />
//                         <Text style={styles.mentalHealth}>
//                             Mental Health
//                         </Text>
//                         <Text style={styles.healthyLifeIs}>
//                             Healthy life is having a healthy mind so build a healthy mind then
//                             the healthy body.
//                         </Text>
//                     </View>
//                     <Pressable onPress={() => navigation.navigate(SignIn)}>
//                         <View style={styles.getStartedWrapper}>
//                             <Text style={styles.getStarted}>Get Started</Text>
//                         </View>
//                     </Pressable>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     GetStart: {
//         backgroundColor: Color.beige,
//         width: '100%',
//         flex: 1,
//     },
//     GetStartChild: {
//         width: screenWidth,
//         height: 119,
//         alignSelf: 'center',
//     },
//     GetStartItem: {
//         width: screenWidth,
//         height: 362,
//         alignSelf: 'center',
//         position: 'absolute',
//         bottom: 0,
//     },
//     GetStartInner: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     frameParent: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     groupParent: {
//         alignItems: 'center',
//     },
//     frameChild: {
//         width: 137,
//         height: 181,
//     },
//     mentalHealth: {
//         fontSize: 37,
//         fontWeight: '700',
//         fontFamily: FontFamily.dMSansBold,
//         color: Color.bleck,
//         textAlign: 'center',
//     },
//     healthyLifeIs: {
//         fontSize: FontSize.size_base,
//         fontFamily: FontFamily.dMSansRegular,
//         color: Color.brown,
//         textAlign: 'center',
//     },
//     getStartedWrapper: {
//         borderRadius: 18,
//         backgroundColor: Color.colorPaleturquoise,
//         width: 250,
//         height: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 33,
//     },
//     getStarted: {
//         fontSize: FontSize.size_lg,
//         fontWeight: '500',
//         fontFamily: FontFamily.sFProDisplay,
//         color: Color.colorBlack,
//     },
// });

// export default GetStart;
