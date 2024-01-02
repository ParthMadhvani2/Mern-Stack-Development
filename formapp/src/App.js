import './App.css';

function App() {

    function changeHandler(event){
      console.log(event.target.value);
    }

  return (
    <div className="App">
      <form>
        <input type="text" placeholder='name' onChange={changeHandler}/>

      </form>
    </div>
  );
}

export default App;
