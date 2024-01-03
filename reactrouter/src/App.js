import './App.css';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home Page</div>}/>
        <Route path="/support" element={<div>Support Page</div>}/>
        <Route path="/about" element={<div>About Page</div>}/>
        <Route path="/labs" element={<div>Labs Page</div>}/>
        <Route path="*" element={<div>Not found page</div>}/>
      </Routes>
    </div>
  );
}

export default App;
