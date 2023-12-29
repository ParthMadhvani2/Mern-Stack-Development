import React from 'react'
import Card from './Card';

export const Cards = ({courses}) => {

    let allCources = [];
    // retirns you a list of all courses received from the api responce
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.foreach((course) => {
                allCources.push(course);
            })
        })
        return allCources;
    }

  return (
    <div>
        {!courses ? (
            <div>
                <p>NO Data Found</p>
            </div>
        ) : (
            getCourses().map((course) => {
                return <Card key ={course.id} course={course}/>
              })
        ) }
    </div>
  )
}

export default Cards;