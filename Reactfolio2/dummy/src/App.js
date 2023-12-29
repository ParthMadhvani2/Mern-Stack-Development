import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text,setText] = useState('');
  const [name,setName] = useState('Parth');

  // variation 1 -> Every render
  // useEffect(() => {
  //   console.log("UI rendering done")
  // });


  // variation 2 ->
  // useEffect(() =>{
  //   console.log("UI Rendering done")
  // },[]);


  // variation 3 -> on first render + whenever dependency changes
  // useEffect(() => {
  //   console.log("Change Observed")
  // },[name]);


  // variation 4 -> to handle unmounting of a component
  useEffect(() => {
    // add event listner
    console.log("Listner Add")

    return () => {
      console.log("Listner removed");
    } 
  },[text]);
  function changeHandler(event){
    console.log(text);
    setText(event.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
