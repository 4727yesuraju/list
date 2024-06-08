
import react,{useState,useEffect} from 'react';
import SearchField from './components/SearchField';
import FetchData from './hooks/FetchData';
import Container from './components/Container';
import { Route, Routes } from 'react-router-dom';
import Info from './components/Info';
import LimitBar from './components/LimitBar';


function App() {
  const [data,setData] = useState([]);
  const [text,setText] = useState("");
  const [filteredData,setFilteredData]  = useState([]);
  const [limit,setLimit] = useState(8)

  const fetchData = FetchData();

  useEffect(()=>{
    fetchData(setData,limit);
    fetchData(setFilteredData,limit);
  },[limit]);

  useEffect(()=>{
    console.log("hia");
    setFilteredData([...data.filter(item=>item.breeds[0].name.toLowerCase().includes(text))]);
  },[text]);


  return (
    <>
      <SearchField text={text} setText={setText} limit={limit} setLimit={setLimit}/>
      <Routes>
         <Route path="/" element={<Container data={filteredData} limit={limit} setLimit={setLimit}/>} />
         <Route path="/:id" element={<Info data={filteredData} />} />
      </Routes>
    </>
  );
}

export default App;
