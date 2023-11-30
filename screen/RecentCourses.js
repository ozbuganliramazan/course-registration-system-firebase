import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Courses from "../components/Courses";
import { CoursesContext } from "../store/coursesContext";
import { getLasWeek } from "../helper/date";
import { getCourse } from "../helper/http";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorText from "../components/ErrorText";

export default function RecentCourses() {
  const coursesContext = useContext(CoursesContext);
  const [fetchedCourses, SetFetchedCourses] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
const [error, setError] = useState(null);

  useEffect(() => {
    async function takeCourses() {
      setError(null);
      setIsFetching(true);
      try {
        const courses = await getCourse();
        coursesContext.setCourse(courses);
      } catch (error) {
        setError('Veri Çekme işleminde Hata oluştu!')
      }
      
      setIsFetching(false);
      //SetFetchedCourses(courses);
    }

    takeCourses();
  }, []);

  if (error && !isFetching) {
    return <ErrorText message={error}/>
  }

  if (isFetching) {
    return <LoadingSpinner />;
  }

  const recentCourses = coursesContext.courses.filter((course) => {
    const today = new Date();
    const dateLastWeek = getLasWeek(today, 7);
    return course.date >= dateLastWeek && course.date <= today;
  });

  return (
    <Courses
      courses={recentCourses}
      coursesPeriod="Son 1 Hafta"
      nullText=" Yakın Zamanda herhangi bir kusa kayıdolmadınız"
    />
  );
}

const styles = StyleSheet.create({});
