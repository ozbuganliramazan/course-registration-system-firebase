import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

export default function CourseForm() {
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Kurs Bilgileri</Text>
      <View style={styles.piraceDate}>
        <Input
          style={styles.flexAll}
          label="Tutar"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onchangeText: () => {},
          }}
        />
        <Input
          style={styles.flexAll}
          label="Tarih"
          textInputConfig={{
            placeHolder: "YYYY-MM-DD",
            maxLength: 10,
            onchangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Başlık"
        textInputConfig={{
          multiline: true,
          onchangeText: () => {},
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    form:{
        marginTop:40,
      },
  piraceDate: {
    flexDirection: "row",
  },
  flexAll: {
    flex: 1,
  },
 title:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    color:'blue',
    marginVertical:20,
 },
});
