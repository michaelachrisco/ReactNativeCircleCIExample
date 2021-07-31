//AddInput.js

import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity} from 'react-native'
import {Alert} from 'react-native';

export default function AddInput() {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <View>
      <View>
        <TextInput placeholder="Add Task..." onChangeText= 
         {onChangeText} />
      </View>
      <TouchableOpacity
      title='Add task...'
        onPress={() => {
            Alert.alert('button clicked')
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
