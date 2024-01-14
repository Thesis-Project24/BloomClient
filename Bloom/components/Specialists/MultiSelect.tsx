import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

interface State {
 selectedItems: Array<number>;
}
const items = [
    // this is the parent or 'item'
    {
      name: 'Fruits',
      id: 0,
      // these are the children or 'sub items'
      children: [
        {
          name: 'Apple',
          id: 10,
        },
        {
          name: 'Strawberry',
          id: 17,
        },
        {
          name: 'Pineapple',
          id: 13,
        },
        {
          name: 'Banana',
          id: 14,
        },
        {
          name: 'Watermelon',
          id: 15,
        },
        {
          name: 'Kiwi fruit',
          id: 16,
        },
      ],
    }
    
  
  ];
class App extends Component<{}, State> {
 constructor(props: {}) {
   super(props);
   this.state = {
     selectedItems: [],
   };
 }

 onSelectedItemsChange = (selectedItems: Array<number>) => {
   this.setState({ selectedItems });
 };

 render() {
   return (     
     <View>
       <SectionedMultiSelect
         items={items}
         IconRenderer={<Icon name="home" />}
         uniqueKey="id"
         subKey="children"
         selectText="Choose some things..."
         showDropDowns={true}
         onSelectedItemsChange={this.onSelectedItemsChange}
         selectedItems={this.state.selectedItems}
       />
     </View>
   );
 }
}