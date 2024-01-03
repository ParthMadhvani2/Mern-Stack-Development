import './App.css';
import { useState } from 'react';

function App() {

  //useState
  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", 
  })

  //function for checking the check box 
  function changeHandler(event) {
    const {name,value,checked,type} = event.target;
    setFormData((prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  // steps to do after the submit button is been clicked
  function submitHandler(event){
    event.preventDefault();
    // this prevents the tasks that is done by default by clicking the submit button

    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  
  return (
    <div className='flex flex-col items-center mt-2'>
      <h1>Form APP</h1>
      <form onSubmit={submitHandler}>

        <label htmlFor='firstName'>First Name</label>
        <br/>
        <input type='text' name="firstName" id="firstName" placeholder='Parth' value={formData.firstName} onChange={changeHandler} className='outline'/>
        <br/>

        <label htmlFor='lastName'>Last Name</label>
        <br/>
        <input type='text' name="lastName" id='lastName' placeholder='Madhvani' value={formData.lastName} onChange={changeHandler} className='outline'/>
        <br/>

        <label htmlFor='email'>Email address</label>
        <br/>
        <input type='email' name="email" id='email' placeholder='parth@abcd.com' value={formData.email} onChange={changeHandler} className='outline'/>
        <br/>

        <label htmlFor='country'>Country</label>
        <br/>
        <select id='country' name='country' value={formData.country} onChange={changeHandler} className='outline'>
          
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        
        </select>
        <br/>

        <label htmlFor='streetAddress'>Street address</label>
        <br/>
        <input type='text' name="streetAddress" id='streetAddress' placeholder='1234 Main St' value={formData.streetAddress} onChange={changeHandler} className='outline'/>
        <br/>

        <label htmlFor='city'>City</label>
        <br/>
        <input type='text' name="city" id='city' placeholder='Surat' value={formData.city} onChange={changeHandler} className='outline'/>
        <br/>

        <label htmlFor='state'>State / Province</label>
        <br/>
        <input type='text' name="state" id='state' placeholder='Gujarat' value={formData.state} onChange={changeHandler} className='outline'/>
        <br/>

        <label htmlFor='postalCode'>ZIP / Postal Code</label>
        <br/>
        <input type='text' name="postalCode" id='postalCode' placeholder='395009' value={formData.postalCode} onChange={changeHandler} className='outline'/>
        <br/>

        <br/>
        <fieldset>

        <legend>By Email</legend>
        <br/>
        <input type="checkbox"/>
        <label>Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
        <br/>
        <input type="checkbox"/>
        <label>Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
        <br/>
        <input type="checkbox"/>
        <label>Offers</label>
        <p>Get notified when a candidate accepts or rejects an offer.</p>
        </fieldset>
        <label>Push Notifications</label>
        <p>These are delivered via SMS to your mobile phone.</p>
        <br/>
        <br/>

      </form>
    </div>
  );
}


export default App;
