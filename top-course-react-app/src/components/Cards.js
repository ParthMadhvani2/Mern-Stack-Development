import React from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;

    // retirns you a list of all courses received from the api responce
    function getCourses() {
        let allCources = [];
        Object.values(courses).forEach(array => {
            array.foreach(courseData => {
                allCources.push(courseData);
            })
        })
        return allCources;
    }

  return (
    <div>
        {
            getCourses().map((course) =>(
                <Card key={course.id} course = {course}/>
            ))
        }
    </div>
  )
}

export default Cards;