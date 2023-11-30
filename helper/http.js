import axios from "axios";

const url = "https://react-native-329f5-default-rtdb.firebaseio.com";

export async function storeCourse(CourseData) {
 const response= await  axios.post(url + "/courses.json", CourseData);
 const id = response.data.name;
 return id;
}

export async function getCourse() {
  const response = await axios.get(url + "/courses.json");
  const courses = [];

  for (const key in response.data) {
    const courseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    courses.push(courseObj);
  }
  return courses;
}


export  function updateCourse(id,CourseData) {
   return axios.put(url + `/courses/${id}.json`, CourseData);

   }

export  function deleteCourseHttp(id,CourseData) {
  return  axios.delete(url + `/courses/${id}.json`, CourseData);

   }