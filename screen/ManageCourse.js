import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { CoursesContext } from "../store/coursesContext";
import CourseForm from "../components/CourseForm";

export default function ManageCourses({ route, navigation }) {
  const coursesContext = useContext(CoursesContext);

  const courseId = route.params?.courseId;
  let isEditing = false;
  if (courseId) {
    isEditing = true;
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Kurs Güncelle" : "Kurs Ekle",
    });
  }, [navigation, isEditing]);

  function deleteContainer() {
    coursesContext.deleteCourse(courseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function addOrUpdateHandler() {
    if (isEditing) {
      coursesContext.updateCourse(courseId, {
        description: "Güncellenen Kurs",
        amount: 169,
        date: new Date(),
      });
    } else {
      coursesContext.addCourse( {
        description: "Eklenen Kurs",
        amount: 169,
        date: new Date(),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <CourseForm/>
      <View style={styles.bottons}>
        <Pressable onPress={cancelHandler}>
          <View style={styles.cancel}>
            <Text style={styles.cancelText}>İptal Et</Text>
          </View>
        </Pressable>
        <Pressable onPress={addOrUpdateHandler}>
          <View
            style={[
              styles.addOrDelete,
              { backgroundColor: isEditing ? "blue" : "green" },
            ]}
          >
            <Text style={styles.addOrDeleteText}>
              {isEditing ? "Güncelle" : "Ekle"}
            </Text>
          </View>
        </Pressable>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <EvilIcons
            name="trash"
            size={36}
            color="black"
            onPress={deleteContainer}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  deleteContainer: {
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "blue",
    paddingTop: 10,
    marginTop: 16,
  },
  bottons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: "red",
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
  cancelText: {
    color: "white",
  },
  addOrDelete: {
    minWidth: 120,
    marginRight: 10,
    padding: 8,
    alignItems: "center",
  },
  addOrDeleteText: {
    color: "white",
  },
});
