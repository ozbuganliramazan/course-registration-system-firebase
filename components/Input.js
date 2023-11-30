import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({ label, textInputConfig, style, invaid }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (invaid) {
    inputStyles.push(styles.invaidInput)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invaid && styles.invaidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    color: "blue",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "pink",
    padding: 6,
    borderRadius: 10,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invaidLabel: {
    color: "red",
  },
  invaidInput: {
    backgroundColor: "red",
  },
});
