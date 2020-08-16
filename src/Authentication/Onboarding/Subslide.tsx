import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button } from "../../components";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width,
    padding: 44,
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 30,

    marginBottom: 12,
    color: "#0C0D34",
    fontFamily: "SFProText-Semibold",
    textAlign: "center",
  },
  description: {
    lineHeight: 24,
    color: "#0C0D34",
    fontSize: 16,
    fontFamily: "SFProText-Regular",
    marginBottom: 40,
    textAlign: "center",
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        {...{ onPress }}
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};

export default Subslide;
