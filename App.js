import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet, StatusBar, FlatList } from "react-native";
import styled from 'styled-components/native';
import Empty from "./components/Empty";
import Header from "./components/Header";
import AddInput from "./components/AddInput";
import TodoList from "./components/ToDoList";

//Default fonts look fine to me. Leaving in case we want to load some extra fonts.
// const getFonts = () =>
//   Font.loadAsync({
//     "poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
//     "poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
//   });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };
    return (
      <ComponentContainer>
        <View>
          <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
        </View>

        <View>
          <FlatList
            data={data}
            ListHeaderComponent={() => <Header />}
            ListEmptyComponent={() => <Empty />}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem} />
            )}
          />
          <View>
            <AddInput submitHandler={submitHandler} />
          </View>
        </View>
      </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;