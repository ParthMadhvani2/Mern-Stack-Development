import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses , setCourses] = useState([]);
  const [loading , setloading] = useState(true);
    
  async function fetchData(){
    setloading(true);
    try{
      let responce = await fetch(apiUrl);
      let output = await responce.json();
      /// output -> 
      setCourses(output.data);
    }
    catch(error){
      toast.error("Check your Network");
    }
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      <Filter
      filterData={filterData}
      />
      </div>
      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  );
};

export default App;
