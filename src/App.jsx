import React from "react";
import { useState } from "react";
import Course from "./Course";

function getRandomCourse() {
  const coursesArray = ["Angular", "Bootstrap", "Ccsharp", "Kompleweb"];
  return coursesArray[Math.floor(Math.random() * coursesArray.length)]; // Math.floor 4.9'yu 4'e yuvarlar

  // Math.random 0 ile 1 arasında bir sayı üretir
  // courseArray.length 4 döndürür ,
  // Math.random 0.000 dahil , 0,999  a kadar sayı üretir
  // Math.random * courseArray.length 0.000 ile 3.999 arasında sayı üretir
  // Math.floor 0.000 0.999 arasındaki sayıları 0 yapar
  // Math.floor 3.000 3.999 arasındaki sayıları 3 yapar
}
function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); // ...courses dizinin kopyasını alır , getRandomCourse() dizinin sonuna ekler , setCourses ile courses dizisini günceller
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      
      <button onClick={handleClick}>Add Course</button>
      <div>{courseList}</div>
    </div>
  );
}

export default App;