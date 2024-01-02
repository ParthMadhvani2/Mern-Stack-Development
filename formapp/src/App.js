import './App.css';
import { useState } from 'react';

function App() {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    // console.log(firstName);
    // console.log(lastName);
    // function changeFirstNameHandler(event){
    //   // console.log("printing first name");
    //   // console.log(event.target.value);
    //   setFirstName(event.target.value);
    // }
    // function changeLastNameHandler(event){
    //   // console.log("printing last name");
    //   // console.log(event.target.value);
    //   setLastName(event.target.value);
    // }

    // // create an object
  const[formData, setFormData] = useState ({firstName:"",lastName:"",email:""});
  
  function changeHandler(event){
    setFormData(prevFormData => {
     return{
      ...prevFormData,
      [event.target.name] : event.target.value
    }
    });
  }
  return (
    <div className="App">
      <form>

        <br/>
        <br/>

        <input type="text" placeholder='first name' onChange={changeHandler} name="firstName" value={formData.firstName}/>
        
        <br/>
        <br/>

        <input type="text" placeholder='last name' onChange={changeHandler} name="lastName"  value={formData.lastName}/>
      
        <br/>
        <br/>
        <input type="email" placeholder='Enter your email here' onChange={changeHandler} name="email"  value={formData.email}/>
      
      
      </form>
    </div>
  );
}

export default App;
