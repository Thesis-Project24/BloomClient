import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {FontAwesome5} from '@expo/vector-icons';

const data = [
  { label: 'specialty 1', value: 'specialty 1' },
  { label: 'specialty 2', value: 'specialty 2' },
  { label: 'specialty 3', value: 'specialty 3' },
  { label: 'specialty 4', value: 'specialty 4' },
  
];

const DropdownComponent = () => {
  const [specialty, setSpecialty] = useState<string>("")
  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState(false);
  // console.log(value,"specialty");
  

  const renderLabel = () => {
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
        placeholder={!isFocus ? '  Specialty' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
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