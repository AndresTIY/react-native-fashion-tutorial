import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
  },
});
// #2FBDA1
// #F1F1F3
// 0C0D34

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2FBDA1" : "rgba(12, 13, 52, .05)";

  const color = variant === "primary" ? "white" : "#0C0D34";

  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};
Button.defaultProps = { variant: "default" };

export default Button;
