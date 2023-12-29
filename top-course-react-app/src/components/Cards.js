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
        {
        getCourses().map((cources) => {
            <Card/>
        })
    }
    </div>
  )
}

export default Cards;