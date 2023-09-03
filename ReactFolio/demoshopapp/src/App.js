import './App.css';
import Item from './components/Items';
import ItemDate from './components/ItemDate'; 
import Cards from './components/Cards'; 

function App() {
  const ItemTwoName = "SurfExcel";
  // arrary or JSON
  const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"Jan",
      itemYear:"2000",
    },
    {
      itemName:"SurfExcel",
      itemDate:"22",
      itemMonth:"Feb",
      itemYear:"2002",
    },
    {
      itemName:"Wheel",
      itemDate:"24",
      itemMonth:"March",
      itemYear:"2004", 
    }
  ];

  return (
    <div>
      <Cards>
      {/* how to pass props */}
    <Item name={response[0].itemName}>
      Hello I am the first item
    </Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
    
    <Item name={ItemTwoName}></Item>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
    
    <Item name={response[2].itemName}></Item>
    <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    

    <div className="App">
        hello jee
    </div>
    </Cards>
    </div>
  );
}

export default App;
