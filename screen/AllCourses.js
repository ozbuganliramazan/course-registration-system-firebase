import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Courses from "../components/Courses";
import { CoursesContext } from "../store/coursesContext";

export default function AllCourses() {
  const coursesContext = useContext(CoursesContext);

  return <Courses courses={coursesContext.courses} coursesPeriod="Hepsi" nullText="Herhangi bir kusa kayıtlı değilsiniz"/>;
}

const styles = StyleSheet.create({});
