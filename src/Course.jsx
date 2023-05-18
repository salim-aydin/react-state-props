import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

import React from "react";

const courseMap = {
    Angular: Angular,
    Bootstrap: Bootstrap,
    Ccsharp: Ccsharp,
    Kompleweb: Kompleweb,
}


function Course({ courseName }) {
  console.log(Angular)
  console.log(courseName);
  console.log(courseMap[courseName]);


  return (
    <div>
      <img src={courseMap[courseName]} alt="resim" width="400" height="200" />
    </div>
  );
}

export default Course;