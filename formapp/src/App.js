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
  const[formData, setFormData] = useState ({firstName:"",lastName:"",email:"",comments:"",isVisible:true,mode:"",favCar:""});
  // console.log(formData);
  function changeHandler(event){

    const {name,value,checked,type} = event.target;
    setFormData(prevFormData => {
     return{
      ...prevFormData,
      [name] : type ==="checkbox" ? checked : value
    }
    });
  }


  function submitHandler(event){
    event.preventDefault();
    // print
    console.log("Finally printing the entire form data.....");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <br/>
        <br/>

        <input type="text" placeholder='first name' onChange={changeHandler} name="firstName" value={formData.firstName}/>
        
        <br/>
        <br/>

        <input type="text" placeholder='last name' onChange={changeHandler} name="lastName"  value={formData.lastName}/>
      
        <br/>
        <br/>
        <input type="email" placeholder='Enter your email here' onChange={changeHandler} name="email"  value={formData.email}/>

        <br/>
        <br/>
        <textarea placeholder='Write your comments here' onChange={changeHandler} name="comments"  value={formData.comments}/>
      
        <br/>
        <br/>
        <input type="checkbox" onChange={changeHandler} name="isVisible"  checked={formData.isVisible} id='isVisible'/>
        <label htmlFor='isVisible'>Am I Visible</label>

        <br/>
        <br/>
        <br/>
        <fieldset>
          <legend>Mode</legend>

        <input type="radio" onChange={changeHandler} name="mode"  value="Online-mode" id='Online-mode' checked={formData.mode === "Online-mode"}/>{ /* Imp for checked button */}
        <label htmlFor='Online-mode'>Online-mode</label>


        <input type="radio" onChange={changeHandler} name="mode"  value="Offline-mode" id='Online-mode' checked={formData.mode === "Offline-mode"}/>
        <label htmlFor='Offline-mode'>Offline-mode</label>
        </fieldset>

        <br/>
        <br/>
        <label htmlFor='favCar'>Tell me your Favourite Car </label>
        <select name="favCar" id="favCar" value={formData.favCar} onChange={changeHandler}>
          <option value="Scorpio">Scorpio</option>
          <option value="Thar">Thar</option>
          <option value="Jeep">Jeep</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
          <option value="Fortuner">Fortuner</option>
        </select>
        <br/>
        <br/>
        {/* <input type='submit' value='submit'/> */}
        <button>Submit</button>




      </form>
    </div>
  );
}

export default App;
