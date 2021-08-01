//AddInput.js

import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity} from 'react-native'
import {Alert} from 'react-native';
import styled from "styled-components";

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

  //styles
const ComponentContainer = styled.View`
flex-direction: row;
`;

const InputContainer = styled.View`
flex-direction: row;
border-radius: 10px;
`;

const Input = styled.TextInput`
font-size: 20px;
background-color: white;
width: 300px;
margin-right: 20px;
padding: 10px;
margin-bottom: 20px;
border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
width: 50px;
justify-content: center;
align-items: center;
background-color: whitesmoke;
margin-bottom: 20px;
border-radius: 50px;
`;
}
