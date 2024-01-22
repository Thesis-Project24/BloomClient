import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// const headerImage = require('./assets/images/header.jpg');
// const notification = require('./assets/images/Notification.png');
// const banner = require('./assets/images/BG.png');
// const fire = require('./assets/images/fire.png');
// const model = require('./assets/images/model.png');
// const couple = require('./assets/images/couple.jpg');
// const cycle = require('./assets/images/cycle.png');
// const yoga = require('./assets/images/yoga.png');
// const walk = require('./assets/images/walk.png');
// const next = require('./assets/images/next.png');
// const play = require('./assets/images/play.png');
// const star = require('./assets/images/Star.png');
// const book = require('./assets/images/Book.png');
const home = require('./assets/Home.png');
const heart = require('./assets/H.png');
const calendar = require('./assets/Calender.png');
const profile = require('./assets/User.png');
const plus = require('./assets/Plus.png');



export const BottomTab = () => (
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        margin: 10,
        marginHorizontal: 25,
        borderRadius: 20,
        padding: 10,
        // width: '100%',
        backgroundColor: '#EDEDED',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <BottomButton image={home} />
      <BottomButton image={heart} />
      <BottomButton
        image={plus}
        style={{
          position: 'absolute',
          left: '43%',
          top: -25,
          backgroundColor: '#f3f0ea',
          padding: 8,
          borderRadius: 20,
        }}
      />
      <BottomButton />
      <BottomButton image={calendar} />
      <BottomButton image={profile} />
    </View>
  );
  const BottomButton = ({image, style, imageStyle}:{image?:any , style?: any , imageStyle? : any}) => (
    <>
      <View
        style={[
          {
            flex: 1,
            alignSelf: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        <Image
          source={image}
          style={[
            {
              height: image === plus ? 40 : 20,
              width: image === plus ? 40 : 20,
            },
            imageStyle,
          ]}
        />
      </View>
      {image === home && (
        <View
          style={{
            width: '10%',
            position: 'absolute',
            height: 2,
            backgroundColor: '#8860a2',
            bottom: 0,
            left: 25,
          }}
        />
      )}
    </>
  );

  {
    "descriptors": {
        "Back-h_qgyqtQQFKrbaKcu2_en": {
            "navigation": [Object], 
            "options": [Object], 
            "render": [Function render], 
            "route": [Object]}, 
      "DiaryDetails-B2ItaaO9R6RGDUYdXH0sW": {
                "navigation": [Object], 
                "options": [Object], 
                "render": [Function render], 
                "route": [Object]}, 
         "DoctorProfile-tORirmTr6rPZTAmS4RzIL":{
            "navigation": [Object], "options": [Object], "render": [Function render], "route": [Object]}, "EditDoctorProfile-c9iFUrrMIV4bSIqXNtkdW": {"navigation": [Object], "options": [Object], "render": [Function render], "route": [Object]}, "Nav-3bZCkUBVKea2XTePjoUEm": {"navigation": [Object], "options": [Object], "render": [Function render], "route": [Object]}, "Notifications-lkuNCJh83BaKIruVJOSGb": {"navigation": [Object], "options": [Object], "render": [Function render], "route": 
[Object]}, "Tracker-HDV0yRxVLyJuLHb1lWKfd": {"navigation": [Object], "options": 
[Object], "render": [Function render], "route": [Object]}, "User-LyExGKqjyPdK029x85_T9": {"navigation": [Object], "options": [Object], "render": [Function render], "route": [Object]}}, "navigation": {"addListener": [Function addListener], "canGoBack": [Function canGoBack], "closeDrawer": [Function anonymous], "dispatch": [Function dispatch], "emit": [Function anonymous], "getId": [Function getId], "getParent": [Function getParent], "getState": [Function anonymous], "goBack": 

[Function anonymous], "isFocused": [Function isFocused], "jumpTo": [Function anonymous], "navigate": [Function anonymous], "openDrawer": [Function anonymous], "pop": [Function anonymous], "popToTop": [Function anonymous], "push": [Function 
anonymous], "removeListener": [Function removeListener], "replace": [Function anonymous], "reset": [Function anonymous], "setOptions": [Function setOptions], "setParams": [Function anonymous], "toggleDrawer": [Function anonymous]}, "state": {"default": "closed", "history": [[Object]], "index": 0, "key": "drawer-aEk_qsqCBNDVMW0_lIklO", "routeNames": ["Back", "Nav", "Tracker", "DiaryDetails", "DoctorProfile", "User", "EditDoctorProfile", "Notifications"], "routes": [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]], "stale": false, "type": "drawer"}}