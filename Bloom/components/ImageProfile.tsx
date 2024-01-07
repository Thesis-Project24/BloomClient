import  React ,{useState , useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable , ScrollView,TouchableOpacity, Alert , Platform   } from "react-native";
import { Color, Padding } from "../GlobalStyles";
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes , getMetadata , getDownloadURL } from 'firebase/storage';
import { app } from '../firebase.config';
import { useQueryClient } from 'react-query';

type ImageprofileProps = {
  data: any; 
  setDoctorData: any; 
  doctorData: any; 
 };


const Imageprofile : React.FC<ImageprofileProps> = ({data , setDoctorData, doctorData }) => {
  const queryClient = useQueryClient();


    const [image, setImage] = useState<any>(null);
    const [uploading, setUploading] = useState(false);
    const storageRef = ref(getStorage(app)); // Updated storage reference creation

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, [image]);


    const uploadImage = async () => {
        setUploading(true);
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
        const storageRef = ref(getStorage(app), filename);
        try {
          await uploadBytes(storageRef, blob);
        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(storageRef); 
       console.log(downloadURL, "Firebase Storage URL");     
        Alert.alert('Photo uploaded!');
          setDoctorData({...doctorData , profile_picture: downloadURL   })
          console.log(doctorData,"imge uploadeddddd");
         
          
        } catch (e) {
            console.log("erro");
            
          console.log(e);
        }
    // webkitURL
        setUploading(false);
        setImage(null);
        
      };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (result.assets) {
        const source = { uri: result.assets[0].uri };
        setImage(source);
        }
      };




    return (
        <>
        <View style={styles.profuleInner}>
             <Image
                style={styles.frameChild}
                contentFit="cover"
                source={image ? { uri: image.uri } : data[0]?.profile_picture }
                // source={require("../assets/frame-26086392.png")}
            />
             <Pressable  onPress={pickImage} style={[styles.groupGroupWrapper, styles.groupFlexBox]}>
                <Image
                    style={styles.groupGroupIcon}
                    contentFit="cover"
                    source={require("../assets/group-group.png")}
                />
            </Pressable>
            
            
        </View>
        { image && <TouchableOpacity  onPress={ ()=>{ 
          uploadImage()
          }}>
        <Text >Upload Image</Text>
      </TouchableOpacity>}
       
        </>
    );
};

const styles = StyleSheet.create({
    frameChild: {
        width: 116,
        height: 116,
        marginBottom : 10,
        borderRadius : 58 ,
    },
    profuleInner: {
        
        alignSelf: "stretch",
        flex: 1,
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        
    },


    groupGroupWrapper: {
        
        
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        
        borderColor: Color.colorGray_300,
       
        width: 30,
        height: 30,
        alignItems: "flex-start",
        padding: Padding.p_3xs,
        marginLeft: -26,
        marginBottom : -30,
    },

    groupFlexBox: {
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
    },

    groupGroupIcon: {
        width: 55,
        height: 55,
    },
});

export default Imageprofile;
