import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useEffect,useState } from 'react';

function App() {
  const[quantity,setQuantity] = useState(2)
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function getData(){
      const get_ = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${quantity}&idStarts=1001`);
      const res = await get_.json();
      setData(res);
    };
    getData()
    document.title = `(${quantity}) Active User`
  },[quantity])
  return (
    <div className="App">
      <Header/>
      <button onClick={()=>setQuantity(quantity+2)}>Add Data</button>
      {
        data.map((datas,idx)=>{
          return (
            <div className='data' key={idx}>
              <h4>{datas.firstName} </h4>
              <h4>{datas.lastName}</h4>
              <h4>{datas.email}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
