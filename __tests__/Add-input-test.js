import "react-native";
import React from "react";
import AddInput from "../components/AddInput";

import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Alert } from 'react-native';
jest.spyOn(Alert, 'alert');

it("Renders Message", async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<AddInput />);

  const button = getByText("Submit");
  fireEvent.press(button);

  expect(Alert.alert).toHaveBeenCalledWith("button clicked");
  expect(toJSON()).toMatchSnapshot();
});
