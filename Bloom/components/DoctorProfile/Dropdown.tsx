import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {FontAwesome5} from '@expo/vector-icons';
import { useQueryClient } from 'react-query';




interface DoctorData {
  id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  specialty?: string;
  profile_picture?: string;
  phone_number?: string;
  address?: string[];
  bio?: string;
 }
 
 type DropdownComponentProps = {
  specialtyData: DoctorData;
  setDoctorData: (arg: DoctorData) => void; // Replace DoctorData with the actual type of the argument
  doctorData: DoctorData;
};

const data = [
  
  { label: 'Psychiatry', value: 'Psychiatry' },
  { label: 'Psychology', value: 'Psychology' },
  { label: 'Neuropsychiatry', value: 'Neuropsychiatry' },
  { label: 'Psychotherapy', value: 'Psychotherapy' },
  
];

const DropdownComponent: React.FC<DropdownComponentProps> = ({specialtyData , setDoctorData, doctorData }) => {
  const queryClient = useQueryClient();

 
  const [value, setValue] = useState<any>(null);
  const [specialty, setSpecialty] = useState<string>(value)
  const [isFocus, setIsFocus] = useState(false);
   console.log(value,"specialty");
  const handeldata= ()=>{
    if (specialtyData) {
      
      setValue(specialtyData.specialty)
      setSpecialty(value)
      
    }
   }
   useEffect(() =>{
    handeldata()
  
  },[specialty])

  const renderLabel = () => {
    console.log();
    
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#242424' }]}>
         Specialty
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#add8c4' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
         search
        maxHeight={350}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? specialty : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          setSpecialty(item.value);
          setDoctorData({...doctorData,specialty:item.value});
        }}
        renderLeftIcon={() => (
          <FontAwesome5
            style={styles.icon}
            color={isFocus ? '#add8c4' : '#729384'}
            name="stethoscope"
            size={20}
          />
          
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    
    padding: 1,
  },
  dropdown: {
    height: 50,
    
    borderColor: '#729384',
    borderWidth: 0.75,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
    
  },
  label: {
    borderRadius: 8,
    position: 'absolute',
    backgroundColor: '#f3f0ea',
    left: 14,
    top: -7,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
   
    
    
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});