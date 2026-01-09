import React from "react";
import {
  Pressable,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default PrimaryButton;
